import React, { useState, useRef, useEffect } from "react";

const keypadKeys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "C", "0", "?"];

const FloatingDecorations = () => (
  <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
    <div className="absolute top-[10%] left-[10%] animate-float opacity-50 text-4xl">⭐</div>
    <div className="absolute top-[20%] right-[15%] animate-float opacity-50 text-4xl" style={{ animationDelay: '1s' }}>☁️</div>
    <div className="absolute bottom-[20%] left-[15%] animate-float opacity-50 text-4xl" style={{ animationDelay: '2s' }}>💖</div>
    <div className="absolute bottom-[10%] right-[10%] animate-float opacity-50 text-4xl" style={{ animationDelay: '3s' }}>✨</div>
    <div className="absolute top-[40%] right-[5%] animate-float opacity-40 text-3xl" style={{ animationDelay: '1.5s' }}>🌈</div>
    <div className="absolute bottom-[40%] left-[5%] animate-float opacity-40 text-3xl" style={{ animationDelay: '2.5s' }}>🌸</div>
  </div>
);

function App() {
  const [passcode, setPasscode] = useState("");
  const [showNextPage, setShowNextPage] = useState(false);
  const [showThirdPage, setShowThirdPage] = useState(false);
  const [showCakePage, setShowCakePage] = useState(false);
  const [showLettersPage, setShowLettersPage] = useState(false);
  const [showPhotosPage, setShowPhotosPage] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const handleInteract = () => {
      if (audioRef.current && audioRef.current.paused) {
        audioRef.current.play().catch(e => console.log("Audio play failed:", e));
      }
    };
    document.addEventListener("click", handleInteract);
    return () => document.removeEventListener("click", handleInteract);
  }, []);

  const handleKeyClick = (key) => {
    if (key === "C") {
      setPasscode("");
      return;
    }
    if (key === "?") {
      setPasscode(passcode.slice(0, -1));
      return;
    }
    if (passcode.length < 4) {
      setPasscode(passcode + key);
    }
  };

  let content;
  if (showCakePage) {
    content = (
      <div className="relative flex items-center justify-center min-h-screen overflow-x-hidden kawaii-bg px-4 py-8 sm:px-6 lg:px-10">
        <FloatingDecorations />
        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center gap-6 md:gap-10">
          <h1 className="text-center text-3xl font-bold text-pink-600 sm:text-4xl md:text-5xl">
            Aru&apos;s Birthday Cake
          </h1>

          <div className="grid w-full grid-cols-1 items-center gap-6 lg:grid-cols-3 lg:gap-8">
            <div className="order-2 flex flex-col gap-4 lg:order-1">
              <img
                src="/2h.png"
                alt="Hearts"
                className="mx-auto w-full max-w-xs object-cover sm:max-w-sm"
              />
              <div className="bubbly-card p-4 text-center text-base text-slate-700 sm:text-lg">
                I will always love you no matter what
              </div>
              <div className="bubbly-card p-4 text-center text-base text-slate-700 sm:text-lg">
                You are the best part of my life
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="bubbly-card p-3 sm:p-5">
                <video
                  src="/cake5.webm"
                  className="w-full max-w-md rounded-2xl object-cover"
                  autoPlay
                  loop
                  muted
                  controls
                />
              </div>
            </div>

            <div className="order-3 flex flex-col gap-4">
              <img
                src="/face.png"
                alt="Dangling Hearts"
                className="mx-auto h-auto w-40 object-cover sm:w-52"
              />
              <div className="bubbly-card p-4 text-center text-base text-slate-700 sm:text-lg">
                You will forever be my only option.
              </div>
              <div className="bubbly-card p-4 text-center text-base text-slate-700 sm:text-lg">
                I can&apos;t imagine a life without you!!!
              </div>
            </div>
          </div>

          <button
            className="rounded-full bg-pink-600 px-8 py-3 text-base font-semibold text-white shadow-lg transition hover:bg-pink-700 active:scale-95"
            onClick={() => setShowCakePage(false)}
          >
            Go Back
          </button>
        </div>
      </div>
    );
  } else if (showLettersPage) {
    content = (
      <div className="relative flex items-center justify-center min-h-screen overflow-x-hidden kawaii-bg px-4 py-8 sm:px-6 lg:px-10">
        <FloatingDecorations />
        <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center text-center gap-4 sm:gap-6">
          <h1 className="text-center text-3xl font-bold text-pink-600 sm:text-4xl md:text-5xl">
            Words from my <span className="underline">DILL</span>
          </h1>

          <div className="bubbly-card bg-amber-50/90 p-4 sm:p-6 md:p-8">
            <div className="space-y-1 text-base leading-relaxed text-slate-700 sm:text-lg md:text-xl">
              <p>Happiest birthday To my Aruuu</p>
              <p>I'm so happpy for ur special day, </p>
              <p>so lucky to have you in my life,</p>
              <p>aapko nhi pta mai kitna khuush hhuuu..aapke special day per mai aapke sath hu</p>
              <p>I love you I love you I love you so much </p>
              <p>I know I tell you this everyday but you are</p>
              <p>literally the most beautiful girl I've ever seen</p>
              <p>I know. Anyways, I love you Bacha</p>
              <p className="pt-3 text-right font-semibold text-pink-600">Always, Forever</p>
            </div>
          </div>

          <div className="mt-2 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <img src="/cat1.png" alt="Cute Cat" className="w-full rounded-xl object-cover" />
            <img src="/flow5.png" alt="Flowers" className="w-full rounded-xl object-cover" />
            <img src="/pic14.png" alt="Decorative Pic" className="w-full rounded-xl object-cover" />
            <img src="/pic70.png" alt="Cute Anime Girl" className="absolute left-2 top-1/2 top-5-translate-y-1/2 w-36 object-cover sm:w-54 lg:w-58" />
            <img src="/pic56.png" alt="Cute Anime Girl" className="absolute right-2 top-1/2 top-5-translate-y-1/2 w-44 object-cover sm:w-60 lg:w-70" />
            <img src="/pic58.png" alt="Cute Anime Girl" className="absolute right-2 bottom-8 w-48 object-cover sm:w-65 lg:w-78" />
            <img src="/pic551.png" alt="Cute Anime Girl" className="absolute left-2 top-2/3 w-36 object-cover sm:w-54 lg:w-58" />



          </div>

          <button
            className="mx-auto mt-2 rounded-full bg-pink-600 px-8 py-3 text-base font-semibold text-white shadow-lg transition hover:bg-pink-700 active:scale-95"
            onClick={() => setShowLettersPage(false)}
          >
            Go Back
          </button>
        </div>
      </div>
    );
  } else if (showPhotosPage) {
    content = (
      <div className="relative flex items-center justify-center min-h-screen overflow-x-hidden kawaii-bg px-4 py-8 sm:px-6 lg:px-10">
        <FloatingDecorations />
        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center gap-6">
          <div className="grid w-full grid-cols-1 items-center gap-5 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl bg-white p-4 shadow-md">
              <div className="space-y-3">
                <img src="/diw5.jpeg" alt="Sunset" className="h-52 w-full rounded-lg object-cover" />
                <img src="/diw2.jpeg" alt="Couple" className="h-52 w-full rounded-lg object-cover" />
                <img src="/pink2.jpeg" alt="Flowers" className="h-52 w-full rounded-lg object-cover" />
              </div>
              <p className="pt-3 text-center text-lg font-semibold text-pink-600">MY LOVE</p>
            </div>

            <div className="bubbly-card p-4 text-center">
              <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
                Jii aapke itne saare cutu cutu photos the , ki mujhe sochne mai itna time lag gya ki mai konsi
                photos daluu yaha per dammm!!aapke pretty smile per toh mai fidaaa huuu,like itna cute koi kaise ho skta h aruuuu aaapko dekhne ke bad lagta h
                kaash ye ladki sirf mere passs rahe , the only wish i have from god is that i want to be with you. Aapke saath rekr
                aesa lagta h bs this is the best thing happening with me. I just want to hug you so tight and never let you go.
                I'm so sryy last year aapke saath jo bhee kiya maine. I promise i will never repeat those mistakes again.
                Now I just want to make you happy and I will do everything to make you happy. Apko khush dekh kr mai bhee khush hojatahuu bhautt
                ye chota sa cute sa website bana kr aapko dhikhane ke liye bhaut excited thaa. Lga nhi tha cute banjayega thoda hehehe.mere mnn mai bs yahi chal rha h kya aapko mai station per hug krpaunga ya nhi bhaut jyada excited hu
                I hope maine aapko bhaut jorr se hug kiya hogaaa AAHHH MMUUAAHH. But sach btau aapse durr rehkr mujhe bilkul achaa nhi lagta haii rozz aapko bhaut miss krta huu mnnn krta hai bs aapke baho mai rahuuu .
                I m very lucky ki aap mere life mai ho. ARUU ukw aap bhaut jyada acche ho bhautt mtlb bhauttt like mai express nhi kr skta aap kitne acche ho.





              </p>
            </div>

            <div className="rounded-2xl bg-white p-4 shadow-md md:col-span-2 lg:col-span-1">
              <div className="space-y-3">
                <img src="/pic19.jpeg" alt="Sunset" className="h-52 w-full rounded-lg object-cover" />
                <img src="/pic20.jpeg" alt="Couple" className="h-52 w-full rounded-lg object-cover" />
                <img src="/pic18.jpeg" alt="Flowers" className="h-52 w-full rounded-lg object-cover" />
              </div>
              <p className="pt-3 text-center text-lg font-semibold text-pink-600">MY LOVE</p>
            </div>
          </div>

          <div className="grid w-full max-w-4xl grid-cols-2 gap-4 sm:grid-cols-3">
            <video src="/kiss.mp4" className="w-full object-cover" autoPlay loop muted playsInline />
            <img src="/pic61.png" alt="Hearts" className="w-full object-cover" />
            <img src="/pic65.png" alt="Cute Decoration" className="col-span-2 w-full object-cover sm:col-span-1" />
            <img src="/pic69.png" alt="Cute Anime Girl" className="absolute right-2 bottom-1/4 w-48 object-cover sm:w-65 lg:w-78" />

          </div>

          <button
            className="rounded-full bg-pink-600 px-8 py-3 text-base font-semibold text-white shadow-lg transition hover:bg-pink-700 active:scale-95"
            onClick={() => setShowPhotosPage(false)}
          >
            Go Back
          </button>
        </div>
      </div>
    );
  } else if (showThirdPage) {
    content = (
      <div className="relative flex items-center justify-center min-h-screen overflow-x-hidden kawaii-bg px-4 py-10 sm:px-6">
        <FloatingDecorations />
        <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center gap-6 text-center">
          <h1 className="text-3xl font-bold text-pink-600 sm:text-4xl md:text-5xl">
            Open you presents aruu MMUUAAHH !!
          </h1>
          <p className="text-lg text-pink-500 sm:text-xl md:text-2xl">Hope you like them hehe</p>

          <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <button className="group rounded-2xl bg-white p-3 shadow-md" onClick={() => setShowCakePage(true)}>
              <img src="/gift5.webp" alt="Gift 1" className="h-52 w-full rounded-xl object-cover transition group-hover:scale-105" />
            </button>
            <button className="group rounded-2xl bg-white p-3 shadow-md" onClick={() => setShowLettersPage(true)}>
              <img src="/gift4.webp" alt="Gift 2" className="h-52 w-full rounded-xl object-cover transition group-hover:scale-105" />
            </button>
            <button className="group rounded-2xl bg-white p-3 shadow-md sm:col-span-2 lg:col-span-1" onClick={() => setShowPhotosPage(true)}>
              <img src="/gift3.webp" alt="Gift 3" className="h-52 w-full rounded-xl object-cover transition group-hover:scale-105" />
            </button>
          </div>

          <button
            className="rounded-full bg-pink-600 px-8 py-3 text-base font-semibold text-white shadow-lg transition hover:bg-pink-700 active:scale-95"
            onClick={() => setShowThirdPage(false)}
          >
            Go Back
          </button>
        </div>
      </div>
    );
  } else if (showNextPage) {
    content = (
      <div className="relative flex items-center justify-center min-h-screen overflow-x-hidden kawaii-bg px-4 py-8 sm:px-6 lg:px-10">
        <FloatingDecorations />
        <div className="pointer-events-none absolute inset-0 overflow-hidden z-20">
          <img src="/pin21.png" alt="Cute Anime Girl" className="absolute bottom-2 right-2 w-44 object-cover sm:w-56 lg:w-72" />
          <img src="/pic34.png" alt="Cute Anime Girl" className="absolute top-2 left-2 w-44 object-cover sm:w-56 lg:w-72" />
          <img src="/pic35.png" alt="Cute Anime Girl" className="absolute right-2 top-2 w-36 object-cover sm:w-44 lg:w-56" />
          <img src="/pic30.png" alt="Cute Anime Girl" className="absolute left-2 bottom-2 w-44 object-cover sm:w-56 lg:w-72" />
          <img src="/pic38.png" alt="Cute Anime Girl" className="absolute left-2 top-1/3 -translate-y-1/2 w-44 object-cover sm:w-56 lg:w-72" />
          <img src="/pic41.png" alt="Cute Anime Girl" className="absolute right-2 top-1/3 -translate-y-1/2 w-44 object-cover sm:w-56 lg:w-72" />
          <img src="/pic42.png" alt="Cute Anime Girl" className="absolute right-2 top-1/2 -translate-y-1/2 w-44 object-cover sm:w-56 lg:w-72" />
          <img src="/pic43.png" alt="Cute Anime Girl" className="absolute right-2 top-2/3 -translate-y-1/2 w-44 object-cover sm:w-56 lg:w-72" />
          <img src="/pic44.png" alt="Cute Anime Girl" className="absolute left-2 top-2/3 -translate-y-1/2 w-48 object-cover sm:w-65 lg:w-80" />
          <img src="/pic46.png" alt="Cute Anime Girl" className="absolute left-2 top-1/2 -translate-y-1/2 w-44 object-cover sm:w-60 lg:w-70" />
          <img src="/pic47.png" alt="Cute Anime Girl" className="absolute right-2 top-3/4 -translate-y-1/2 w-44 object-cover sm:w-60 lg:w-70" />
          <img src="/pic48.png" alt="Cute Anime Girl" className="absolute leftt-2 top-3/4 top-5-translate-y-1/2 w-44 object-cover sm:w-60 lg:w-70" />
        </div>

        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center gap-5">
          <img
            src="/Gemini_Generated_Image_z015v1z015v1z015.png"
            alt="Happy Birthday Card"
            className="w-full rounded-2xl border-4 border-pink-300 object-cover shadow-lg"
          />

          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-3">
            <img src="/pic1.png" alt="Girl in Black Dress" className="w-full rounded-xl object-cover" />

          </div>

          <div className="flex flex-col gap-4">
            <button
              className="rounded-full bg-pink-600 px-8 py-3 text-base font-semibold text-white shadow-lg transition hover:bg-pink-700 active:scale-95"
              onClick={() => setShowThirdPage(true)}
            >
              Click me Aruu
            </button>
            <button
              className="rounded-full border-2 border-pink-600 px-8 py-2 text-sm font-semibold text-pink-600 transition hover:bg-pink-50 active:scale-95"
              onClick={() => setShowNextPage(false)}
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    content = (
      <div className="relative flex items-center justify-center min-h-screen overflow-x-hidden kawaii-bg px-4 py-8 sm:px-6 lg:px-10">
        <FloatingDecorations />

        <div className="pointer-events-none absolute inset-0 overflow-hidden z-20">
          <img src="/pin1.png" alt="Cute Anime Girl" className="absolute bottom-2 right-2 w-36 object-cover sm:w-44 lg:w-56" />
          <img src="/pin2.png" alt="Cute Anime Girl" className="absolute bottom-2 left-2 w-36 object-cover sm:w-44 lg:w-56" />
          <img src="/pin3.png" alt="Cute Anime Girl" className="absolute right-2 top-2 w-36 object-cover sm:w-44 lg:w-56" />
          <img src="/pin4.png" alt="Cute Anime Girl" className="absolute left-2 top-2 w-36 object-cover sm:w-44 lg:w-56" />
          <img src="/pic31.png" alt="Cute Anime Girl" className="absolute left-2 top-1/2 -translate-y-1/2 w-44 object-cover sm:w-56 lg:w-56" />
          <img src="/pic33.png" alt="Cute Anime Girl" className="absolute right-2 top-1/2 -translate-y-1/2 w-44 object-cover sm:w-56 lg:w-56" />
        </div>

        <div className="relative z-10 mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="mx-auto w-full max-w-sm bubbly-card p-4 sm:p-5 lg:rotate-[-3deg]">
            <img
              src="https://png.pngtree.com/png-clipart/20231004/original/pngtree-light-blue-ribbon-png-image_13117816.png"
              alt="Bow"
              className="mx-auto mb-3 w-20 object-cover sm:w-24"
            />
            <img src="/frontpic.jpeg" alt="Couple" className="h-80 w-full rounded-md object-cover sm:h-96" />
            <img
              src="https://imgs.search.brave.com/NYW_RtcrsP0qoEEWEBhzLViTVGMe0AwAB529-SeQ9u0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNTYv/NjEzLzMzNy9zbWFs/bC92YWxlbnRpbmUt/ZGF5LXdoaXRlLXRl/ZGR5LWJlYXItaXMt/c2V0dGluZy13aXRo/LXJlZC1yb3NlLWlz/LWlzb2xhdGVkLW9u/LXRyYW5zcGFyZW50/LWJhY2tncm91bmQt/ZnJlZS1wbmcucG5n"
              alt="Teddy Bear"
              className="mx-auto mt-4 w-36 object-cover sm:w-44"
            />
          </div>

          <div className="mx-auto flex w-full max-w-sm flex-col items-center bubbly-card p-5 sm:p-6">
            <h2 className="mb-4 text-center text-2xl font-bold text-slate-700 sm:text-3xl">Enter a passcode</h2>

            <div className="mb-6 flex gap-2 sm:gap-3">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="flex h-12 w-10 items-center justify-center rounded-lg border-2 border-pink-500 bg-white text-2xl text-pink-500 sm:h-14 sm:w-12"
                >
                  {passcode[i] ? "*" : ""}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {keypadKeys.map((key) => (
                <button
                  key={key}
                  className="h-12 w-12 rounded-full bg-pink-600 text-lg font-bold text-white shadow transition active:translate-y-0.5 sm:h-14 sm:w-14 sm:text-xl"
                  onClick={() => handleKeyClick(key)}
                >
                  {key}
                </button>
              ))}
            </div>

            {passcode === "0507" ? (
              <button
                className="mt-6 rounded-full bg-pink-600 px-6 py-2 text-sm font-semibold text-white transition hover:bg-pink-700 sm:px-8 sm:py-3 sm:text-base"
                onClick={() => setShowNextPage(true)}
              >
                Next ?
              </button>
            ) : (
              <p className="mt-5 text-center text-sm text-slate-600 sm:text-base">hint- its our anniversary</p>
            )}
          </div>
        </div>

      </div>
    );
  }

  return (
    <>
      <audio ref={audioRef} src="/cant-help-falling.mp3" loop autoPlay />
      {content}
    </>
  );
}

export default App;
