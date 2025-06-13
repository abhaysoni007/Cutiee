'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import EmojiMatchGame from '@/components/EmojiMatchGame';
import LoveQuizGame from '@/components/LoveQuizGame';
import OurStoryJourney from '@/components/OurStoryJourney';

const games = [
  {
    id: 1,
    title: "Emoji Match",
    description: "Match the love-themed emojis with their pairs!",
    emoji: "🎯",
    component: EmojiMatchGame,
  },
  {
    id: 2,
    title: "Love Quiz",
    description: "Test your knowledge about love and relationships!",
    emoji: "❓",
    component: LoveQuizGame,
  },
  {
    id: 3,
    title: "Our Story Journey",
    description: "Make choices to write your own romantic adventure!",
    emoji: "📖",
    component: OurStoryJourney,
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

export default function GamesPage() {
  const [selectedGameId, setSelectedGameId] = useState<number | null>(null);

  const SelectedGameComponent = selectedGameId
    ? games.find((game) => game.id === selectedGameId)?.component
    : null;

  return (
    <div className="py-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-center text-gray-800 mb-8"
      >
        Love Games 🎮
      </motion.h1>

      {selectedGameId === null ? (
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {games.map((game) => (
            <motion.div
              key={game.id}
              variants={item}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedGameId(game.id)}
              className="glass-card p-6 cursor-pointer"
            >
              <div className="text-4xl mb-4">{game.emoji}</div>
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                {game.title}
              </h2>
              <p className="text-gray-600">{game.description}</p>
            </motion.div>
          ))}
        </motion.div>
      ) : (
        SelectedGameComponent && (
          <SelectedGameComponent onBack={() => setSelectedGameId(null)} />
        )
      )}
    </div>
  );
} 