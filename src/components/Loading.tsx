import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

export default function Loading() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-background-light dark:bg-background-dark"
    >
      <div className="relative">
        {/* Outer rotating ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="size-24 rounded-full border-4 border-primary/10 border-t-primary"
        />
        
        {/* Inner pulsing icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="text-primary"
          >
            <Sparkles className="size-8" />
          </motion.div>
        </div>
        
        {/* Text below */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute -bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap text-sm font-bold uppercase tracking-widest text-primary"
        >
          Lumina Dental
        </motion.p>
      </div>
    </motion.div>
  );
}
