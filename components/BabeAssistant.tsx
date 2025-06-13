import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const messages = [
  "Hey there, beautiful! 💝",
  "Missing me already? 😘",
  "You're looking gorgeous today! ✨",
  "Want to hear a secret? 🤫",
  "You make my heart skip a beat! 💓",
  "Can't stop thinking about you! 💭",
  "You're my favorite person! 🌟",
  "Let's make some memories! 💫",
];

const BabeAssistant = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentMessage, setCurrentMessage] = useState(0);
  const [clickCount, setClickCount] = useState(0);
  const [isBlinking, setIsBlinking] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(true);
      setTimeout(() => setIsVisible(false), 3000);
    }, 10000);

    // Blinking animation
    const blinkInterval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 200);
    }, 3000);

    return () => {
      clearInterval(interval);
      clearInterval(blinkInterval);
    };
  }, []);

  const handleClick = () => {
    setClickCount(prev => prev + 1);
    setCurrentMessage(prev => (prev + 1) % messages.length);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          className="fixed bottom-4 right-4 z-50"
          onClick={handleClick}
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="glass-card p-4 cursor-pointer"
          >
            <div className="flex items-center gap-3">
              {/* Cute Cartoon Character */}
              <div className="relative">
                {/* Face */}
                <div className="w-12 h-12 rounded-full bg-rose flex items-center justify-center">
                  {/* Eyes */}
                  <div className="flex gap-2">
                    <motion.div
                      animate={{ scaleY: isBlinking ? 0.1 : 1 }}
                      transition={{ duration: 0.2 }}
                      className="w-2 h-2 bg-white rounded-full"
                    />
                    <motion.div
                      animate={{ scaleY: isBlinking ? 0.1 : 1 }}
                      transition={{ duration: 0.2 }}
                      className="w-2 h-2 bg-white rounded-full"
                    />
                  </div>
                  {/* Blush */}
                  <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-pink-300 rounded-full opacity-50" />
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-pink-300 rounded-full opacity-50" />
                </div>
                {/* Hair */}
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                  <div className="text-2xl">💁‍♀️</div>
                </div>
                {/* Sparkles */}
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -top-4 -right-4 text-xl"
                >
                  ✨
                </motion.div>
              </div>

              {/* Message */}
              <div className="text-gray-800 font-medium max-w-[200px]">
                {messages[currentMessage]}
              </div>
            </div>

            {/* Cute Tail */}
            <motion.div
              animate={{ 
                rotate: [0, 10, -10, 0],
                x: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -bottom-2 -right-2 text-2xl"
            >
              💫
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BabeAssistant; 