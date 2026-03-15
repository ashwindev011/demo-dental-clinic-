import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Book() {
  const navigate = useNavigate();
  const today = new Date();
  const currentMonth = today.toLocaleString('default', { month: 'long' });
  const currentYear = today.getFullYear();
  
  const [selectedDay, setSelectedDay] = useState(today.getDate());
  const [selectedTime, setSelectedTime] = useState('10:30 AM');
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [place, setPlace] = useState('');
  const [notes, setNotes] = useState('');

  const isFormValid = fullName.trim().length > 0 && phoneNumber.trim().length > 0 && place.trim().length > 0;

  // Generate next 14 days starting from today
  const days = Array.from({ length: 14 }, (_, i) => {
    const date = new Date();
    date.setDate(today.getDate() + i);
    return date;
  });
  
  const times = ['09:00 AM', '10:30 AM', '01:00 PM', '02:30 PM', '04:00 PM', '05:30 PM'];

  const handleBook = async () => {
    const formUrl = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSflLqfLuxfZAP8xi4rFSe_e-kE97L1fsmnfZMqkoF9yw0Dg9g/formResponse';
    const formData = new FormData();
    
    const formattedDate = `${currentMonth} ${selectedDay}, ${currentYear}`;
    
    // Mapping entries from the provided Google Form HTML
    formData.append('entry.193007628', formattedDate);
    formData.append('entry.1243026538', selectedTime);
    formData.append('entry.1408596816', fullName);
    formData.append('entry.974145875', phoneNumber);
    formData.append('entry.789230174', place);
    formData.append('entry.1578064809', notes);

    try {
      // Using no-cors mode for Google Forms submission
      await fetch(formUrl, {
        method: 'POST',
        mode: 'no-cors',
        body: formData,
      });

      // Since no-cors returns an opaque response, we assume success if no error is thrown
      navigate('/confirm-booking', { 
        state: { 
          date: formattedDate, 
          time: selectedTime, 
          fullName, 
          phoneNumber, 
          place, 
          notes 
        } 
      });
    } catch (error) {
      console.error('Error booking appointment:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden liquid-gradient pb-12">
      <main className="flex-1 max-w-2xl mx-auto w-full">
        {/* Hero Card */}
        <div className="@container px-4 py-6">
          <div className="relative overflow-hidden rounded-xl h-48 flex flex-col justify-end bg-slate-800 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent z-10"></div>
            <img alt="Modern Dental Clinic Interior" className="absolute inset-0 object-cover w-full h-full opacity-60" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeLHSmYCs2JLMLlfugMWMcaSWN6sWYaua5wik4MVn12NqFi449Cp_j2aBfCY207LzZBM_O2NXIhia0bwJORCfuTgPjwZ1I1E8gY5UeF5YUW-oNfZfkDk-vjRmoVxjAwXXn9oEEYjsdLpNyKVf0PBob_lV5Fr4FP66lJ_38F_ZlocBtPX5jw1jSDl5dr73fJNHL4j6k2nhWE9jSzEpN-2TwGweYjXO_bn4DuYwpQBbTmr01PuqAOPlkHvtGmjp16ERZkjuMmD4SIf7W" />
            <div className="relative z-20 p-6">
              <span className="bg-primary/20 text-primary text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md mb-2 inline-block">Premium Care</span>
              <h1 className="text-white text-3xl font-bold leading-tight">Lumina Dental Studio</h1>
              <p className="text-slate-300 text-sm flex items-center gap-1 mt-1">
                <span className="material-symbols-outlined text-xs">location_on</span>
                Downtown Medical Plaza, Suite 402
              </p>
            </div>
          </div>
        </div>

        {/* Calendar Section */}
        <section className="px-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-slate-900 dark:text-slate-100 text-lg font-bold">Select Date</h3>
            <div className="flex items-center gap-2 glass-effect px-3 py-1 rounded-full">
              <span className="material-symbols-outlined text-primary text-sm">calendar_month</span>
              <span className="text-xs font-medium text-slate-300">{currentMonth.substring(0, 3)} {currentYear}</span>
            </div>
          </div>
          <div className="glass-effect rounded-xl p-4 shadow-xl">
            <div className="flex items-center justify-between mb-4 px-2">
              <button className="size-8 flex items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                <span className="material-symbols-outlined text-slate-500 dark:text-slate-400">chevron_left</span>
              </button>
              <p className="text-slate-900 dark:text-slate-100 text-sm font-bold uppercase tracking-widest">{currentMonth}</p>
              <button className="size-8 flex items-center justify-center rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                <span className="material-symbols-outlined text-slate-500 dark:text-slate-400">chevron_right</span>
              </button>
            </div>
            <div className="grid grid-cols-7 gap-1">
              <div className="text-slate-500 text-[10px] font-bold text-center py-2 uppercase">S</div>
              <div className="text-slate-500 text-[10px] font-bold text-center py-2 uppercase">M</div>
              <div className="text-slate-500 text-[10px] font-bold text-center py-2 uppercase">T</div>
              <div className="text-slate-500 text-[10px] font-bold text-center py-2 uppercase">W</div>
              <div className="text-slate-500 text-[10px] font-bold text-center py-2 uppercase">T</div>
              <div className="text-slate-500 text-[10px] font-bold text-center py-2 uppercase">F</div>
              <div className="text-slate-500 text-[10px] font-bold text-center py-2 uppercase">S</div>
              
              {days.map((date, i) => {
                const day = date.getDate();
                const isSunday = date.getDay() === 0;
                return (
                  <button
                    key={i}
                    disabled={isSunday}
                    onClick={() => setSelectedDay(day)}
                    className={`h-10 flex items-center justify-center rounded-lg text-sm transition-all ${
                      isSunday
                        ? 'text-slate-600 cursor-not-allowed opacity-50'
                        : selectedDay === day
                        ? 'bg-primary text-white font-bold shadow-[0_0_20px_rgba(37,99,235,0.3)]'
                        : 'text-slate-600 dark:text-slate-300 hover:bg-black/5 dark:hover:bg-white/5'
                    }`}
                  >
                    {day}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Time Slots */}
        <section className="px-4 mt-8">
          <h3 className="text-slate-900 dark:text-slate-100 text-lg font-bold mb-4">Available Time</h3>
          <div className="grid grid-cols-3 gap-3">
            {times.map(time => (
              <button
                key={time}
                onClick={() => setSelectedTime(time)}
                className={`py-3 rounded-lg text-sm transition-all ${
                  selectedTime === time
                    ? 'bg-primary/20 border border-primary/50 text-primary font-bold'
                    : 'glass-effect text-slate-600 dark:text-slate-300 border-black/5 dark:border-white/5 hover:border-primary/50'
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        </section>

        {/* Patient Details Form */}
        <section className="px-4 mt-8">
          <h3 className="text-slate-900 dark:text-slate-100 text-lg font-bold mb-4">Patient Information</h3>
          <div className="glass-effect rounded-xl p-5 space-y-4">
            <div className="space-y-1">
              <label className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Full Name *</label>
              <input 
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-lg px-4 py-3 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none focus:border-primary/50 transition-all" 
                placeholder="John Doe" 
                type="text" 
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Phone Number *</label>
                <input 
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-lg px-4 py-3 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none focus:border-primary/50 transition-all" 
                  placeholder="+91 00000-00000" 
                  type="tel" 
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Place / City *</label>
                <input 
                  value={place}
                  onChange={(e) => setPlace(e.target.value)}
                  className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-lg px-4 py-3 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none focus:border-primary/50 transition-all" 
                  placeholder="Mumbai, India" 
                  type="text" 
                />
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Notes (Optional)</label>
              <textarea 
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-lg px-4 py-3 text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none focus:border-primary/50 transition-all" 
                placeholder="Any specific concerns..." 
                rows={3}
              ></textarea>
            </div>
          </div>
        </section>

        {/* Booking Summary */}
        <section className="px-4 mt-8 mb-8">
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 flex items-start gap-4">
            <div className="size-12 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-primary">verified_user</span>
            </div>
            <div>
              <h4 className="text-primary font-bold text-sm">Secure Booking</h4>
              <p className="text-slate-400 text-xs mt-1">Your data is encrypted. We'll send a confirmation SMS immediately after booking.</p>
            </div>
          </div>
        </section>

        {/* Action Button */}
        <div className="px-4 mb-12">
          <button 
            disabled={!isFormValid}
            onClick={handleBook}
            className={`font-bold px-8 py-4 rounded-xl transition-all flex items-center gap-2 w-full justify-center ${
              isFormValid 
                ? 'bg-primary text-white shadow-[0_4px_20px_rgba(37,99,235,0.4)] hover:scale-[1.02] active:scale-[0.98] cursor-pointer' 
                : 'bg-slate-200 dark:bg-slate-700 text-slate-400 cursor-not-allowed opacity-70'
            }`}
          >
            Book Appointment
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </main>
    </div>
  );
}
