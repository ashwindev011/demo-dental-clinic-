import { Phone } from 'lucide-react';
import { motion } from 'motion/react';

export default function FloatingCallButton() {
  const phoneNumber = '+1234567890'; // Replace with the actual phone number

  return (
    <motion.a
      href={`tel:${phoneNumber}`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      animate={{
        boxShadow: [
          "0 0 0 0px rgba(37, 99, 235, 0.4)",
          "0 0 0 10px rgba(37, 99, 235, 0)",
        ],
      }}
      transition={{
        boxShadow: {
          duration: 2,
          repeat: Infinity,
          ease: "easeOut",
        },
      }}
      className="fixed bottom-6 right-6 z-[9999] flex size-11 items-center justify-center rounded-full bg-primary text-white shadow-xl transition-all hover:bg-primary/90"
      aria-label="Call us"
    >
      <Phone className="size-5" />
    </motion.a>
  );
}
