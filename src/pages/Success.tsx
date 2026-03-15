import { Link, useNavigate, useLocation } from 'react-router-dom';

export default function Success() {
  const navigate = useNavigate();
  const location = useLocation();
  const { date = 'Oct 5, 2023', time = '10:30 AM', fullName = 'John Doe', phoneNumber = '', place = '' } = location.state || {};

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen flex flex-col">
      <div className="flex-1 flex items-center justify-center p-4 pb-12">
        <div className="relative flex max-w-md w-full flex-col bg-background-light dark:bg-background-dark overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 shadow-2xl">
          {/* Header */}
        <div className="flex items-center bg-transparent p-4 pb-2 justify-between rounded-t-xl">
          <button onClick={() => navigate('/')} className="text-slate-900 dark:text-slate-100 flex size-12 shrink-0 items-center justify-start cursor-pointer">
            <span className="material-symbols-outlined">close</span>
          </button>
          <h2 className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12">Confirmation</h2>
        </div>

        <div className="flex flex-col items-center px-6 py-8">
          {/* Animated Success Icon Container */}
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl animate-pulse"></div>
            <div className="relative w-24 h-24 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center liquid-glass">
              <span className="material-symbols-outlined text-primary text-5xl success-glow">check_circle</span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-slate-900 dark:text-slate-100 tracking-tight text-[32px] font-bold leading-tight text-center pb-2">Booking Confirmed</h1>
          <p className="text-slate-600 dark:text-slate-400 text-base font-normal leading-relaxed text-center px-4">
            Your appointment at <span className="text-primary font-semibold">Lumina Dental Studio</span> has been successfully scheduled.
          </p>
        </div>

        {/* Details Card */}
        <div className="px-6 pb-6">
          <div className="liquid-glass rounded-xl p-6 space-y-4 border border-primary/20 bg-primary/5">
            <div className="flex justify-between items-center gap-x-6 border-b border-white/5 pb-3">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-xl">person</span>
                <p className="text-slate-600 dark:text-slate-400 text-sm font-medium">Patient</p>
              </div>
              <p className="text-slate-900 dark:text-slate-100 text-sm font-bold">{fullName}</p>
            </div>
            <div className="flex justify-between items-center gap-x-6 border-b border-white/5 pb-3">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-xl">call</span>
                <p className="text-slate-600 dark:text-slate-400 text-sm font-medium">Phone</p>
              </div>
              <p className="text-slate-900 dark:text-slate-100 text-sm font-bold">{phoneNumber}</p>
            </div>
            <div className="flex justify-between items-center gap-x-6 border-b border-white/5 pb-3">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-xl">home_pin</span>
                <p className="text-slate-600 dark:text-slate-400 text-sm font-medium">Place</p>
              </div>
              <p className="text-slate-900 dark:text-slate-100 text-sm font-bold">{place}</p>
            </div>
            <div className="flex justify-between items-center gap-x-6 border-b border-white/5 pb-3">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-xl">calendar_today</span>
                <p className="text-slate-600 dark:text-slate-400 text-sm font-medium">Date</p>
              </div>
              <p className="text-slate-900 dark:text-slate-100 text-sm font-bold">{date}</p>
            </div>
            <div className="flex justify-between items-center gap-x-6 border-b border-white/5 pb-3">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-xl">schedule</span>
                <p className="text-slate-600 dark:text-slate-400 text-sm font-medium">Time</p>
              </div>
              <p className="text-slate-900 dark:text-slate-100 text-sm font-bold">{time}</p>
            </div>
            <div className="flex justify-between items-center gap-x-6">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-xl">medical_services</span>
                <p className="text-slate-600 dark:text-slate-400 text-sm font-medium">Specialist</p>
              </div>
              <p className="text-slate-900 dark:text-slate-100 text-sm font-bold text-right">Dr. Sarah Mitchell</p>
            </div>
          </div>
        </div>

        {/* Notification Prompt */}
        <div className="px-6 py-4 flex items-start gap-3 bg-primary/5 mx-6 rounded-lg mb-6">
          <span className="material-symbols-outlined text-primary mt-0.5">info</span>
          <p className="text-slate-500 dark:text-slate-400 text-xs leading-normal">
            A confirmation email and SMS with arrival instructions have been sent to your registered contact details.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="p-6 pt-0 mt-auto flex flex-col gap-3">
          <button className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-green-500/20 flex items-center justify-center gap-2">
            <span className="material-symbols-outlined">chat</span>
            Whatsapp
          </button>
          <Link to="/" className="w-full bg-transparent hover:bg-primary/10 text-slate-900 dark:text-slate-100 border border-slate-300 dark:border-slate-700 font-semibold py-4 rounded-xl transition-all text-center">
            Back to Home
          </Link>
        </div>
          <div className="h-2 w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent"></div>
        </div>
      </div>
    </div>
  );
}
