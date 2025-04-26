"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const faqs = [
  {
    question: "What is $WAKEUP?",
    answer:
      "$WAKEUP is the official Solana-based coin of the 330 Wake Wake YouTube movement — decentralized, hilarious, and unstoppable.",
  },
  {
    question: "How can I buy $WAKEUP?",
    answer:
      "You can buy $WAKEUP easily from our Buy page. Connect your wallet and swap Solana for $WAKEUP instantly.",
  },
  {
    question: "Is there any transaction fee?",
    answer:
      "Apart from the basic Solana network gas fees (very cheap!), there are no hidden fees for buying or holding $WAKEUP.",
  },
  {
    question: "Is $WAKEUP safe?",
    answer:
      "$WAKEUP is a community-driven project built on the secure and fast Solana blockchain.",
  },
  {
    question: "How can I participate in airdrops?",
    answer:
      "Follow our official YouTube and Twitter. We frequently announce community airdrop events!",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
      Frequently Asked Questions
    </motion.h1>
  </div>
</div>


      {/* FAQ Section */}
      <section className="bg-black text-white py-12 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto grid gap-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => toggleFAQ(index)}
              className="bg-gradient-to-br from-green-700/30 via-green-800/30 to-amber-800/30 backdrop-blur-md border border-white/10 rounded-xl p-4 sm:p-5 cursor-pointer hover:scale-[1.02] transition-transform shadow-md"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-base sm:text-lg font-bold">{faq.question}</h3>
                <span className="text-xl sm:text-2xl">{openIndex === index ? "-" : "+"}</span>
              </div>

              {openIndex === index && (
                <motion.p
                  className="mt-3 text-sm text-white/80 leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {faq.answer}
                </motion.p>
              )}
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
