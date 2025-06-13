'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const emojis = [
  '❤️', '🧡', '💛', '💚', '💙', '💜', '💕', '💞',
  '💖', '💘', '💝', '💓',
];

const shuffleArray = (array: any[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

interface EmojiMatchGameProps {
  onBack: () => void;
}

const EmojiMatchGame: React.FC<EmojiMatchGameProps> = ({ onBack }) => {
  const [cards, setCards] = useState<{
    id: number;
    emoji: string;
    isFlipped: boolean;
    isMatched: boolean;
  }[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [matchedCards, setMatchedCards] = useState<number[]>([]);
  const [canFlip, setCanFlip] = useState(true);
  const [moves, setMoves] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    initializeGame();
  }, []);

  useEffect(() => {
    if (matchedCards.length === emojis.length * 2) {
      setGameOver(true);
    }
  }, [matchedCards]);

  const initializeGame = () => {
    const gameEmojis = shuffleArray([...emojis, ...emojis]).map((emoji, index) => ({
      id: index,
      emoji,
      isFlipped: false,
      isMatched: false,
    }));
    setCards(gameEmojis);
    setFlippedCards([]);
    setMatchedCards([]);
    setCanFlip(true);
    setMoves(0);
    setGameOver(false);
  };

  const handleCardClick = (id: number) => {
    if (!canFlip || flippedCards.includes(id) || matchedCards.includes(id)) {
      return;
    }

    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === id ? { ...card, isFlipped: true } : card
      )
    );
    setFlippedCards((prevFlipped) => [...prevFlipped, id]);
    setMoves((prevMoves) => prevMoves + 1);
  };

  useEffect(() => {
    if (flippedCards.length === 2) {
      setCanFlip(false);
      const [firstId, secondId] = flippedCards;
      const firstCard = cards.find((card) => card.id === firstId);
      const secondCard = cards.find((card) => card.id === secondId);

      if (firstCard?.emoji === secondCard?.emoji) {
        setMatchedCards((prevMatched) => [...prevMatched, firstId, secondId]);
        setCards((prevCards) =>
          prevCards.map((card) =>
            card.id === firstId || card.id === secondId
              ? { ...card, isMatched: true } : card
          )
        );
        setFlippedCards([]);
        setCanFlip(true);
      } else {
        setTimeout(() => {
          setCards((prevCards) =>
            prevCards.map((card) =>
              card.id === firstId || card.id === secondId
                ? { ...card, isFlipped: false } : card
            )
          );
          setFlippedCards([]);
          setCanFlip(true);
        }, 1000);
      }
    }
  }, [flippedCards, cards]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="glass-card p-8 text-center max-w-4xl mx-auto"
    >
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Emoji Match</h2>
      {!gameOver ? (
        <p className="text-lg text-gray-600 mb-6">Moves: {moves}</p>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6"
        >
          <p className="text-xl font-bold text-rose mb-2">Congratulations! You matched all the emojis!</p>
          <p className="text-lg text-gray-700">Total Moves: {moves}</p>
        </motion.div>
      )}

      <div className="grid grid-cols-4 md:grid-cols-6 gap-4 mb-8">
        {cards.map((card) => (
          <motion.div
            key={card.id}
            className={`relative w-20 h-20 md:w-24 md:h-24 glass-card flex items-center justify-center cursor-pointer transition-all duration-300 ${card.isFlipped || card.isMatched ? '' : 'hover:bg-white/40'}`}
            onClick={() => handleCardClick(card.id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ rotateY: 0 }}
            animate={{ rotateY: card.isFlipped || card.isMatched ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="absolute inset-0 flex items-center justify-center backface-hidden"
              initial={{ opacity: 0, rotateY: 180 }}
              animate={{ opacity: card.isFlipped || card.isMatched ? 1 : 0 }}
              transition={{ duration: 0.3, delay: 0.15 }}
            >
              <span className="text-5xl">{card.emoji}</span>
            </motion.div>
            <motion.div
              className="absolute inset-0 flex items-center justify-center backface-hidden"
              initial={{ opacity: 1, rotateY: 0 }}
              animate={{ opacity: card.isFlipped || card.isMatched ? 0 : 1 }}
              transition={{ duration: 0.3, delay: 0.15 }}
            >
              <span className="text-4xl">?</span>
            </motion.div>
          </motion.div>
        ))}
      </div>
      
      <div className="flex justify-center gap-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={initializeGame}
          className="glass-card px-6 py-2 text-gray-800"
        >
          Restart Game
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
    </motion.div>
  );
};

export default EmojiMatchGame; 