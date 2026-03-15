import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Stethoscope, 
  ChevronRight,
  Clock,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-slate-900/50 pt-32 pb-32 md:pb-16 border-t border-primary/10 mt-24">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <Link to="/" className="flex items-center gap-3">
            <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
              <Stethoscope className="size-7" />
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100">Lumina<span className="text-primary">Dental</span></h2>
          </Link>
          <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-light">
            Redefining the dental journey through innovation, transparency, and liquid glass precision.
          </p>
          <div className="flex gap-4">
            {[
              { icon: Facebook, href: "https://facebook.com" },
              { icon: Instagram, href: "https://instagram.com" },
              { icon: Twitter, href: "https://twitter.com" }
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, backgroundColor: "var(--color-primary)", color: "white" }}
                className="size-11 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center transition-all cursor-pointer text-slate-500 dark:text-slate-400"
              >
                <social.icon className="size-5" />
              </motion.a>
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <h5 className="font-bold text-lg mb-8 uppercase tracking-widest text-slate-900 dark:text-slate-100">Quick Links</h5>
          <ul className="space-y-5 text-slate-500 dark:text-slate-400">
            {['Booking Portal', 'Contact Us', 'Our Story', 'Care Services'].map((link, i) => (
              <li key={i}>
                <Link className="hover:text-primary transition-all flex items-center gap-3 group" to={['/book', '/contact', '/about', '/services'][i]}>
                  <ChevronRight className="size-4 transition-transform group-hover:translate-x-1" /> 
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h5 className="font-bold text-lg mb-8 uppercase tracking-widest text-slate-900 dark:text-slate-100">Clinic Hours</h5>
          <ul className="space-y-4 text-slate-500 dark:text-slate-400">
            <li className="flex items-center justify-between p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm">
              <div className="flex items-center gap-3">
                <Clock className="size-5 text-primary" />
                <span className="text-sm font-medium">Mon - Fri</span>
              </div>
              <span className="font-bold text-slate-900 dark:text-slate-100">8:00 - 19:00</span>
            </li>
            <li className="flex items-center justify-between p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm">
              <div className="flex items-center gap-3">
                <Clock className="size-5 text-primary" />
                <span className="text-sm font-medium">Saturday</span>
              </div>
              <span className="font-bold text-slate-900 dark:text-slate-100">9:00 - 16:00</span>
            </li>
            <li className="flex items-center justify-between p-4 rounded-2xl bg-slate-100/50 dark:bg-slate-900/50 border border-dashed border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-3">
                <Clock className="size-5 text-slate-400" />
                <span className="text-sm font-medium">Sunday</span>
              </div>
              <span className="font-bold text-slate-400">Closed</span>
            </li>
          </ul>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <h5 className="font-bold text-lg mb-8 uppercase tracking-widest text-slate-900 dark:text-slate-100">Contact & Location</h5>
          <div className="space-y-6">
            <div className="rounded-[2rem] overflow-hidden h-32 border border-primary/10 shadow-2xl group relative">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format,compress&fit=crop&q=75&w=800" 
                alt="Map" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-125"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors"></div>
            </div>
            <div className="space-y-4">
              <p className="text-sm text-slate-500 dark:text-slate-400 flex items-start gap-4 font-light">
                <MapPin className="size-5 text-primary shrink-0" />
                122 Crystal Blvd, Medical Plaza 4, Zurich
              </p>
              <a href="tel:+1234567890" className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-4 font-light hover:text-primary transition-colors">
                <Phone className="size-5 text-primary shrink-0" />
                +1 (234) 567-890
              </a>
            </div>
          </div>
        </motion.div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 mt-24 pt-10 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-8 text-sm text-slate-500">
        <p>© {new Date().getFullYear()} Lumina Dental Care. All rights reserved.</p>
        <div className="flex gap-10">
          <Link className="hover:text-primary transition-colors" to="/">Privacy Policy</Link>
          <Link className="hover:text-primary transition-colors" to="/">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
