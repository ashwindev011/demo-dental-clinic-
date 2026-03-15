import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Stethoscope, 
  ChevronRight,
  Clock,
  Phone,
  MapPin,
  ArrowRight,
  Facebook,
  Instagram,
  Twitter
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

const specialists = [
  {
    id: 1,
    name: 'Dr. Sarah Mitchell',
    specialty: 'Cosmetic Dentist',
    exp: '12Y EXP',
    bio: 'Crafting confident smiles through innovative aesthetic procedures and personalized care plans.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAhpfqWpmLiwrwZagrK3pq-BiPZvvRSLX9acatDP61OYqX7gcIO45H67Np-lca2OS8rEWd-8RCiyIu1_r3Hf1E1m0s5QnfP6D6lRkH8xdgfh8tEmrPZ4WgHBTFdsu6EprnK6SzD0WVsRVbUkVqBOL354pVmbtooFlzA6susc9AQdwNfxa3iGksrIglWJVCT3wzYCK3nVv9TTmuBz4KiVKRQy1K4mCtCmDx0EoP3BFqkfZQMIyJToB25uCxbvh6HIA3vcTO03eG_vPcE'
  },
  {
    id: 2,
    name: 'Dr. James Wilson',
    specialty: 'Orthodontist',
    exp: '15Y EXP',
    bio: 'Specializing in Invisalign and advanced corrective treatments for both children and adults.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBxjwdml5yHWtf9zgiccdkgmc6uB27LdwPXOIDf80PKRW0vPsBhWy7ZxuiSEqzwg5bbytn62ep7elUauO2WtuaudIQ0NIg64pOxWRppP_Q1N8M-_lDXwPdRf7agJRiGkMUaTa6fKUdRSgyYKNUydtmd1qKPL8y9-SahtWIyF7AuiF8aBCms2htuC9w-wj_L8MVzUoEaygMLLnuJ74UOqhvrzaGB2-Ef0Fje09iyATrexugs6lOc-CQzNEuhCHYwAznhAGnAy4gh1yLz'
  },
  {
    id: 3,
    name: 'Dr. Elena Rodriguez',
    specialty: 'Pediatric Dentist',
    exp: '8Y EXP',
    bio: 'Making dental visits fun and stress-free for our youngest patients with a gentle, caring approach.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA7h1FRi6eYDHVhMGleTZchYVLBbj1DTTEjf_68SpNGq7VyElAPbRYJoRJbmi9n58lyDrHnQoWjFrRjZQBGDi2E2gdACzNYEqAhlWMY-qQt4jLKNc7C9hnrhAjrcH2cOnAUZ7teOn7CCPG1ADkLREQdulLXX9YW3E69goU9PEm4quyMpOEJ4C3rEkHmWPk_x9A6hIMStNQArpRv-nEDvx82eDNHBO83jq2-9TR0nGwG6CSpV3XOEnsflr8rlr-1J_idlCVQFC55_DJq'
  }
];

export default function Specialists() {
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
            Meet Our <span className="text-primary italic font-serif font-light">Specialists</span>
          </motion.h2>
          <motion.p 
            variants={fadeIn}
            className="text-slate-600 dark:text-slate-400 text-2xl max-w-3xl mx-auto font-light leading-relaxed"
          >
            World-class care from experienced professionals dedicated to your smile.
          </motion.p>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4 max-w-7xl mx-auto"
        >
          {specialists.map((doc) => (
            <motion.div 
              key={doc.id} 
              variants={fadeIn}
              whileHover={{ y: -5 }}
              className="flex flex-col items-stretch justify-start rounded-3xl overflow-hidden bg-white dark:bg-slate-900/50 backdrop-blur-md border border-primary/10 shadow-lg hover:shadow-xl hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="w-full aspect-[4/3] bg-cover bg-center relative overflow-hidden" style={{ backgroundImage: `url("${doc.image}")` }}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
              </div>
              <div className="flex flex-col p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">{doc.name}</h3>
                    <p className="text-primary text-sm font-medium uppercase tracking-wider mt-1">{doc.specialty}</p>
                  </div>
                  <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold">{doc.exp}</div>
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6 flex-grow font-light italic line-clamp-3">"{doc.bio}"</p>
                <Link to="/book" className="text-primary font-bold text-sm flex items-center gap-2 group/link">
                  View Bio <ArrowRight className="size-4 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
