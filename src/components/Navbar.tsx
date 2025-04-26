"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  return (
    <motion.nav
      className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-sm px-6 py-4 flex items-center justify-between"
    >
      {/* Left: Home Link */}
      <div className="flex items-center w-1/3">
        <Link href="/" className="text-white text-lg font-bold hover:text-gray-300">
          Home
        </Link>
      </div>

      {/* Center: Other Links */}
      <div className="hidden md:flex justify-center gap-6 w-1/3 text-sm font-medium text-white">
        <Link href="/distribution" className="hover:text-gray-300">Distribution</Link>
        <Link href="/faq" className="hover:text-gray-300">FAQ</Link>
        <Link href="/terms" className="hover:text-gray-300">Terms</Link>
      </div>

      {/* Right: CTA Button */}
      <div className="flex justify-end w-1/3">
        <Link
          href="/buy"
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-4 py-2 rounded shadow"
        >
          Buy Now
        </Link>
      </div>
    </motion.nav>
  );
}
