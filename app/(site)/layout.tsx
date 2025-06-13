'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { name: 'Messages', path: '/messages', emoji: '💌' },
  { name: 'Poems', path: '/poems', emoji: '📝' },
  { name: 'Pickup Lines', path: '/pickup-lines', emoji: '💘' },
  { name: 'Games', path: '/games', emoji: '🎮' },
  { name: 'Songs', path: '/songs', emoji: '🎵' },
];

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-gradient-to-br from-romantic-pink via-soft-violet to-cream">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/30 backdrop-blur-md border-b border-white/20"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Link href="/" className="text-xl font-bold text-gray-800">
                💝 Our Story
              </Link>
              {pathname !== '/' && (
                <Link href="/">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="glass-card p-2 rounded-full flex items-center justify-center text-gray-800"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                      />
                    </svg>
                  </motion.button>
                </Link>
              )}
            </div>
            <div className="flex space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    pathname === item.path
                      ? 'bg-white/40 text-gray-800'
                      : 'text-gray-600 hover:bg-white/20'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {item.emoji} {item.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Main Content */}
      <main className="pt-20 pb-8 px-4">
        <div className="max-w-7xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
} 