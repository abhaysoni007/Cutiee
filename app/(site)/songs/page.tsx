'use client';

import { motion } from 'framer-motion';

const songs = [
  {
    id: 1,
    title: "Perfect",
    artist: "Ed Sheeran",
    description: "A beautiful love song about finding your perfect match",
    emoji: "💑",
  },
  {
    id: 2,
    title: "All of Me",
    artist: "John Legend",
    description: "A heartfelt ballad about unconditional love",
    emoji: "💝",
  },
  {
    id: 3,
    title: "A Thousand Years",
    artist: "Christina Perri",
    description: "An eternal love story in melody",
    emoji: "⏳",
  },
  {
    id: 4,
    title: "Can't Help Falling in Love",
    artist: "Elvis Presley",
    description: "A timeless classic about falling in love",
    emoji: "💫",
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

export default function SongsPage() {
  return (
    <div className="py-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-center text-gray-800 mb-8"
      >
        Songs For You 🎵
      </motion.h1>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto"
      >
        {songs.map((song) => (
          <motion.div
            key={song.id}
            variants={item}
            whileHover={{ scale: 1.02 }}
            className="glass-card p-6"
          >
            <div className="flex items-start gap-4">
              <div className="text-4xl">{song.emoji}</div>
              <div className="flex-1">
                <h2 className="text-xl font-bold text-gray-800 mb-1">
                  {song.title}
                </h2>
                <p className="text-gray-600 mb-2">{song.artist}</p>
                <p className="text-gray-700 mb-4">{song.description}</p>
                <div className="glass-card p-4 bg-white/20">
                  <iframe
                    src={`https://open.spotify.com/embed/track/${
                      song.id === 1
                        ? "0tgVpDi06FyKpA1z0VMD4v" // Perfect by Ed Sheeran
                        : song.id === 2
                        ? "3U4isOIWM3VvDubwSI3y7a" // All of Me by John Legend
                        : song.id === 3
                        ? "5zdonZUt7LBTF5v5WmIfKT" // A Thousand Years by Christina Perri
                        : "44AyOl4qVkzS48vBsbNXaC" // Can't Help Falling in Love by Elvis Presley
                    }`}
                    width="100%"
                    height="80"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
} 