import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import Counter from '../components/Counter';
import Footer from '../components/Footer';
import { 
  Award, 
  Users, 
  History, 
  Target, 
  CheckCircle2, 
  Star, 
  Quote, 
  ArrowRight,
  Stethoscope,
  HeartPulse,
  Sparkles,
  ShieldCheck,
  HelpCircle
} from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function About() {
  const specialists = [
    {
      name: "Dr. Elena Vance",
      role: "Founder & Lead Surgeon",
      image: "https://images.unsplash.com/photo-1559839734-2b71f153678f?auto=format&fit=crop&q=80&w=400&h=500",
      specialty: "Implantology"
    },
    {
      name: "Dr. Marcus Chen",
      role: "Senior Orthodontist",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400&h=500",
      specialty: "Digital Aligners"
    },
    {
      name: "Dr. Sarah Miller",
      role: "Cosmetic Specialist",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=400&h=500",
      specialty: "Aesthetic Design"
    }
  ];

  const testimonials = [
    {
      text: "The most comfortable dental experience I've ever had. The technology they use is mind-blowing.",
      author: "James Wilson",
      rating: 5
    },
    {
      text: "I used to have severe dental anxiety, but the environment here is so calming. Truly a sanctuary.",
      author: "Emily Rodriguez",
      rating: 5
    }
  ];

  return (
    <div className="relative overflow-x-hidden pb-24 font-display selection:bg-primary/30">
      {/* Decorative Background Elements for Liquid Style */}
      <div className="fixed top-[-10%] right-[-10%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -z-10"></div>
      <div className="fixed bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -z-10"></div>

      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-background-dark z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=2000" 
            alt="Modern Dental Studio" 
            className="h-full w-full object-cover"
          />
        </motion.div>

        <div className="relative z-20 text-center px-4 max-w-4xl">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="inline-block px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-[0.2em] mb-6 backdrop-blur-md"
          >
            Est. 2010
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.95] mb-8 tracking-tight"
          >
            Crafting Smiles with <br />
            <span className="text-primary italic font-serif font-light">Artistic Precision</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-slate-200 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed font-light"
          >
            We merge fluid aesthetics with surgical excellence to create an environment where anxiety dissolves and health flourishes.
          </motion.p>
        </div>

        {/* Floating Badge */}
        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-12 right-12 glass-effect px-6 py-4 rounded-2xl backdrop-blur-xl border border-white/20 shadow-2xl hidden md:flex items-center gap-3"
        >
          <div className="size-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500">
            <Sparkles className="size-5" />
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-white/60">Rating</p>
            <p className="text-white font-bold">4.9/5.0</p>
          </div>
        </motion.div>
      </section>

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

      {/* Mission Section */}
      <section className="px-4 py-24 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 order-2 lg:order-1"
          >
            {[
              { icon: ShieldCheck, title: "Safety First", desc: "Rigorous sterilization and safety protocols." },
              { icon: Sparkles, title: "Digital Precision", desc: "100% digital workflow for perfect results." },
              { icon: HeartPulse, title: "Patient Care", desc: "Compassionate approach to every procedure." },
              { icon: Stethoscope, title: "Expertise", desc: "World-class specialists in every field." }
            ].map((item, i) => (
              <motion.div key={i} variants={fadeIn} className="p-10 rounded-[2.5rem] bg-slate-50 dark:bg-slate-900/50 border border-primary/10 hover:border-primary/40 transition-all group cursor-pointer">
                <item.icon className="text-primary size-10 mb-6 group-hover:scale-110 transition-transform" />
                <h4 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{item.title}</h4>
                <p className="text-base text-slate-500 dark:text-slate-400 font-light leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="relative order-1 lg:order-2"
          >
            <div className="absolute -top-12 -left-12 size-48 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="glass-panel p-12 rounded-[2.5rem] border border-primary/20 relative z-10">
              <Quote className="text-primary size-12 mb-8 opacity-50" />
              <h2 className="text-4xl font-serif italic leading-snug text-slate-800 dark:text-slate-100 mb-10">
                "To provide transparent, liquid-glass clarity in every diagnosis and treatment, ensuring our patients feel empowered, informed, and completely at ease."
              </h2>
              <div className="flex items-center gap-4">
                <div className="h-px w-16 bg-primary/40"></div>
                <p className="text-sm uppercase tracking-[0.2em] font-bold text-primary">Our Mission</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="px-4 py-24 bg-slate-50 dark:bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Meet Our Specialists</h2>
            <p className="text-slate-500 max-w-2xl mx-auto italic font-serif text-lg">A collective of artists and scientists dedicated to your oral health.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {specialists.map((member, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-[2.5rem] aspect-[4/5]"
              >
                <img src={member.image} alt={member.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                  <p className="text-primary text-xs font-bold uppercase tracking-widest mb-1">{member.specialty}</p>
                  <h3 className="text-white text-2xl font-bold mb-1">{member.name}</h3>
                  <p className="text-slate-300 text-sm">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="px-4 py-24 max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row gap-16">
          <div className="md:w-2/3 space-y-12 relative border-l-2 border-primary/20 ml-4 pl-8 order-2 md:order-1">
            {[
              { year: "2010", title: "The Genesis", desc: "Founded by Dr. Elena Vance with a vision to strip away clinical sterility and replace it with a warm sanctuary." },
              { year: "2016", title: "Technological Leap", desc: "Integration of 3D-fluid imaging and liquid-resin printing, reducing patient wait times by 70%." },
              { year: "Today", title: "The Lumina Standard", desc: "Awarded 'International Clinic of the Year' for our innovative patient care model." }
            ].map((event, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className="relative pl-10"
              >
                <div className="absolute -left-2 top-0 size-5 rounded-full bg-primary ring-4 ring-primary/20 shadow-[0_0_15px_rgba(37,99,235,0.5)]"></div>
                <h3 className="text-2xl font-bold text-primary mb-3">{event.year} • {event.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 font-light leading-relaxed">{event.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="md:w-1/3 order-1 md:order-2">
            <h2 className="text-5xl font-bold mb-8 flex items-center gap-4 tracking-tight">
              <History className="text-primary size-10" />
              Our Evolution
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed font-light">From a small practice to an international standard, our journey has been defined by a relentless pursuit of innovation.</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary py-24 rounded-[3rem] mx-4">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {[
            { label: "Happy Patients", value: 14, suffix: "k+" },
            { label: "Specialists", value: 12, suffix: "" },
            { label: "Awards Won", value: 25, suffix: "+" },
            { label: "Digital Workflow", value: 100, suffix: "%" }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <p className="text-6xl font-black text-white mb-3 tracking-tight">
                <Counter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-white/80 text-sm uppercase tracking-[0.2em] font-bold">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-4 py-32 max-w-7xl mx-auto">
        <Users className="text-primary size-12 mx-auto mb-10 opacity-20" />
        <h2 className="text-5xl font-bold mb-20 text-center tracking-tight">What Our Patients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-panel p-12 rounded-[2.5rem] border border-primary/10 relative hover:border-primary/30 transition-all"
            >
              <div className="flex gap-1 mb-8">
                {[...Array(t.rating)].map((_, j) => <Star key={j} className="size-5 fill-primary text-primary" />)}
              </div>
              <p className="text-2xl italic text-slate-800 dark:text-slate-200 mb-10 font-serif leading-relaxed">"{t.text}"</p>
              <p className="font-bold text-primary text-lg">— {t.author}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 py-32 bg-slate-50 dark:bg-slate-900/30 rounded-[3rem] mx-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6 flex items-center justify-center gap-4 tracking-tight">
              <HelpCircle className="text-primary size-10" />
              Common Questions
            </h2>
            <p className="text-slate-500 text-lg font-light">Everything you need to know about our services and policies.</p>
          </div>
          <div className="space-y-6">
            {[
              { q: "What dental services do you provide?", a: "We offer a full range of services including general dentistry, cosmetic procedures, orthodontics, and advanced restorative treatments using our 100% digital workflow." },
              { q: "How can I book an appointment?", a: "You can easily book an appointment through our website by clicking the 'Book Appointment' button, or by calling our clinic directly at +91 00000-00000." },
              { q: "Do you accept dental insurance?", a: "Yes, we work with most major insurance providers. Our team will help you verify your coverage and handle the claims process for you." },
              { q: "What should I bring to my first appointment?", a: "Please bring a valid ID, your insurance card (if applicable), and any previous dental records or X-rays you may have." }
            ].map((item, i) => (
              <motion.details 
                key={i}
                className="group glass-panel rounded-2xl border border-primary/10 overflow-hidden hover:border-primary/30 transition-all"
              >
                <summary className="flex items-center justify-between p-8 cursor-pointer list-none font-bold text-xl text-slate-900 dark:text-slate-100">
                  {item.q}
                  <span className="material-symbols-outlined transition-transform group-open:rotate-180 text-primary">expand_more</span>
                </summary>
                <div className="px-8 pb-8 text-slate-600 dark:text-slate-400 leading-relaxed font-light text-lg">
                  {item.a}
                </div>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
