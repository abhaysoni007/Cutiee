'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const pickupLines = [
  {
    id: 1,
    line: "Are you made of copper and tellurium? Because you're Cu-Te! 💝",
    category: "Science",
  },
  {
    id: 2,
    line: "Is your name Google? Because you've got everything I've been searching for! 🔍",
    category: "Tech",
  },
  {
    id: 3,
    line: "Are you a magician? Because whenever I look at you, everyone else disappears! ✨",
    category: "Magic",
  },
  {
    id: 4,
    line: "Is your name Wi-fi? Because I'm really feeling a connection! 📶",
    category: "Tech",
  },
  {
    id: 5,
    line: "Are you a parking ticket? Because you've got FINE written all over you! 🎫",
    category: "Fun",
  },
];

export default function PickupLinesPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % pickupLines.length);
  };

  const handlePrevious = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + pickupLines.length) % pickupLines.length);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <div className="py-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-center text-gray-800 mb-8"
      >
        Pickup Lines 💘
      </motion.h1>

      <div className="max-w-2xl mx-auto">
        <div className="relative h-[300px]">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="glass-card p-8 absolute w-full"
            >
              <div className="text-center">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-2xl text-gray-800 mb-4"
                >
                  {pickupLines[currentIndex].line}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-sm text-gray-600"
                >
                  Category: {pickupLines[currentIndex].category}
                </motion.p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-4 mt-8">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handlePrevious}
            className="glass-card px-6 py-2 text-gray-800"
          >
            Previous
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleNext}
            className="glass-card px-6 py-2 text-gray-800"
          >
            Next
          </motion.button>
        </div>
      </div>
    </div>
  );
} 