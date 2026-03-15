import { useLocation, useNavigate } from 'react-router-dom';

export default function ConfirmBooking() {
  const navigate = useNavigate();
  const location = useLocation();
  const { date = 'Oct 5, 2023', time = '10:30 AM', fullName = 'John Doe', phoneNumber = '', place = '', notes = '' } = location.state || {};

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen flex flex-col">
      <div className="flex-1 flex items-center justify-center p-4 pb-12">
        <div className="relative flex max-w-md w-full flex-col bg-background-light dark:bg-background-dark overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 shadow-2xl">
          {/* Header */}
        <div className="flex items-center bg-transparent p-4 pb-2 justify-between rounded-t-xl">
          <button onClick={() => navigate(-1)} className="text-slate-900 dark:text-slate-100 flex size-12 shrink-0 items-center justify-start cursor-pointer">
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <h2 className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12">Book Appointment</h2>
        </div>

        <div className="flex flex-col items-center px-6 py-8">
          <div className="relative mb-6">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl"></div>
            <div className="relative w-20 h-20 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center liquid-glass">
              <span className="material-symbols-outlined text-primary text-4xl">calendar_month</span>
            </div>
          </div>
          <h1 className="text-slate-900 dark:text-slate-100 tracking-tight text-[28px] font-bold leading-tight text-center pb-2">Almost There!</h1>
          <p className="text-slate-600 dark:text-slate-400 text-sm font-normal leading-relaxed text-center px-4">
            Please review your appointment details before confirming.
          </p>
        </div>

        {/* Details Card */}
        <div className="px-6 pb-6">
          <div className="liquid-glass rounded-xl p-6 space-y-4 border border-primary/20 bg-primary/5">
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
            <div className="flex justify-between items-center gap-x-6 border-b border-white/5 pb-3">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-xl">person</span>
                <p className="text-slate-600 dark:text-slate-400 text-sm font-medium">Patient</p>
              </div>
              <p className="text-slate-900 dark:text-slate-100 text-sm font-bold text-right">{fullName}</p>
            </div>
            <div className="flex justify-between items-center gap-x-6 border-b border-white/5 pb-3">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-xl">call</span>
                <p className="text-slate-600 dark:text-slate-400 text-sm font-medium">Phone</p>
              </div>
              <p className="text-slate-900 dark:text-slate-100 text-sm font-bold text-right">{phoneNumber}</p>
            </div>
            <div className="flex justify-between items-center gap-x-6 border-b border-white/5 pb-3">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-xl">home_pin</span>
                <p className="text-slate-600 dark:text-slate-400 text-sm font-medium">Place</p>
              </div>
              <p className="text-slate-900 dark:text-slate-100 text-sm font-bold text-right">{place}</p>
            </div>
            <div className="flex justify-between items-center gap-x-6">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-xl">location_on</span>
                <p className="text-slate-600 dark:text-slate-400 text-sm font-medium">Location</p>
              </div>
              <div className="text-right">
                <p className="text-slate-900 dark:text-slate-100 text-sm font-bold">Lumina Dental Studio</p>
                <p className="text-slate-500 text-xs">Downtown Medical Plaza</p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="p-6 pt-0 mt-auto flex flex-col gap-3">
          <button onClick={() => navigate('/success', { state: { date, time, fullName, phoneNumber, place, notes } })} className="w-full bg-primary hover:bg-primary/90 text-background-dark font-bold py-4 rounded-xl transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2">
            <span className="material-symbols-outlined">check_circle</span>
            Confirm Appointment
          </button>
        </div>
        </div>
      </div>
    </div>
  );
}
