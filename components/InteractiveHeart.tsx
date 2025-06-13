import { motion } from 'framer-motion';
import { useState } from 'react';

const InteractiveHeart = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount(prev => prev + 1);
  };

  return (
    <motion.div
      className="fixed bottom-32 right-32 z-40"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5, type: "spring" }}
    >
      <motion.div
        className="glass-card p-4 cursor-pointer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onClick={handleClick}
      >
        <motion.div
          animate={{
            scale: isHovered ? 1.2 : 1,
            rotate: isHovered ? [0, -10, 10, -10, 0] : 0,
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          className="text-4xl"
        >
          {clickCount % 2 === 0 ? '💝' : '💖'}
        </motion.div>
        {clickCount > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute -top-12 left-1/2 transform -translate-x-1/2 glass-card px-3 py-1 text-sm whitespace-nowrap"
          >
            {clickCount === 1 ? "First click! 💕" :
             clickCount === 2 ? "Double love! 💖" :
             clickCount === 3 ? "Triple hearts! 💝" :
             "Infinite love! 💫"}
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default InteractiveHeart; 