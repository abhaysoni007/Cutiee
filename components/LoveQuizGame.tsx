'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const quizQuestions = [
  {
    question: "What's your favorite way to spend a cozy evening together?",
    options: [
      "Cuddling up with a movie",
      "Cooking a romantic dinner",
      "Playing board games",
      "A quiet walk under the stars",
    ],
  },
  {
    question: "Which little gesture makes you feel most loved?",
    options: [
      "A sweet note left for me to find",
      "A surprise hug from behind",
      "My favorite snack appearing magically",
      "Listening intently to my stories",
    ],
  },
  {
    question: "What's your dream romantic getaway?",
    options: [
      "A serene beach escape",
      "A cozy cabin in the mountains",
      "Exploring a charming European city",
      "A spontaneous road trip",
    ],
  },
  {
    question: "Which quality do you adore most about me?",
    options: [
      "My infectious laugh",
      "My kind and generous heart",
      "My adventurous spirit",
      "My ability to always make you feel safe",
    ],
  },
];

interface LoveQuizGameProps {
  onBack: () => void;
}

const LoveQuizGame: React.FC<LoveQuizGameProps> = ({ onBack }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const handleAnswerClick = (index: number) => {
    if (selectedOption !== null) return; // Prevent multiple clicks

    setSelectedOption(index);

    setTimeout(() => {
      if (currentQuestion < quizQuestions.length - 1) {
        setCurrentQuestion((prev) => prev + 1);
        setSelectedOption(null);
      } else {
        setShowResults(true);
      }
    }, 1000);
  };

  const appreciationMessages = [
    "Looks like we're on the same wavelength... or maybe you just read my mind! 😉",
    "Did you just hack into my thoughts? Because these answers are spot on! 🤯",
    "You're so good at this, it's almost unfair! Or maybe it's just meant to be! 🥰",
    "My heart just did a little happy dance thanks to your amazing answers! 💃🕺",
  ];

  const getAppreciationMessage = () => {
    return appreciationMessages[Math.floor(Math.random() * appreciationMessages.length)];
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setShowResults(false);
    setSelectedOption(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="glass-card p-8 text-center max-w-2xl mx-auto"
    >
      <h2 className="text-3xl font-bold text-gray-800 mb-6">All About Us</h2>

      {!showResults ? (
        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xl text-gray-700 mb-6">
            {quizQuestions[currentQuestion].question}
          </p>
          <div className="space-y-4">
            {quizQuestions[currentQuestion].options.map((option, index) => (
              <motion.button
                key={index}
                onClick={() => handleAnswerClick(index)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-3 px-4 rounded-lg transition-all duration-300 
                  ${selectedOption === index
                    ? 'bg-soft-violet/50 border-soft-violet-400'
                    : 'glass-card text-gray-800 hover:bg-white/40'
                  }`}
              >
                {option}
              </motion.button>
            ))}
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-4">You Finished!</h3>
          <p className="text-xl text-gray-700 mb-4">Thanks for playing!</p>
          <p className="text-xl font-bold text-rose mb-6">
            {getAppreciationMessage()}
          </p>
          <div className="flex justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={restartQuiz}
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
        </motion.div>
      )}
    </motion.div>
  );
};

export default LoveQuizGame; 