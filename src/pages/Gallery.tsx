import { motion } from 'motion/react';
import { Image as ImageIcon, Sparkles } from 'lucide-react';
import Footer from '../components/Footer';

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function Gallery() {
  const images = [
    { id: 1, url: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800', title: 'Modern Clinic' },
    { id: 2, url: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800', title: 'Advanced Technology' },
    { id: 3, url: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800', title: 'Comfortable Waiting Area' },
    { id: 4, url: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800', title: 'Patient Lounge' },
    { id: 5, url: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80&w=800', title: 'Expert Care' },
    { id: 6, url: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800', title: 'Friendly Staff' },
    { id: 7, url: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=800', title: 'Bright Smiles' },
    { id: 8, url: 'https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?auto=format&fit=crop&q=80&w=800', title: 'Relaxing Environment' },
    { id: 9, url: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800', title: 'Sterilization Center' },
  ];

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden liquid-bg pb-24">
      <main className="flex-1 pb-24">
        <motion.div 
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="px-4 pt-16 pb-12 max-w-7xl mx-auto text-center"
        >
          <motion.div 
            variants={fadeIn}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6"
          >
            <Sparkles className="size-4" />
            Visual Tour
          </motion.div>
          <motion.h2 
            variants={fadeIn}
            className="text-slate-900 dark:text-slate-100 text-5xl md:text-6xl font-black leading-tight tracking-tight mb-4"
          >
            Clinic <span className="text-primary italic font-serif font-light">Gallery</span>
          </motion.h2>
          <motion.p 
            variants={fadeIn}
            className="text-slate-600 dark:text-primary/70 text-xl max-w-2xl mx-auto font-light"
          >
            Take a tour of our state-of-the-art facilities and see the results of our precision dental care.
          </motion.p>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4 max-w-7xl mx-auto"
        >
          {images.map((img) => (
            <motion.div 
              key={img.id} 
              variants={fadeIn}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-[2.5rem] shadow-2xl aspect-[4/3] bg-slate-200 dark:bg-slate-800 border border-white/10"
            >
              <img 
                src={img.url} 
                alt={img.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  className="space-y-2"
                >
                  <div className="size-10 rounded-xl bg-primary/20 backdrop-blur-md flex items-center justify-center text-primary mb-2">
                    <ImageIcon className="size-5" />
                  </div>
                  <h3 className="text-white font-bold text-2xl tracking-tight">{img.title}</h3>
                  <p className="text-white/60 text-sm font-light">Lumina Dental Excellence</p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
