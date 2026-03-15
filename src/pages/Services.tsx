import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Sparkles, 
  Stethoscope, 
  Smile, 
  Baby, 
  Activity, 
  HeartPulse,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';

import Footer from '../components/Footer';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Services() {
  const services = [
    {
      id: 1,
      title: 'General Dentistry',
      description: 'Comprehensive exams, cleanings, and preventative care to keep your smile healthy.',
      icon: Stethoscope,
    },
    {
      id: 2,
      title: 'Cosmetic Dentistry',
      description: 'Teeth whitening, veneers, and smile makeovers for a brighter, more confident you.',
      icon: Sparkles,
    },
    {
      id: 3,
      title: 'Orthodontics',
      description: 'Traditional braces and clear aligners to straighten teeth and correct bites.',
      icon: Activity,
    },
    {
      id: 4,
      title: 'Pediatric Dentistry',
      description: 'Gentle, specialized care for children to ensure a lifetime of healthy smiles.',
      icon: Baby,
    },
    {
      id: 5,
      title: 'Oral Surgery',
      description: 'Expert extractions, wisdom teeth removal, and dental implants.',
      icon: Smile,
    },
    {
      id: 6,
      title: 'Emergency Care',
      description: 'Prompt treatment for dental emergencies, toothaches, and injuries.',
      icon: HeartPulse,
    },
  ];

  return (
    <div className="relative overflow-x-hidden pb-24 font-display selection:bg-primary/30">
      {/* Decorative Background Elements for Liquid Style */}
      <div className="fixed top-[-10%] right-[-10%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -z-10"></div>
      <div className="fixed bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10"></div>

      <main className="flex-1 pb-24">
        <motion.div 
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="px-4 pt-32 pb-24 max-w-7xl mx-auto text-center"
        >
          <motion.h2 
            variants={fadeIn}
            className="text-slate-900 dark:text-slate-100 text-6xl md:text-8xl font-black leading-tight tracking-tight mb-8"
          >
            Our <span className="text-primary italic font-serif font-light">Services</span>
          </motion.h2>
          <motion.p 
            variants={fadeIn}
            className="text-slate-600 dark:text-slate-400 text-2xl max-w-2xl mx-auto font-light leading-relaxed"
          >
            Comprehensive dental care tailored to your unique needs, delivered with precision and comfort.
          </motion.p>
        </motion.div>

        {/* Marquee Section */}
        <section className="py-20 border-y border-primary/5 overflow-hidden">
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex gap-20 items-center whitespace-nowrap"
          >
            {[...Array(10)].map((_, i) => (
              <div key={i} className="flex items-center gap-4 text-slate-300 dark:text-slate-700 font-black text-4xl uppercase tracking-tighter">
                <Sparkles className="size-8 text-primary/30" />
                Lumina Dental
                <span className="text-primary/20">Precision</span>
                <ShieldCheck className="size-8 text-primary/30" />
                Excellence
              </div>
            ))}
          </motion.div>
        </section>

        <motion.div 
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-4 max-w-7xl mx-auto py-24"
        >
          {services.map((service) => (
            <motion.div 
              key={service.id} 
              variants={fadeIn}
              whileHover={{ y: -10 }}
              className="flex flex-col items-start justify-start p-12 rounded-[2.5rem] bg-white dark:bg-slate-900/50 backdrop-blur-md border border-primary/10 shadow-lg hover:shadow-2xl hover:border-primary/30 transition-all duration-500 group"
            >
              <div className="w-20 h-20 rounded-3xl bg-primary/10 text-primary flex items-center justify-center mb-10 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                <service.icon className="size-10" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-6 group-hover:text-primary transition-colors">{service.title}</h3>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-10 flex-grow font-light">{service.description}</p>
              <Link to="/book" className="text-primary font-bold text-lg flex items-center gap-3 group/link">
                Schedule Now <ArrowRight className="size-5 transition-transform group-hover/link:translate-x-2" />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer / Contact Preview */}
        <section className="relative py-32 overflow-hidden rounded-[3rem] mx-4 mb-24">
          <div className="absolute inset-0 bg-primary z-0"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 z-10"></div>
          <div className="relative z-20 text-center px-4">
            <h3 className="text-white text-5xl md:text-6xl font-black mb-12 tracking-tight">Ready for a new perspective?</h3>
            <Link to="/book" className="inline-flex items-center gap-3 bg-white text-primary px-12 py-6 rounded-2xl font-bold text-lg transition-all hover:scale-105 shadow-2xl">
              Book a Consultation
              <ArrowRight className="size-5" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
