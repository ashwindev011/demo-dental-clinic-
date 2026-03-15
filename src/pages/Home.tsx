import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { 
  Calendar, 
  Stethoscope, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight, 
  ChevronRight,
  Star,
  MapPin,
  Clock,
  Phone,
  CheckCircle2,
  Facebook,
  Instagram,
  Twitter
} from 'lucide-react';

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

const cardHover = {
  hover: {
    y: -15,
    transition: { duration: 0.4, ease: "easeOut" }
  }
};

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const blob1Y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const blob2Y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroImageScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  return (
    <div ref={containerRef} className="relative overflow-x-hidden pb-24 font-display selection:bg-primary/30">
      {/* Decorative Background Elements for Liquid Style with Parallax */}
      <motion.div 
        style={{ y: blob1Y }}
        className="fixed top-[-10%] right-[-10%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -z-10"
      ></motion.div>
      <motion.div 
        style={{ y: blob2Y }}
        className="fixed bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10"
      ></motion.div>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 py-12 @container">
        <div className="grid grid-cols-1 @[864px]:grid-cols-2 gap-16 items-center min-h-[85vh]">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
            style={{ scale: heroImageScale }}
          >
            <div className="absolute -inset-12 bg-primary/20 rounded-[4rem] blur-[80px] -z-10 animate-pulse"></div>
            <div className="relative rounded-[3rem] overflow-hidden aspect-[4/5] liquid-glass border border-white/10 group shadow-2xl shadow-primary/10">
              <img 
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format,compress&fit=crop&q=75&w=1200" 
                alt="Modern Clinic" 
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                loading="eager"
                fetchPriority="high"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background-dark/90 via-transparent to-transparent"></div>
              
              {/* Floating Badge */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-8 right-8 glass-effect px-6 py-4 rounded-2xl backdrop-blur-xl border border-white/20 shadow-2xl"
              >
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500">
                    <Sparkles className="size-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-white/60">Rating</p>
                    <p className="text-white font-bold">4.9/5.0</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="absolute bottom-8 left-8 right-8 p-8 rounded-[2rem] flex items-center justify-between backdrop-blur-3xl border border-white/20 bg-white/10 dark:bg-slate-900/40"
              >
                <div>
                  <p className="text-primary text-xs font-bold uppercase tracking-widest mb-1">Next Available</p>
                  <p className="text-white text-xl font-bold">Today, {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                </div>
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  className="size-14 rounded-2xl bg-primary flex items-center justify-center text-white shadow-xl shadow-primary/40 cursor-pointer"
                >
                  <CheckCircle2 className="size-7" />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="space-y-10"
          >
            <motion.div 
              variants={fadeIn}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-[0.2em]"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Accepting New Patients
            </motion.div>
            
            <div className="overflow-hidden">
              <motion.h2 
                variants={{
                  initial: { y: "100%" },
                  animate: { y: 0 }
                }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="text-6xl @[480px]:text-8xl font-black leading-[0.95] tracking-tight text-slate-900 dark:text-slate-100"
              >
                The Future of <br />
                <span className="text-primary italic font-serif font-light">Precision Dentistry</span>
              </motion.h2>
            </div>
            
            <motion.p 
              variants={fadeIn}
              className="text-xl text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed font-light"
            >
              Experience advanced dental care within a sanctuary of modern luxury. We combine cutting-edge liquid glass aesthetics with world-class medical expertise.
            </motion.p>
            
            <motion.div 
              variants={fadeIn}
              className="flex flex-col sm:flex-row gap-5"
            >
              <Link to="/book" className="group relative bg-primary text-white h-16 px-10 rounded-2xl font-bold text-lg overflow-hidden flex items-center justify-center gap-3 shadow-2xl shadow-primary/30">
                <span className="relative z-10">Book Now</span>
                <Calendar className="size-5 relative z-10" />
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </Link>
              <Link to="/services" className="glass-panel h-16 px-10 rounded-2xl font-bold text-lg hover:bg-primary/10 transition-all flex items-center justify-center gap-3 border border-primary/10">
                View Services
                <ArrowRight className="size-5" />
              </Link>
            </motion.div>
            
            <motion.div 
              variants={fadeIn}
              className="flex items-center gap-6 pt-10 border-t border-primary/10"
            >
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <motion.div 
                    key={i} 
                    whileHover={{ y: -5, zIndex: 10 }}
                    className="w-12 h-12 rounded-full border-4 border-background-light dark:border-background-dark bg-slate-200 overflow-hidden cursor-pointer"
                  >
                    <img src={`https://picsum.photos/seed/user${i}/100/100`} alt="User" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </motion.div>
                ))}
                <div className="w-12 h-12 rounded-full border-4 border-background-light dark:border-background-dark bg-primary flex items-center justify-center text-xs font-bold text-white shadow-lg shadow-primary/20">+2k</div>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Trusted by over <span className="font-bold text-slate-900 dark:text-slate-100">2,500+</span> happy patients this year
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Marquee Section */}
        <section className="py-20 border-y border-primary/5 mt-20 overflow-hidden">
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

        {/* Featured Services */}
        <section className="py-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl"
            >
              <h3 className="text-5xl font-bold mb-8 tracking-tight">World-Class <br /><span className="text-primary">Specialized Care</span></h3>
              <p className="text-slate-500 dark:text-slate-400 text-xl leading-relaxed font-light">From routine checkups to complex reconstructive surgeries, our specialists use the latest technology to ensure a painless and perfect result.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Link to="/services" className="text-primary font-bold flex items-center gap-3 group text-xl px-8 py-4 rounded-2xl bg-primary/5 hover:bg-primary/10 transition-all">
                See All Services
                <ArrowRight className="size-6 transition-transform group-hover:translate-x-2" />
              </Link>
            </motion.div>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { icon: Sparkles, title: "Teeth Whitening", desc: "Laser-assisted professional whitening for results that last up to 3 years." },
              { icon: Stethoscope, title: "Dental Implants", desc: "Permanent, natural-looking tooth replacement with a 99% success rate." },
              { icon: ShieldCheck, title: "Invisible Braces", desc: "Discreet alignment solutions with modern Invisalign technology." },
              { icon: Calendar, title: "Emergency Care", desc: "24/7 priority dental assistance for urgent pain relief and repairs." }
            ].map((service, i) => (
              <motion.div 
                key={i}
                variants={{
                  initial: { opacity: 0, y: 30 },
                  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] } },
                  hover: { y: -15, transition: { duration: 0.4, ease: "easeOut" } }
                }}
                whileHover="hover"
                className="glass-panel p-10 rounded-[2.5rem] border border-primary/10 hover:border-primary/40 transition-all group cursor-pointer relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 size-40 bg-primary/5 rounded-full -mr-20 -mt-20 transition-transform group-hover:scale-150 duration-700"></div>
                <motion.div 
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  className="w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center text-primary mb-10 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-xl shadow-primary/5"
                >
                  <service.icon className="size-10" />
                </motion.div>
                <h4 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{service.title}</h4>
                <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed mb-10 font-light">{service.desc}</p>
                <Link to="/services" className="text-primary text-sm font-bold flex items-center gap-2 group/link">
                  LEARN MORE 
                  <ChevronRight className="size-5 transition-transform group-hover/link:translate-x-2" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Testimonial Section */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="py-12 glass-panel rounded-[4rem] overflow-hidden relative border border-primary/10 group"
        >
          <div className="absolute inset-0 bg-primary/5 -z-10 group-hover:bg-primary/10 transition-colors duration-1000"></div>
          <div className="px-8 py-24 flex flex-col items-center text-center">
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: "spring", damping: 12 }}
              className="flex gap-2 mb-12"
            >
              {[...Array(5)].map((_, i) => <Star key={i} className="size-8 fill-primary text-primary" />)}
            </motion.div>
            <blockquote className="text-3xl md:text-5xl font-bold italic max-w-5xl leading-[1.2] mb-16 font-serif text-slate-800 dark:text-slate-100">
              "The most sophisticated dental experience I've ever had. The liquid glass design of the clinic is matched only by the incredible precision of their work."
            </blockquote>
            <div className="flex items-center gap-6">
              <motion.div 
                whileHover={{ scale: 1.1 }}
                className="w-20 h-20 rounded-full border-4 border-primary/20 overflow-hidden shadow-2xl"
              >
                <img src="https://picsum.photos/seed/patient1/100/100" alt="Patient" className="w-full h-full object-cover" />
              </motion.div>
              <div className="text-left">
                <p className="font-bold text-2xl">Julianne S. Rodriguez</p>
                <p className="text-primary font-medium text-base tracking-widest uppercase">Professional Architect</p>
              </div>
            </div>
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
}
