'use client';

import { motion } from 'framer-motion';

const messages = [
  {
    id: 1,
    content: "Every time I see you, my heart skips a beat 💓",
    date: "Forever and always",
  },
  {
    id: 2,
    content: "You're the reason I believe in love at first sight ✨",
    date: "Since the day we met",
  },
  {
    id: 3,
    content: "In your eyes, I found my home 🏡",
    date: "Every moment with you",
  },
  {
    id: 4,
    content: "You make my world complete 🌍",
    date: "Forever yours",
  },
  {
    id: 5,
    content: "Every love story is beautiful, but ours is my favorite 📖",
    date: "Our story continues",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function MessagesPage() {
  return (
    <div className="py-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-center text-gray-800 mb-8"
      >
        Love Messages 💌
      </motion.h1>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {messages.map((message) => (
          <motion.div
            key={message.id}
            variants={item}
            whileHover={{ scale: 1.02 }}
            className="glass-card p-6"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-800 mb-4"
            >
              {message.content}
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-sm text-gray-600 italic"
            >
              {message.date}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
} 