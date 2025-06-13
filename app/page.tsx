'use client';

import { motion } from 'framer-motion';
import BabeAssistant from '@/components/BabeAssistant';
import AnimatedBackground from '@/components/AnimatedBackground';
import MessageCarousel from '@/components/MessageCarousel';
import InteractiveHeart from '@/components/InteractiveHeart';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Home() {
  const router = useRouter();

  const handleStartJourney = () => {
    router.push('/messages');
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground />
      
      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="glass-card p-8 max-w-2xl w-full text-center relative z-10 space-y-6"
      >
        <motion.h1
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold text-gray-800"
        >
          Welcome to Our Special Place 💝
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-lg text-gray-600"
        >
          A magical journey of love and romance awaits you...
        </motion.p>

        {/* Message Carousel */}
        <div className="py-4">
          <MessageCarousel />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col md:flex-row justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleStartJourney}
            className="glass-card px-8 py-4 text-gray-800 hover:bg-white/40 transition-colors text-lg font-medium"
          >
            Start Our Journey
          </motion.button>
          <Link href="/letter">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glass-card px-8 py-4 text-gray-800 hover:bg-white/40 transition-colors text-lg font-medium"
            >
              Open a Special Letter
            </motion.button>
          </Link>
          <Link href="/your-words">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glass-card px-8 py-4 text-gray-800 hover:bg-white/40 transition-colors text-lg font-medium"
            >
              Message for Me ✍️
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Interactive Elements */}
      <InteractiveHeart />
      <BabeAssistant />
    </main>
  );
} 