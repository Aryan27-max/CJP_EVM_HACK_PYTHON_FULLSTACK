"use client";

import { useEffect, useState, useRef } from "react";
import Footer from "@/components/Footer";


interface StickerPopup {
  id: string;
  text: string;
  left: string;
  top: string;
  rotation: number;
  scale: number;
  opacity: number;
  translateY: number;
}

export default function Home() {
  const [currentScreen, setCurrentScreen] = useState<number>(1);
  const [hudCpu, setHudCpu] = useState<string>("12%");
  const [hudRam, setHudRam] = useState<string>("4096 MB");

  // Screen 1: Loading States
  const [loadingTextIndex, setLoadingTextIndex] = useState<number>(0);
  const [loadingProgress, setLoadingProgress] = useState<number>(0);

  // Screen 3: Attack Sequence States
  const [attackProgress, setAttackProgress] = useState<number>(13);
  const [terminalLogs, setTerminalLogs] = useState<string[]>([]);
  const [popups, setPopups] = useState<StickerPopup[]>([]);
  const terminalRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Screen 4: Critical Climax States
  const [redFlashOpacity, setRedFlashOpacity] = useState<number>(0);

  // Screen 5: Final Results States
  const [revealedCards, setRevealedCards] = useState<number>(0);

  // Audio initialization and page unloading cleanup
  useEffect(() => {
    if (typeof window !== "undefined") {
      audioRef.current = new Audio("/laude-ne-bhojyam-made-with-Voicemod.mp3");
      audioRef.current.loop = true;
    }
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  // Play audio on Screen 3 (Attack Sequence) and pause otherwise
  useEffect(() => {
    if (currentScreen === 3) {
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.play().catch(err => {
          console.log("Audio playback failed to start:", err);
        });
      }
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    }
  }, [currentScreen]);

  const loadingTexts = [
    "BOOTING PYTHON FULLSTACK...",
    "CONNECTING TO DEMOCRACY.EXE...",
    "LOCATING EVM VIA BLUETOOTH...",
    "INITIALIZING SYNTAX ERROR...",
    "DOWNLOADING ACHHE_DIN.DLL..."
  ];

  const logs = [
    "Contacting Modi ji...",
    "Authenticating JWTs from Amit Shah... [OK]",
    "Fetching Buldozer APIs from AdityaNath Yogi... [OK]",
    "Financing from Gautam Adani... [VERIFIED]",
    "Vote Chori In Progress...",
    "Connecting to EVM via Bluetooth Speaker... [CONNECTED]",
    "sudo apt install achhe_din",
    "Generating Python Fullstack Payload...",
    "Changing 3 Lines Of Code...",
    "Injecting Syntax Error...",
    "Downloading Democracy.dll...",
    "Democracy.exe responding."
  ];

  const popupTexts = [
    "Aura +1000",
    "Certified LinkedIn Expert Detected",
    "VISHWAGURU MODE ACTIVATED",
    "3rd Term Guaranteed"
  ];

  // Auto scroll terminal logs
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [terminalLogs]);

  // HUD fake meters interval
  useEffect(() => {
    const interval = setInterval(() => {
      setHudCpu(Math.floor(Math.random() * 80 + 10) + "%");
      setHudRam(Math.floor(Math.random() * 2000 + 4000) + " MB");
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Screen 1: Loading Sequence
  useEffect(() => {
    if (currentScreen === 1) {
      setLoadingTextIndex(0);
      setLoadingProgress(0);
      let textIdx = 0;
      const interval = setInterval(() => {
        textIdx++;
        if (textIdx < loadingTexts.length) {
          setLoadingTextIndex(textIdx);
          setLoadingProgress((textIdx / loadingTexts.length) * 100);
        } else {
          clearInterval(interval);
          setLoadingProgress(100);
          setTimeout(() => {
            setCurrentScreen(2);
          }, 500);
        }
      }, 800);
      return () => clearInterval(interval);
    }
  }, [currentScreen]);

  // Helper to spawn sticker popup
  const spawnPopup = () => {
    const id = Math.random().toString(36).substring(2);
    const text = popupTexts[Math.floor(Math.random() * popupTexts.length)];
    const left = Math.random() * 70 + 10 + "%";
    const top = Math.random() * 70 + 10 + "%";
    const rotation = Math.random() * 20 - 10;

    const newPopup: StickerPopup = {
      id,
      text,
      left,
      top,
      rotation,
      scale: 0.5,
      opacity: 1,
      translateY: 0
    };

    setPopups(prev => [...prev, newPopup]);

    // Animate scale to 1.2
    setTimeout(() => {
      setPopups(prev =>
        prev.map(p => (p.id === id ? { ...p, scale: 1.2 } : p))
      );
    }, 10);

    // Fade out and translate up
    setTimeout(() => {
      setPopups(prev =>
        prev.map(p =>
          p.id === id ? { ...p, opacity: 0, scale: 1.5, translateY: -20 } : p
        )
      );
    }, 800);

    // Remove from array
    setTimeout(() => {
      setPopups(prev => prev.filter(p => p.id !== id));
    }, 1500);
  };

  // Screen 3: Attack Sequence
  useEffect(() => {
    if (currentScreen === 3) {
      setAttackProgress(13);
      setTerminalLogs([]);
      setPopups([]);
      let logIndex = 0;
      let currentProgress = 13;

      const interval = setInterval(() => {
        if (logIndex < logs.length) {
          // Add terminal log
          setTerminalLogs(prev => [...prev, logs[logIndex]]);

          // Increment progress unpredictably
          currentProgress += Math.floor(Math.random() * 15);
          if (currentProgress > 99 && logIndex < logs.length - 1) {
            currentProgress = 99; // Hold at 99%
          }
          if (logIndex === logs.length - 1) {
            currentProgress = 100;
          }
          setAttackProgress(currentProgress);

          // Random sticker bubble popup
          if (Math.random() > 0.6) {
            spawnPopup();
          }

          logIndex++;
        } else {
          clearInterval(interval);
          setTimeout(() => {
            setCurrentScreen(4);
          }, 1000);
        }
      }, 1000); // 👈 DISPLAY TIME FOR LOGS: This defines how long (in milliseconds) each prompt log takes to show up.

      return () => clearInterval(interval);
    }
  }, [currentScreen]);

  // Screen 4: Critical Climax
  useEffect(() => {
    if (currentScreen === 4) {
      document.body.classList.add("is-shaking");

      let flashes = 0;
      const flashInterval = setInterval(() => {
        setRedFlashOpacity(flashes % 2 === 0 ? 0.8 : 0);
        flashes++;
        if (flashes > 7) {
          clearInterval(flashInterval);
          setRedFlashOpacity(0);
        }
      }, 80);

      const transitionTimeout = setTimeout(() => {
        document.body.classList.remove("is-shaking");
        setCurrentScreen(5);
      }, 2500);

      return () => {
        clearInterval(flashInterval);
        clearTimeout(transitionTimeout);
        document.body.classList.remove("is-shaking");
      };
    }
  }, [currentScreen]);

  // Screen 5: Final Results Card Reveals
  useEffect(() => {
    if (currentScreen === 5) {
      setRevealedCards(0);
      const t1 = setTimeout(() => setRevealedCards(1), 300);
      const t2 = setTimeout(() => setRevealedCards(2), 500);
      const t3 = setTimeout(() => setRevealedCards(3), 700);

      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
        clearTimeout(t3);
      };
    }
  }, [currentScreen]);

  // Tenor Embed widget handler
  useEffect(() => {
    if (currentScreen === 3) {
      const existingScript = document.querySelector(
        'script[src="https://tenor.com/embed.js"]'
      );
      if (existingScript) {
        // @ts-ignore
        if (window.Tenor && window.Tenor.writeEmbeds) {
          // @ts-ignore
          window.Tenor.writeEmbeds();
        }
      } else {
        const script = document.createElement("script");
        script.src = "https://tenor.com/embed.js";
        script.async = true;
        document.body.appendChild(script);
      }
    }
  }, [currentScreen]);

  const handleRestart = () => {
    setCurrentScreen(1);
  };

  return (
    <div className="text-brutal-black font-body-md overflow-x-hidden selection:bg-accent-magenta selection:text-white min-h-screen flex flex-col justify-between">
      {/* FLOATING STICKERS */}
      <div className="fixed top-32 left-10 z-0 transform -rotate-6 select-none pointer-events-none hidden sm:block">
        <div className="sticker-label bg-accent-magenta text-white shadow-brutal text-xl">
          ✨ NO COPE ZONE
        </div>
      </div>
      <div className="fixed top-40 right-20 z-0 transform rotate-12 select-none pointer-events-none hidden sm:block">
        <div className="sticker-label bg-accent-yellow text-brutal-black shadow-brutal text-xl">
          🤫 TRASH TALK ONLY
        </div>
      </div>

      {/* TOP NAVIGATION SHELL */}
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 bg-bg-peach/90 border-b-brutal border-brutal-black backdrop-blur-sm">
        <div className="font-headline-lg-mobile text-2xl sm:text-headline-lg-mobile font-black tracking-tighter text-accent-yellow brutal-text-shadow transform -rotate-2">
          EVM&apos;HACK
          <div className="text-xs font-label-caps text-accent-magenta brutal-text-shadow-none tracking-normal mt-1 italic font-black">
            VOTE CHORRI
          </div>
        </div>
        <div className="hidden md:flex gap-4 items-center font-label-caps text-label-caps italic">
          <a
            className="bg-white border-brutal border-brutal-black px-4 py-2 shadow-brutal hover:shadow-brutal-lg hover:-translate-y-1 transition-all transform -rotate-2 flex items-center gap-2"
            href="#"
            onClick={e => e.preventDefault()}
          >
            <span className="text-lg">🥊</span> 400 par
          </a>
          <a
            className="bg-white border-brutal border-brutal-black px-4 py-2 shadow-brutal hover:shadow-brutal-lg hover:-translate-y-1 transition-all transform rotate-1 flex items-center gap-2"
            href="#"
            onClick={e => e.preventDefault()}
          >
            <span className="text-lg">🎨</span> Meloni
          </a>
          <a
            className="bg-accent-yellow border-brutal border-brutal-black px-4 py-2 shadow-brutal hover:shadow-brutal-lg hover:-translate-y-1 transition-all transform -rotate-1 flex items-center gap-2"
            href="#"
            onClick={e => e.preventDefault()}
          >
            <span className="text-lg">🏆</span> modi
          </a>
          <a
            className="bg-accent-cyan border-brutal border-brutal-black px-4 py-2 shadow-brutal hover:shadow-brutal-lg hover:-translate-y-1 transition-all transform rotate-2 flex items-center gap-2"
            href="#"
            onClick={e => e.preventDefault()}
          >
            <span className="text-lg">👤</span> BJP
          </a>
        </div>
      </nav>

      {/* HUD ELEMENTS */}
      <div className="fixed top-20 md:top-28 right-4 md:right-8 left-4 md:left-auto z-40 flex flex-row md:flex-col gap-1 md:gap-2 font-code-sm text-[10px] md:text-code-sm select-none md:w-auto w-[calc(100%-2rem)] justify-between">
        <div className="bg-white border-brutal border-brutal-black px-2 md:px-3 py-1 shadow-brutal flex justify-between flex-1 md:w-40 transform rotate-1 md:rotate-2">
          <span className="text-accent-magenta">CPU:</span>
          <span>{hudCpu}</span>
        </div>
        <div className="bg-white border-brutal border-brutal-black px-2 md:px-3 py-1 shadow-brutal flex justify-between flex-1 md:w-40 transform -rotate-1">
          <span className="text-accent-cyan">RAM:</span>
          <span>{hudRam}</span>
        </div>
        <div className="bg-accent-yellow border-brutal border-brutal-black px-2 md:px-3 py-1 shadow-brutal flex justify-between flex-1 md:w-40 transform rotate-1">
          <span className="text-brutal-black font-black">NET:</span>
          <span className="animate-pulse font-black">ESTAB.</span>
        </div>
      </div>

      {/* MAIN CONTENT CONTAINER */}
      <main className="relative z-20 pt-44 md:pt-32 pb-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto min-h-screen w-full flex-1 flex flex-col justify-center">
        {/* SCREEN 1: LOADING */}
        <section
          className={`flex-col items-center justify-center min-h-[80vh] w-full ${currentScreen === 1 ? "flex active-screen screen-transition" : "hidden hidden-screen"
            }`}
        >
          <div className="brutal-card p-6 sm:p-12 flex flex-col items-center transform -rotate-1 relative w-full max-w-lg mx-auto">
            <div className="absolute -top-6 -left-6 sticker-label bg-accent-cyan text-brutal-black transform -rotate-12 text-sm z-10">
              INITIALIZING...
            </div>
            <div className="relative w-48 h-48 mb-8 animate-[sticker-wobble_3s_infinite]">
              <img
                alt="Loading Logo"
                className="w-full h-full object-contain filter drop-shadow-[8px_8px_0px_rgba(0,0,0,1)]"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBW10DL56OwDD6K4Axb4qaSNl3JrdIKM7hFvunr9O8yLkUhBSoSfapYacnqGWg_wuFOu-vRYEM_kdAfN13dfW2X5c5bgRwvK_SsPy3Nr8owO0UqtWMv1LqlEgFqWbvNdxz6mxO4mjsWkYe9Bx0rLnA_zoNQPzItYQ0YKEgB6KxkWQ3b7dZi1tibXqIRcZzI58Z7sGf-ZMgenJeiNqlKU8dis6QAt5VM7RPAxdrOctag73zZntGuK0b-JB-1A0Z48XALvBOa60EQFF4"
              />
            </div>
            <div className="w-full max-w-md text-center">
              <div className="font-label-caps text-label-caps text-brutal-black mb-4 uppercase font-black">
                {loadingTexts[loadingTextIndex]}
              </div>
              <div className="h-6 w-full border-brutal border-brutal-black bg-white overflow-hidden relative shadow-brutal">
                <div
                  className="h-full bg-accent-magenta transition-all duration-300 ease-out border-r-brutal border-brutal-black"
                  style={{ width: `${loadingProgress}%` }}
                ></div>
              </div>
            </div>
          </div>
        </section>

        {/* SCREEN 2: HERO */}
        <section
          className={`flex-col items-center justify-center min-h-[80vh] text-center w-full ${currentScreen === 2 ? "flex active-screen screen-transition" : "hidden hidden-screen"
            }`}
        >
          <div className="z-10 flex flex-col items-center max-w-4xl">
            <div className="flex gap-2 mb-6">
              <div className="sticker-label bg-brutal-black text-accent-yellow">
                pip i
              </div>
              <div className="sticker-label bg-accent-magenta text-white">
                BETA VERSION
              </div>
            </div>
            <h1 className="font-display-xl text-5xl sm:text-6xl md:text-display-xl font-extrabold text-brutal-black mb-6 uppercase brutal-text-shadow-magenta leading-[0.9] transform -rotate-2">
              PYTHON <br />
              FULLSTACK
            </h1>
            <p className="font-title-md text-xl sm:text-title-md text-brutal-black mb-10 max-w-2xl mx-auto font-black">
              ( Hack EVMS in 3 lines (Clcik here 👇) )
            </p>
            <div className="w-full max-w-lg bg-white border-brutal border-brutal-black shadow-brutal p-2 mb-8 relative group transform rotate-1">
              <div className="flex items-center bg-bg-peach px-4 py-3 border-brutal border-brutal-black">
                <span className="font-code-sm text-brutal-black mr-3 font-black">
                  root@democracy:~#
                </span>
                <input
                  className="bg-transparent border-none outline-none text-accent-magenta font-code-sm font-black w-full focus:ring-0 p-0 shadow-none cursor-default"
                  readOnly
                  type="text"
                  value="pip install evm_hack"
                />
              </div>
            </div>
            <button
              className="bg-accent-yellow border-brutal border-brutal-black text-brutal-black font-headline-lg-mobile text-xl sm:text-headline-lg-mobile px-6 sm:px-12 py-3 sm:py-4 shadow-brutal transition-all hover:translate-y-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-y-2 active:shadow-none uppercase font-black transform -rotate-1 cursor-pointer"
              onClick={() => setCurrentScreen(3)}
            >
              SYNTAX ERROR !!
            </button>
          </div>
          <div className="mt-8 sm:mt-16 w-full max-w-3xl border-brutal border-brutal-black bg-white shadow-brutal-lg relative h-48 sm:h-64 overflow-hidden">
            <div className="absolute top-2 sm:top-4 left-2 sm:left-4 sticker-label bg-accent-magenta text-white transform -rotate-3 z-10 text-[10px] sm:text-xs">
              ACTIVE FIGHTER
            </div>
            <div className="absolute top-2 sm:top-4 right-2 sm:right-4 sticker-label bg-accent-yellow text-brutal-black transform rotate-3 z-10 text-[10px] sm:text-xs">
              2.4M FANS
            </div>
            <div className="absolute inset-0 flex items-center justify-center p-8 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
              <img
                alt="Smiling Cat Hack Entity"
                className="h-full object-contain filter drop-shadow-[4px_4px_0px_rgba(0,0,0,1)] animate-[sticker-wobble_4s_infinite]"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWkYrqeKUB0fpHp7Tuc7swOBMhZfa1lRJPIYFCGa8JIWkWqA_ynr2bLuGGcqlB-jdqp1-qH11kjeOnpuxi0ATKogW_fHb3NpyV-jkb_6PoUqJ0l4FlPhhjvCeiXY_WO83p0Ct6dw5LXGhfAWJBgiB_goylsrzA7u150X4Y2kAnY3vUB7FQ3I3YzMhTF4-acQA9C5IKYBqHdTWsKIabV6qnsqau_1zJndHlQSh2PFM-1Ic6jG_b4gFd_1apYvzLnQflAMZRM1rFVe0"
              />
            </div>
          </div>
        </section>

        {/* SCREEN 3: ATTACK SEQUENCE */}
        <section
          className={`flex-col gap-8 min-h-[80vh] py-12 w-full ${currentScreen === 3 ? "flex active-screen screen-transition" : "hidden hidden-screen"
            }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-full items-stretch">
            {/* Tenor GIF */}
            <div className="col-span-1 lg:col-span-5 flex flex-col items-center justify-center">
              {/* Scroll Down Indicator (Mobile Only) */}
              <button
                onClick={() => window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" })}
                className="flex lg:hidden mb-6 animate-bounce z-10 cursor-pointer border-none bg-transparent p-0 outline-none"
              >
                <span className="bg-accent-yellow border-brutal border-brutal-black text-brutal-black px-4 py-1.5 text-xs font-black uppercase shadow-brutal tracking-wider flex items-center gap-2">
                  SCROLL DOWN <span className="text-sm font-black">↓</span>
                </span>
              </button>
              <div className="w-full bg-white p-4 border-brutal border-brutal-black shadow-brutal transform -rotate-2 relative">
                <div className="absolute -top-4 -right-4 sticker-label bg-accent-cyan text-brutal-black transform rotate-6 z-10">
                  HACK IN PROGRESS
                </div>
                <iframe
                  src="https://tenor.com/embed/1801489096118920303"
                  className="w-full aspect-square border-brutal border-brutal-black"
                  allowFullScreen
                  scrolling="no"
                  style={{ border: "none" }}
                />
              </div>
            </div>
            {/* Terminal & Progress */}
            <div className="col-span-1 lg:col-span-7 flex flex-col gap-6">
              {/* Progress Panel */}
              <div className="bg-white border-brutal border-brutal-black shadow-brutal p-6 flex flex-col gap-4 transform rotate-1">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-2 sm:gap-0 font-code-sm font-black uppercase">
                  <span className="text-accent-magenta animate-pulse text-lg sm:text-xl">
                    OPERATION: SYNTAX_ERROR
                  </span>
                  <span className="text-4xl font-display-xl text-brutal-black brutal-text-shadow-yellow">
                    {attackProgress}%
                  </span>
                </div>
                <div className="h-8 w-full bg-bg-peach border-brutal border-brutal-black overflow-hidden relative">
                  <div className="hazard-bg-brutal w-full h-full absolute"></div>
                  <div
                    className="h-full bg-accent-magenta border-r-brutal border-brutal-black transition-all duration-200 relative z-10"
                    style={{ width: `${attackProgress}%` }}
                  ></div>
                </div>
              </div>
              {/* Terminal Logs */}
              <div className="bg-brutal-black border-brutal border-brutal-black shadow-brutal-magenta p-6 flex-1 font-code-sm text-code-sm overflow-hidden relative transform -rotate-1 flex flex-col">
                <div
                  ref={terminalRef}
                  className="flex flex-col gap-3 h-64 overflow-y-auto pr-4 text-accent-cyan font-black uppercase tracking-widest"
                >
                  {terminalLogs.map((log, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 mb-1 transition-all duration-200"
                    >
                      <span className="text-accent-yellow">&gt;</span>
                      <span className="text-white">{log}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Random Popups Container */}
          <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
            {popups.map(popup => (
              <div
                key={popup.id}
                className="absolute sticker-label bg-white text-brutal-black text-xl z-50 transition-all duration-700 font-black"
                style={{
                  left: popup.left,
                  top: popup.top,
                  transform: `rotate(${popup.rotation}deg) scale(${popup.scale}) translateY(${popup.translateY}px)`,
                  opacity: popup.opacity
                }}
              >
                {popup.text}
              </div>
            ))}
          </div>
        </section>

        {/* SCREEN 4: CRITICAL MOMENT */}
        <section
          className={`flex-col items-center justify-center min-h-[80vh] relative w-full ${currentScreen === 4 ? "flex active-screen screen-transition" : "hidden hidden-screen"
            }`}
        >
          <div
            className="absolute inset-0 bg-accent-magenta mix-blend-multiply pointer-events-none transition-opacity duration-75"
            style={{ opacity: redFlashOpacity }}
          ></div>
          <div className="text-center z-10 brutal-card p-6 sm:p-16 transform rotate-2 bg-white w-full max-w-xl mx-auto">
            <h2 className="font-display-xl text-3xl sm:text-4xl md:text-[6vw] leading-[0.9] font-black text-brutal-black mb-4 uppercase relative inline-block">
              SYNTAX ERROR
              <br />
              DETECTED
            </h2>
            <div className="mt-8">
              <span className="font-headline-lg text-xs sm:text-lg md:text-headline-lg text-accent-yellow bg-brutal-black border-brutal border-brutal-black px-2 sm:px-6 py-2 sm:py-4 uppercase block shadow-brutal-magenta transform -rotate-2">
                DEMOCRACY.EXE HAS STOPPED WORKING
              </span>
            </div>
          </div>
        </section>

        {/* SCREEN 5: FINAL RESULTS */}
        <section
          className={`flex-col items-center py-12 min-h-[80vh] w-full ${currentScreen === 5 ? "flex active-screen screen-transition" : "hidden hidden-screen"
            }`}
        >
          <h2 className="font-headline-lg text-2xl sm:text-headline-lg font-black text-brutal-black mb-8 sm:mb-16 text-center uppercase brutal-text-shadow-cyan transform -rotate-2">
            FINAL ELECTION RESULTS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
            {/* Card 1 */}
            <div
              className={`bg-white border-brutal border-brutal-black shadow-brutal group transform hover:-translate-y-2 hover:shadow-brutal-lg transition-all duration-300 rotate-1 ${revealedCards >= 1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
            >
              <div className="h-64 border-b-brutal border-brutal-black overflow-hidden relative bg-bg-peach p-4">
                <img
                  alt="Prime Minister Result"
                  className="w-full h-full object-cover border-brutal border-brutal-black"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdzmuAp2tC3wXiWxLBdgllKVrUPoRFDXGpXr2qc_xchGoYHZ3rL5bSY2I9jtCuj7hfVe-3-7YmF64iPWbAmC1x77lk3EUZfQlpjLvS0oiIttx9tDUQjwSR68VzzTEuq4nuYn6bMDy_AjxfHVv9SNYwJBNwXE-qXdjif-yrWO3xpFtyYNhxRGbMGGGVL67cj0xwtOkIOVnWt2w-cAwYlHsp_9oeEzCRNn_SVDUJulIQZ6ssx5r9I89M6ov9-7I8QF-FVD0_8i1pmQ0"
                />
                <div className="absolute top-2 right-2 sticker-label bg-accent-yellow text-brutal-black text-xs transform rotate-6 font-black">
                  WINNER
                </div>
              </div>
              <div className="p-6 relative z-20">
                <div className="font-label-caps text-accent-magenta text-xs mb-1 font-black">
                  ROLE:
                </div>
                <h3 className="font-title-md text-title-md text-brutal-black font-black uppercase">
                  Prime Minister
                </h3>
                <div className="mt-4 h-4 w-full bg-bg-peach border-brutal border-brutal-black">
                  <div className="h-full bg-accent-cyan border-r-brutal border-brutal-black w-[99%]"></div>
                </div>
                <div className="text-right font-code-sm text-xs mt-2 text-brutal-black font-black uppercase">
                  99.9% VOTE SHARE
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div
              className={`bg-white border-brutal border-brutal-black shadow-brutal group transform hover:-translate-y-2 hover:shadow-brutal-lg transition-all duration-300 -rotate-2 ${revealedCards >= 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
            >
              <div className="h-64 border-b-brutal border-brutal-black overflow-hidden relative bg-bg-peach p-4">
                <img
                  alt="Home Minister Result"
                  className="w-full h-full object-cover border-brutal border-brutal-black"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuSMiC7dkMoCQ17o_9I6zhNhHvKL9L7fR0P4QIspQKn5b3lPhz_ZfcTLyVYtYodFDbQzV131amG3D7n5SNn_-vP1g8E03wVtlrasa9Ma-i7qsm_0wBzhVGxbNtpf-60YhBXqeiOZ6rfUO5Eng7qvotVxseW6wcuBRqEZBSpzizmy20gjVsYl65lLcWNeS2-SUK6kE-oRTFCp5cjq0L5J0JVl1duYccvxfShuSU-2G1uml4iACdbDSUJ55KXzjJoMT3putsmM3RMIg"
                />
              </div>
              <div className="p-6 relative z-20">
                <div className="font-label-caps text-accent-cyan text-xs mb-1 font-black">
                  ROLE:
                </div>
                <h3 className="font-title-md text-title-md text-brutal-black font-black uppercase">
                  Home Minister
                </h3>
                <div className="mt-4 h-4 w-full bg-bg-peach border-brutal border-brutal-black">
                  <div className="h-full bg-accent-yellow border-r-brutal border-brutal-black w-[100%]"></div>
                </div>
                <div className="text-right font-code-sm text-xs mt-2 text-brutal-black font-black uppercase">
                  100.1% VOTE SHARE (OVERFLOW)
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div
              className={`bg-white border-brutal border-brutal-black shadow-brutal group transform hover:-translate-y-2 hover:shadow-brutal-lg transition-all duration-300 rotate-2 ${revealedCards >= 3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
            >
              <div className="h-64 border-b-brutal border-brutal-black overflow-hidden relative bg-bg-peach p-4">
                <img
                  alt="Chief Minister Result"
                  className="w-full h-full object-cover border-brutal border-brutal-black"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAt12LWKOJgLDds-p2FV0Pgn4OdxXEBQSNitMzy4I9ttJHqRP9C6mxzEKvvugDqUaiotJmsLQAuYeAgan_NztBJ-sv3aOMZ-CReHlR3bhnDjmSegmfE4WOFE8hTG1ydG3VHwijCeZUpD8tFk03tLFPzPmxSnzXREYyavIJpQId3EBucPid9Mr6aNlScUh6nEmNrwX3Z012Z1367pAJFLx1-bqlKhE97rEskHdBz5-ZmFHZMLcofd_vNt3oRNpcwmqbvVisjRNsZOlY"
                />
              </div>
              <div className="p-6 relative z-20">
                <div className="font-label-caps text-accent-yellow text-xs mb-1 font-black">
                  ROLE:
                </div>
                <h3 className="font-title-md text-title-md text-brutal-black font-black uppercase">
                  Chief Minister
                </h3>
                <div className="mt-4 h-4 w-full bg-bg-peach border-brutal border-brutal-black">
                  <div className="h-full bg-accent-magenta border-r-brutal border-brutal-black w-[100%]"></div>
                </div>
                <div className="text-right font-code-sm text-xs mt-2 text-brutal-black font-black uppercase">
                  BULLDOZER_API_ENABLED
                </div>
              </div>
            </div>
          </div>
          <button
            className="mt-16 bg-brutal-black border-brutal border-brutal-black text-white font-label-caps px-8 py-4 shadow-brutal hover:bg-white hover:text-brutal-black transition-colors flex items-center gap-2 text-xl font-black uppercase transform -rotate-1 cursor-pointer"
            onClick={handleRestart}
          >
            <span className="material-symbols-outlined font-bold">
              restart_alt
            </span>
            REBOOT SYSTEM
          </button>
        </section>
      </main>

      {/* FOOTER SHELL */}
      <Footer />
    </div>
  );
}
