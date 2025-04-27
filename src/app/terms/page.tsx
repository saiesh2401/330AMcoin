"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Terms() {
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
      <div className="relative min-h-[40vh] bg-black text-white overflow-hidden pt-24">
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-4 sm:py-6 min-h-[40vh]">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-lime-400 to-amber-500"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Terms & Conditions
          </motion.h1>
        </div>
      </div>

      {/* Terms Section */}
      <section className="bg-black text-white py-12 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto grid gap-6">
          {/* Each Term Block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-green-700/30 via-green-800/30 to-amber-800/30 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-md"
          >
            <h2 className="text-2xl font-bold mb-3">1. Introduction</h2>
            <p className="text-sm text-white/80 leading-relaxed">
              Welcome to $WAKEUP! By using our website, you agree to comply with our terms and conditions.
              Please review them carefully before using any services.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-gradient-to-br from-green-700/30 via-green-800/30 to-amber-800/30 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-md"
          >
            <h2 className="text-2xl font-bold mb-3">2. Eligibility</h2>
            <p className="text-sm text-white/80 leading-relaxed">
              You must be at least 18 years old to use our services. By engaging with $WAKEUP, you confirm
              that you meet this requirement.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-green-700/30 via-green-800/30 to-amber-800/30 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-md"
          >
            <h2 className="text-2xl font-bold mb-3">3. Risks Disclaimer</h2>
            <p className="text-sm text-white/80 leading-relaxed">
              $WAKEUP is a community-driven token with no guaranteed value. Cryptocurrency investments are
              inherently risky. Engage responsibly.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-green-700/30 via-green-800/30 to-amber-800/30 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-md"
          >
            <h2 className="text-2xl font-bold mb-3">4. Privacy</h2>
            <p className="text-sm text-white/80 leading-relaxed">
              We respect your privacy. $WAKEUP does not collect unnecessary user data. Any personal information
              shared is kept confidential.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-br from-green-700/30 via-green-800/30 to-amber-800/30 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-md"
          >
            <h2 className="text-2xl font-bold mb-3">5. Changes</h2>
            <p className="text-sm text-white/80 leading-relaxed">
              Terms may be updated occasionally without prior notice. Your continued use of the platform
              implies acceptance of the updated terms.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
