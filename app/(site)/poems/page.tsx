'use client';

import { motion } from 'framer-motion';

const poems = [
  {
    id: 1,
    title: "My Heart's Song",
    content: `In the garden of my heart,
You planted seeds of love,
That bloomed into a beautiful story,
Written in the stars above.`,
    author: "Forever Yours",
  },
  {
    id: 2,
    title: "Eternal Love",
    content: `Like the moon that follows the sun,
My heart follows you,
In every step, in every moment,
My love for you stays true.`,
    author: "With Love",
  },
  {
    id: 3,
    title: "Our Love Story",
    content: `Pages turn, seasons change,
But our love remains the same,
A beautiful melody,
That plays in my heart's frame.`,
    author: "Always & Forever",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 },
};

export default function PoemsPage() {
  return (
    <div className="py-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-center text-gray-800 mb-8"
      >
        Love Poems 📝
      </motion.h1>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-4xl mx-auto space-y-8"
      >
        {poems.map((poem) => (
          <motion.div
            key={poem.id}
            variants={item}
            whileHover={{ scale: 1.02 }}
            className="glass-card p-8"
          >
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-2xl font-bold text-gray-800 mb-4"
            >
              {poem.title}
            </motion.h2>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-lg text-gray-700 mb-4 whitespace-pre-line"
            >
              {poem.content}
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-sm text-gray-600 italic text-right"
            >
              - {poem.author}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
} 