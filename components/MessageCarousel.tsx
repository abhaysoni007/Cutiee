import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const messages = [
  "Every moment with you feels like magic ✨",
  "You make my heart skip a beat 💓",
  "In your eyes, I found my home 🏡",
  "You're the reason I smile every day 😊",
  "My favorite place is in your arms 🤗",
  "You're the best thing that's ever happened to me 💝",
  "Every love story is beautiful, but ours is my favorite 📖",
  "You're my today and all of my tomorrows 🌅",
];

const MessageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % messages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-md mx-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="glass-card p-4 text-center"
        >
          <p className="text-lg text-gray-800 font-medium break-words">
            {messages[currentIndex]}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default MessageCarousel; 