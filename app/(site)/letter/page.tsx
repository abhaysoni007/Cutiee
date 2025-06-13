'use client';

import AnimatedLetter from '@/components/AnimatedLetter';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function LetterPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 relative">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute top-4 left-4 z-20"
      >
        <Link href="/">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="glass-card p-3 rounded-full flex items-center justify-center text-gray-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
          </motion.button>
        </Link>
      </motion.div>
      <AnimatedLetter />
    </div>
  );
} 