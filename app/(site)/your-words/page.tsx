'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef } from 'react';
import html2canvas from 'html2canvas';

interface YourWordsPageProps {
  onBack?: () => void;
}

const termsAndConditions = [
  "Be true to your heart, whatever you write.",
  "Express whatever you have to say, no filter! 😉",
  "Genuine feedback is appreciated (and adorable).",
  "No spoilers for our future adventures! 🤫",
  "May cause excessive smiling and warm fuzzy feelings. Proceed with caution. 🥰",
];

const YourWordsPage: React.FC<YourWordsPageProps> = ({ onBack }) => {
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [message, setMessage] = useState('');
  const [snapshotTaken, setSnapshotTaken] = useState(false);
  const messageRef = useRef<HTMLDivElement>(null);

  const handleAcceptTerms = () => {
    setAcceptedTerms(true);
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
    setSnapshotTaken(false); // Reset snapshot state on message change
  };

  const handleSnapIt = async () => {
    if (messageRef.current) {
      setSnapshotTaken(true);
      const canvas = await html2canvas(messageRef.current, {
        backgroundColor: null, // Transparent background
        useCORS: true,
      });
      const image = canvas.toDataURL('image/png');
      
      // For local download
      const link = document.createElement('a');
      link.href = image;
      link.download = 'my-love-message.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // For sharing (requires specific browser/OS support)
      if (navigator.share) {
        try {
          await navigator.share({
            files: [new File([await (await fetch(image)).blob()], 'my-love-message.png', { type: 'image/png' })],
            title: 'My Love Message',
            text: 'Check out this special message!',
          });
        } catch (error) {
          console.error('Error sharing:', error);
          alert('Sharing failed or not supported in your browser.');
        }
      } else if (navigator.clipboard) {
        // Fallback to clipboard for Instagram DMs (manual paste needed)
        try {
          const blob = await (await fetch(image)).blob();
          const item = new ClipboardItem({'image/png': blob});
          await navigator.clipboard.write([item]);
          alert('Image copied to clipboard! You can paste it into Instagram DMs or WhatsApp.');
        } catch (error) {
          console.error('Error copying to clipboard:', error);
          alert('Failed to copy image to clipboard.');
        }
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="glass-card p-8 max-w-3xl mx-auto text-center my-8"
    >
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Your Words ✍️</h1>

      <AnimatePresence mode="wait">
        {!acceptedTerms ? (
          <motion.div
            key="terms"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Before You Write...</h2>
            <p className="text-lg text-gray-700 mb-6">Please read these important (and adorable) terms and conditions:</p>
            <ul className="list-disc list-inside text-left text-gray-600 mb-8 max-w-md mx-auto space-y-2">
              {termsAndConditions.map((term, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {term}
                </motion.li>
              ))}
            </ul>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleAcceptTerms}
              className="glass-card px-8 py-4 text-rose hover:bg-white/40 transition-colors text-lg font-medium"
            >
              I Accept! Let's Write! ✨
            </motion.button>
          </motion.div>
        ) : (
          <motion.div
            key="message-input"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Heart's Message</h2>
            <p className="text-lg text-gray-700 mb-6">Pour your thoughts onto this digital parchment:</p>
            <motion.div
              className="relative glass-card p-6 min-h-[250px] flex flex-col items-center justify-center mb-8"
              ref={messageRef}
              style={{ 
                backgroundImage: 'linear-gradient(to bottom right, #FDF5E6, #FFEFE0)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '1.5rem',
                boxShadow: '0 10px 15px rgba(0,0,0,0.1)',
              }}
            >
              <textarea
                className="w-full h-full bg-transparent text-gray-800 font-dancing-script text-2xl md:text-3xl
                           leading-relaxed resize-none outline-none placeholder-gray-500 text-center p-4"
                placeholder="Write your loving message here..."
                value={message}
                onChange={handleMessageChange}
              />
              {!message && !snapshotTaken && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                  className="absolute bottom-8 text-sm text-gray-500"
                >
                  (Your heartfelt words go here!)
                </motion.p>
              )}
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleSnapIt}
              disabled={!message.trim()}
              className="glass-card px-8 py-4 text-rose hover:bg-white/40 transition-colors text-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Snap It! 📸
            </motion.button>
            
            {snapshotTaken && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm text-gray-600 mt-4"
              >
                Image saved and ready to share! Check your downloads or paste from clipboard.
              </motion.p>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {onBack && (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onBack}
          className="glass-card px-6 py-2 text-gray-800 mt-8"
        >
          Back
        </motion.button>
      )}
    </motion.div>
  );
};

export default YourWordsPage; 