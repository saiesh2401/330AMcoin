"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Transparent Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-md text-white px-6 py-4 flex items-center justify-between">
        <div className="w-1/3" />

        <div className="hidden md:flex gap-6 justify-center w-1/3 text-sm font-medium">
          <Link href="/distribution" className="hover:text-gray-300">Distribution</Link>
          <Link href="/faq" className="hover:text-gray-300">FAQ</Link>
          <Link href="/terms" className="hover:text-gray-300">Terms</Link>
        </div>

        <div className="flex justify-end w-1/3">
          <Link
            href="/buy"
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-4 py-2 rounded shadow"
          >
            Buy Now
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative min-h-screen bg-black text-white overflow-hidden pt-24">
        {/* Fixed Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/xinyan_edit.jpeg"
            alt="Save Our Soil Art"
            fill
            className="object-cover opacity-70 blur-[0.5px] brightness-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-black/10" />
        </div>

        {/* Foreground Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-14 sm:py-20 min-h-screen">
{/* Heading */}
<h1
  className="text-7xl sm:text-8xl md:text-9xl tracking-tight text-white"
  style={{
    fontFamily: "LegoBrix, sans-serif",
    WebkitTextStroke: "6px black",
    WebkitTextFillColor: "white",
    textShadow: `
      1px 0 white,
      -1px 0 white,
      0 1px white,
      0 -1px white,
      1px 1px white,
      -1px -1px white,
      2px 2px white,
      -2px -2px white
    `
  }}
>
  330 WAKE WAKE
</h1>


          {/* Subheading */}
          <p className="mt-4 text-base sm:text-lg md:text-xl text-white max-w-md sm:max-w-2xl lg:max-w-3xl">
            The official Solana coin of the 330 Wake Wake YouTube movement —
            decentralized, hilarious, unstoppable.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              href="/buy"
              className="bg-gradient-to-r from-green-500 to-amber-500 hover:from-green-600 hover:to-amber-600 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-xl text-center w-full sm:w-auto"
            >
              Buy <span className="font-extrabold">$WAKEUP</span>
            </Link>
            <Link
              href="/youtube"
              className="bg-white text-black px-6 py-3 rounded-full text-lg font-semibold shadow-md text-center w-full sm:w-auto"
            >
              Watch on YouTube
            </Link>
          </div>

          {/* Bottom Caption */}
          <p className="mt-8 text-xs sm:text-sm text-white/70">
            Born on YouTube. Raised on Solana. Powered by yoga.
          </p>
        </div>
      </div>
    </>
  );
}
