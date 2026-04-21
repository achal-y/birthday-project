import React, { useState } from "react";

const keypadKeys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "C", "0", "?"];

function App() {
  const [passcode, setPasscode] = useState("");
  const [showNextPage, setShowNextPage] = useState(false);
  const [showThirdPage, setShowThirdPage] = useState(false);
  const [showCakePage, setShowCakePage] = useState(false);
  const [showLettersPage, setShowLettersPage] = useState(false);
  const [showPhotosPage, setShowPhotosPage] = useState(false);

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

  if (showCakePage) {
    return (
      <div className="relative min-h-screen overflow-x-hidden bg-pink-50 px-4 py-8 sm:px-6 lg:px-10">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-6 md:gap-10">
          <h1 className="text-center text-3xl font-bold text-pink-600 sm:text-4xl md:text-5xl">
            Aru&apos;s Birthday Cake
          </h1>

          <div className="grid w-full grid-cols-1 items-start gap-6 lg:grid-cols-3 lg:gap-8">
            <div className="order-2 flex flex-col gap-4 lg:order-1">
              <img
                src="/2h.png"
                alt="Hearts"
                className="mx-auto w-full max-w-xs object-cover sm:max-w-sm"
              />
              <div className="rounded-2xl border border-pink-200 bg-white p-4 text-center text-base text-slate-700 shadow-sm sm:text-lg">
                I will always love you no matter what
              </div>
              <div className="rounded-2xl border border-pink-200 bg-white p-4 text-center text-base text-slate-700 shadow-sm sm:text-lg">
                You are the best part of my life
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="rounded-[2rem] border-4 border-pink-200 bg-white p-3 shadow-lg sm:p-5">
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
              <div className="rounded-2xl border border-pink-200 bg-white p-4 text-center text-base text-slate-700 shadow-sm sm:text-lg">
                You will forever be my only option.
              </div>
              <div className="rounded-2xl border border-pink-200 bg-white p-4 text-center text-base text-slate-700 shadow-sm sm:text-lg">
                I can&apos;t imagine a life without you!!!
              </div>
            </div>
          </div>

          <button
            className="rounded-full bg-pink-600 px-6 py-2 text-sm font-semibold text-white transition hover:bg-pink-700 sm:px-8 sm:py-3 sm:text-base"
            onClick={() => setShowCakePage(false)}
          >
            Click me!
          </button>
        </div>
      </div>
    );
  }

  if (showLettersPage) {
    return (
      <div className="relative min-h-screen overflow-x-hidden bg-pink-50 px-4 py-8 sm:px-6 lg:px-10">
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-4 sm:gap-6">
          <h1 className="text-center text-3xl font-bold text-pink-600 sm:text-4xl md:text-5xl">
            Words from my <span className="underline">Heart</span>
          </h1>

          <div className="rounded-xl bg-amber-50 p-4 shadow-md sm:p-6 md:p-8">
            <div className="space-y-1 text-base leading-relaxed text-slate-700 sm:text-lg md:text-xl">
              <p>Happiest birthday baby,</p>
              <p>you make my life so meaningful</p>
              <p>and I am so lucky to have you</p>
              <p>as my valentine this year. I love</p>
              <p>you wholeheartedly and I can&apos;t</p>
              <p>wait to continue loving you for</p>
              <p>the rest of my life. I know I tell</p>
              <p>you this everyday but you are</p>
              <p>literally the most beautiful girl</p>
              <p>I know. Anyways, I love you.</p>
              <p className="pt-3 text-right font-semibold text-pink-600">Always, Forever</p>
            </div>
          </div>

          <div className="mt-2 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <img src="/cat1.png" alt="Cute Cat" className="w-full rounded-xl object-cover" />
            <img src="/flow5.png" alt="Flowers" className="w-full rounded-xl object-cover" />
            <img src="/pic14.png" alt="Decorative Pic" className="w-full rounded-xl object-cover" />
          </div>

          <button
            className="mx-auto mt-2 rounded-full bg-pink-600 px-6 py-2 text-sm font-semibold text-white transition hover:bg-pink-700 sm:px-8 sm:py-3 sm:text-base"
            onClick={() => setShowLettersPage(false)}
          >
            Click me!
          </button>
        </div>
      </div>
    );
  }

  if (showPhotosPage) {
    return (
      <div className="min-h-screen overflow-x-hidden bg-pink-50 px-4 py-8 sm:px-6 lg:px-10">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-6">
          <div className="grid w-full grid-cols-1 items-start gap-5 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl bg-white p-4 shadow-md">
              <div className="space-y-3">
                <img src="/diw5.jpeg" alt="Sunset" className="h-52 w-full rounded-lg object-cover" />
                <img src="/diw2.jpeg" alt="Couple" className="h-52 w-full rounded-lg object-cover" />
                <img src="/pink2.jpeg" alt="Flowers" className="h-52 w-full rounded-lg object-cover" />
              </div>
              <p className="pt-3 text-center text-lg font-semibold text-pink-600">LOVE ??</p>
            </div>

            <div className="rounded-2xl border border-pink-200 bg-white p-4 shadow-md">
              <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
                You are closer than I thought and that appeals I always love you. I just want you to know
                that I&apos;m really happy with you and I want to keep choosing you every single day. I love
                you more than you can ever know.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-4 shadow-md md:col-span-2 lg:col-span-1">
              <div className="space-y-3">
                <img src="/pic19.jpeg" alt="Sunset" className="h-52 w-full rounded-lg object-cover" />
                <img src="/pic20.jpeg" alt="Couple" className="h-52 w-full rounded-lg object-cover" />
                <img src="/pic18.jpeg" alt="Flowers" className="h-52 w-full rounded-lg object-cover" />
              </div>
              <p className="pt-3 text-center text-lg font-semibold text-pink-600">LOVE ??</p>
            </div>
          </div>

          <div className="grid w-full max-w-4xl grid-cols-2 gap-4 sm:grid-cols-3">
            <img src="/cat1.png" alt="Cute Cat" className="w-full object-cover" />
            <img src="/2h.png" alt="Hearts" className="w-full object-cover" />
            <img src="/back2.png" alt="Cute Decoration" className="col-span-2 w-full object-cover sm:col-span-1" />
          </div>

          <button
            className="rounded-full bg-pink-600 px-6 py-2 text-sm font-semibold text-white transition hover:bg-pink-700 sm:px-8 sm:py-3 sm:text-base"
            onClick={() => setShowPhotosPage(false)}
          >
            BACK
          </button>
        </div>
      </div>
    );
  }

  if (showThirdPage) {
    return (
      <div className="min-h-screen overflow-x-hidden bg-gradient-to-b from-pink-100 to-rose-200 px-4 py-10 sm:px-6">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-6 text-center">
          <h1 className="text-3xl font-bold text-pink-600 sm:text-4xl md:text-5xl">
            Click to open your presents!
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
        </div>
      </div>
    );
  }

  if (showNextPage) {
    return (
      <div className="min-h-screen overflow-x-hidden bg-pink-50 px-4 py-8 sm:px-6 lg:px-10">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-5">
          <img
            src="/Gemini_Generated_Image_z015v1z015v1z015.png"
            alt="Happy Birthday Card"
            className="w-full rounded-2xl border-4 border-pink-300 object-cover shadow-lg"
          />

          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-3">
            <img src="/pic1.png" alt="Girl in Black Dress" className="w-full rounded-xl object-cover" />
            <img src="/pin16.png" alt="Cute Anime Girl" className="w-full rounded-xl object-cover" />
            <img src="/pin21.png" alt="Cute Anime Girl" className="w-full rounded-xl object-cover" />
          </div>

          <button
            className="rounded-full bg-pink-600 px-6 py-2 text-sm font-semibold text-white transition hover:bg-pink-700 sm:px-8 sm:py-3 sm:text-base"
            onClick={() => setShowThirdPage(true)}
          >
            Click me ?
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-pink-50 px-4 py-8 sm:px-6 lg:px-10">
      <div className="pointer-events-none absolute inset-0 overflow-hidden z-10">
        <img src="/pin1.png" alt="Cute Anime Girl" className="absolute bottom-2 right-2 w-16 object-cover sm:w-20 lg:w-28" />
        <img src="/pin2.png" alt="Cute Anime Girl" className="absolute bottom-2 left-2 w-16 object-cover sm:w-20 lg:w-28" />
        <img src="/pin3.png" alt="Cute Anime Girl" className="absolute right-2 top-2 w-16 object-cover sm:w-20 lg:w-28" />
        <img src="/pin4.png" alt="Cute Anime Girl" className="absolute left-2 top-2 w-16 object-cover sm:w-20 lg:w-28" />
      </div>

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
        <div className="mx-auto w-full max-w-sm rounded-md bg-white p-4 shadow-lg sm:p-5 lg:rotate-[-3deg]">
          <img
            src="https://png.pngtree.com/png-clipart/20231004/original/pngtree-light-blue-ribbon-png-image_13117816.png"
            alt="Bow"
            className="mx-auto mb-3 w-20 object-cover sm:w-24"
          />
          <img src="/frontpic.jpeg" alt="Couple" className="h-80 w-full rounded-md object-cover sm:h-96" />
          <img
            src="https://imgs.search.brave.com/NYW_RtcrsP0qoEEWEBhzLViTVGMe0AwAB529-SeQ9u0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNTYv/NjEzLzMzNy9zbWFs/bC92YWxlbnRpbmUt/ZGF5LXdoaXRlLXRl/ZGR5LWJlYXItaXMt/c2V0dGluZy13aXRo/LXJlZC1yb3NlLWlz/LWlzb2xhdGVkLW9u/LXRyYW5zcGFyZW50/LWJhY2tncm91bmQt/ZnJlZS1wbmcucG5n"
            alt="Teddy Bear"
            className="mx-auto mt-4 w-28 object-cover sm:w-36"
          />
        </div>

        <div className="mx-auto flex w-full max-w-sm flex-col items-center rounded-2xl bg-white/80 p-5 shadow-md backdrop-blur-sm sm:p-6">
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

export default App;
