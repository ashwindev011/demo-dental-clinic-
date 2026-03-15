import { Phone } from 'lucide-react';
import { motion } from 'motion/react';

export default function FloatingCallButton() {
  const phoneNumber = '+1234567890'; // Replace with the actual phone number

  return (
    <motion.a
      href={`tel:${phoneNumber}`}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-50 flex size-12 items-center justify-center rounded-full bg-primary text-white shadow-lg transition-all hover:bg-primary/90"
      aria-label="Call us"
    >
      <Phone className="size-6" />
    </motion.a>
  );
}
