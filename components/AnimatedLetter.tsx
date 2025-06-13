'use client';

import { motion } from 'framer-motion';

interface AnimatedLetterProps {
  onClose?: () => void;
}

const AnimatedLetter: React.FC<AnimatedLetterProps> = ({ onClose }) => {
  const letterContent = `
Hey love,

I don't know how to perfectly say all that I feel, but today I just wanted to pause for a moment and write something honest — something simple, something soft, just like the way you make me feel.

You've quietly become such a huge part of my world. Whether it's your smile, your voice, your weird jokes, or the way you get excited over the tiniest things — it all just sticks with me. It makes the everyday stuff better. Lighter. Happier.

I know I tease you a lot, and you roll your eyes at me even more (and yes, I secretly enjoy that), but through all the laughs and sarcasm, there's one thing that never changes — I genuinely care for you. Like, really care. You're not just someone I love — you're someone I feel at home with.

I might not be perfect, but I promise I'll always try to be someone who makes you feel loved, safe, and understood. Someone you can laugh with at 2 AM, cry with when it gets heavy, and just be your weird, beautiful self around — no filters.

You matter to me. And I'm lucky to have someone like you to share life with — its calm days, its storms, and everything in between.

So yeah... just thought you should know that you're loved — deeply, honestly, quietly, and playfully. Always.

Your Beloved
`;

  return (
    <motion.div
      initial={{ scale: 0.5, rotateY: 90, opacity: 0 }}
      animate={{ scale: 1, rotateY: 0, opacity: 1 }}
      exit={{ scale: 0.5, rotateY: 90, opacity: 0 }}
      transition={{ duration: 1, type: "spring", damping: 20, stiffness: 100 }}
      className="relative w-full max-w-2xl h-auto min-h-[500px] bg-parchment p-8 shadow-2xl overflow-hidden
                 uneven-border burnt-edge flex flex-col items-center justify-between font-dancing-script text-gray-800 text-center"
      style={{ aspectRatio: '3/4' }}
    >
      {/* Roses decoration */}
      <div className="absolute top-4 left-4 text-5xl">🌹</div>
      <div className="absolute bottom-4 right-4 text-5xl">🌹</div>
      <div className="absolute top-1/3 right-1/4 text-4xl transform rotate-12">🌸</div>
      <div className="absolute bottom-1/4 left-1/3 text-4xl transform -rotate-12">🌷</div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="text-xl md:text-2xl leading-relaxed whitespace-pre-line px-4 pt-12 overflow-y-auto scrollbar-hide"
      >
        {letterContent}
      </motion.p>

      {onClose && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          onClick={onClose}
          className="mt-8 glass-card px-6 py-3 text-gray-800 hover:bg-white/40 transition-colors"
        >
          Close Letter
        </motion.button>
      )}
    </motion.div>
  );
};

export default AnimatedLetter;