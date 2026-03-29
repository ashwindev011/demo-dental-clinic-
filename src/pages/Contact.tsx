import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';
import Footer from '../components/Footer';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      try {
        await addDoc(collection(db, 'contacts'), {
          ...formData,
          createdAt: new Date().toISOString()
        });
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } catch (error) {
        console.error('Error saving contact:', error);
        alert('Failed to send message. Please try again.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col bg-background-light dark:bg-background-dark overflow-x-hidden pb-24">
      <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">Contact <span className="text-primary">Us</span></h1>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Have questions or need assistance? Reach out to our team and we'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="glass-panel p-6 rounded-2xl border border-primary/10 flex flex-col items-center text-center">
            <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
              <span className="material-symbols-outlined">call</span>
            </div>
            <h3 className="font-bold mb-2">Phone</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">+91 00000-00000</p>
          </div>
          <div className="glass-panel p-6 rounded-2xl border border-primary/10 flex flex-col items-center text-center">
            <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
              <span className="material-symbols-outlined">mail</span>
            </div>
            <h3 className="font-bold mb-2">Email</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">hello@luminadental.com</p>
          </div>
          <div className="glass-panel p-6 rounded-2xl border border-primary/10 flex flex-col items-center text-center">
            <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
              <span className="material-symbols-outlined">location_on</span>
            </div>
            <h3 className="font-bold mb-2">Location</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">Downtown Medical Plaza, Suite 402</p>
          </div>
        </div>

        <div className="glass-panel p-8 rounded-3xl border border-primary/10 shadow-xl relative overflow-hidden">
          {isSubmitted ? (
            <div className="flex flex-col items-center py-12 text-center">
              <div className="size-20 rounded-full bg-primary/20 flex items-center justify-center text-primary mb-6 animate-bounce">
                <span className="material-symbols-outlined text-4xl">check_circle</span>
              </div>
              <h2 className="text-2xl font-bold mb-2">Message Sent!</h2>
              <p className="text-slate-600 dark:text-slate-400 mb-8">Thank you for reaching out. We'll get back to you shortly.</p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="bg-primary text-white px-8 py-3 rounded-xl font-bold hover:opacity-90 transition-all"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Full Name</label>
                  <input 
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full bg-black/5 dark:bg-white/5 border ${errors.name ? 'border-red-500' : 'border-black/10 dark:border-white/10'} rounded-xl px-4 py-3 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-primary/50 transition-all`}
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="text-red-500 text-[10px] font-bold uppercase">{errors.name}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Email Address</label>
                  <input 
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full bg-black/5 dark:bg-white/5 border ${errors.email ? 'border-red-500' : 'border-black/10 dark:border-white/10'} rounded-xl px-4 py-3 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-primary/50 transition-all`}
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="text-red-500 text-[10px] font-bold uppercase">{errors.email}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Subject</label>
                <input 
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full bg-black/5 dark:bg-white/5 border ${errors.subject ? 'border-red-500' : 'border-black/10 dark:border-white/10'} rounded-xl px-4 py-3 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-primary/50 transition-all`}
                  placeholder="How can we help?"
                />
                {errors.subject && <p className="text-red-500 text-[10px] font-bold uppercase">{errors.subject}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full bg-black/5 dark:bg-white/5 border ${errors.message ? 'border-red-500' : 'border-black/10 dark:border-white/10'} rounded-xl px-4 py-3 text-slate-900 dark:text-slate-100 focus:outline-none focus:border-primary/50 transition-all resize-none`}
                  placeholder="Tell us more about your inquiry..."
                />
                {errors.message && <p className="text-red-500 text-[10px] font-bold uppercase">{errors.message}</p>}
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-primary text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:scale-[1.01] active:scale-[0.99]'}`}
              >
                {isSubmitting ? (
                  <>
                    <div className="size-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <span className="material-symbols-outlined">send</span>
                    Send Message
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
