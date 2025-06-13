'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

interface StoryNode {
  id: string;
  text: string;
  image?: string;
  choices?: {
    text: string;
    next: string;
  }[];
  outcome?: string;
}

const story: { [key: string]: StoryNode } = {
  start: {
    id: 'start',
    text: "You find a mysterious, glowing invitation. Do you open it?",
    choices: [
      { text: "Yes, I'm curious!", next: "forest" },
      { text: "No, it looks too magical.", next: "stayHome" },
    ],
  },
  forest: {
    id: 'forest',
    text: "The invitation leads you to a enchanted forest. You hear a soft melody. Do you follow it?",
    choices: [
      { text: "Follow the melody", next: "lake" },
      { text: "Explore a hidden path", next: "garden" },
    ],
  },
  stayHome: {
    id: 'stayHome',
    text: "You decide to stay home. Suddenly, a tiny fairy appears with a message just for you!",
    outcome: "A sweet, unexpected message of love brightens your day! 💖",
  },
  lake: {
    id: 'lake',
    text: "The melody leads you to a sparkling lake, where two swans glide gracefully. Do you wish upon a star?",
    choices: [
      { text: "Make a wish for eternal love", next: "wishOutcome" },
      { text: "Just enjoy the moment", next: "enjoyOutcome" },
    ],
  },
  garden: {
    id: 'garden',
    text: "The hidden path leads to a secret garden, filled with glowing roses. Do you pick a rose for your love?",
    choices: [
      { text: "Pick the brightest rose", next: "roseOutcome" },
      { text: "Admire them from afar", next: "admireOutcome" },
    ],
  },
  wishOutcome: {
    id: 'wishOutcome',
    text: "Your wish for eternal love comes true, shining brighter than any star!",
    outcome: "Your love story is written in the stars, forever and always! ✨",
  },
  enjoyOutcome: {
    id: 'enjoyOutcome',
    text: "You enjoy the serene beauty of the lake, feeling deeply content in the moment.",
    outcome: "Sometimes, the greatest magic is in simply being present with love. 😌",
  },
  roseOutcome: {
    id: 'roseOutcome',
    text: "The brightest rose you pick glows with a warm light, a symbol of your passionate love.",
    outcome: "Your love is as vibrant and timeless as a magical, ever-blooming rose! 🌹",
  },
  admireOutcome: {
    id: 'admireOutcome',
    text: "You admire the roses, appreciating their beauty from a distance, feeling a gentle warmth.",
    outcome: "Love blossoms in every thoughtful gesture, big or small. Keep cherishing! 💕",
  },
};

interface OurStoryJourneyProps {
  onBack: () => void;
}

const OurStoryJourney: React.FC<OurStoryJourneyProps> = ({ onBack }) => {
  const [currentNodeId, setCurrentNodeId] = useState<string>('start');
  const currentNode = story[currentNodeId];

  const handleChoiceClick = (nextId: string) => {
    setCurrentNodeId(nextId);
  };

  const restartGame = () => {
    setCurrentNodeId('start');
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="glass-card p-8 text-center max-w-2xl mx-auto min-h-[400px] flex flex-col justify-between"
    >
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story Journey</h2>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentNodeId}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="flex-1 flex flex-col justify-center"
        >
          <p className="text-xl text-gray-700 mb-6">{currentNode.text}</p>

          {currentNode.outcome && (
            <motion.p
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
              className="text-2xl font-bold text-rose mt-4"
            >
              {currentNode.outcome}
            </motion.p>
          )}
        </motion.div>
      </AnimatePresence>

      <div className="mt-8 space-y-4">
        {currentNode.choices?.map((choice, index) => (
          <motion.button
            key={index}
            onClick={() => handleChoiceClick(choice.next)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="glass-card w-full px-6 py-3 text-gray-800 hover:bg-white/40 transition-colors"
          >
            {choice.text}
          </motion.button>
        ))}

        {currentNode.outcome && (
          <div className="flex justify-center gap-4 mt-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={restartGame}
              className="glass-card px-6 py-2 text-gray-800"
            >
              Play Again
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onBack}
              className="glass-card px-6 py-2 text-gray-800"
            >
              Back to Games
            </motion.button>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default OurStoryJourney; 