"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Distribution() {
  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-md text-white px-6 py-4 flex items-center justify-between">
        <div className="w-1/3 flex items-center">
          <Link href="/" className="text-white text-lg font-bold hover:text-gray-300">
            Home
          </Link>
        </div>

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
      <div className="relative min-h-[60vh] bg-black text-white overflow-hidden pt-24">
        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-8 sm:py-12 min-h-[60vh]">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-lime-400 to-amber-500"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            $WAKEUP Distribution
          </motion.h1>

          <motion.p
            className="mt-3 text-base sm:text-lg md:text-xl text-white max-w-md sm:max-w-2xl lg:max-w-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            Transparent, fair, and for the people — just the way crypto should be.
          </motion.p>

          <motion.div
            className="mt-5 flex gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <Link
              href="/buy"
              className="bg-gradient-to-r from-green-500 to-amber-500 hover:from-green-600 hover:to-amber-600 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-xl"
            >
              Get $WAKEUP
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Distribution Details Section */}
      <section className="bg-black text-white pt-16 pb-12 px-4 sm:px-8 -mt-16">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold mb-10 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            How Coins are Allocated
          </motion.h2>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {[
              { title: "Community Airdrop", percent: "50%" },
              { title: "YouTube Giveaways", percent: "20%" },
              { title: "Liquidity Pool", percent: "15%" },
              { title: "Development Fund", percent: "10%" },
              { title: "Team", percent: "5%" }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-green-700 via-green-800 to-amber-800 p-5 rounded-xl shadow-md flex flex-col items-center justify-center text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-2xl font-bold">{item.percent}</h3>
                <p className="mt-2 text-sm">{item.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Fair Distribution Section */}
      <section className="bg-gradient-to-b from-black to-gray-900 text-white py-12 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Why Fair Distribution?
          </motion.h2>

          <motion.p
            className="text-lg text-white/80 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            $WAKEUP believes in grassroots growth. No shady whales. No secret unlocks.
            Just a community-driven, yoga-powered, decentralized future.
          </motion.p>
        </div>
      </section>
    </>
  );
}
