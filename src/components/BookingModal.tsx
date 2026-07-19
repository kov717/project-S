import { useState } from 'react';
import { X, CheckCircle, User, Mail, Phone, Calendar, MessageSquare } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import type { Tour } from '../data/tours';

type Props = {
  tour: Tour;
  guests: number;
  accommodation: string;
  guideService: string;
  mealPlan: string;
  onClose: () => void;
};

export default function BookingModal({ tour, guests, accommodation, guideService, mealPlan, onClose }: Props) {
  const { language, t } = useLanguage();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [dates, setDates] = useState('');
  const [notes, setNotes] = useState('');
  const [sent, setSent] = useState(false);

  const formatWhatsAppMessage = () => {
    return `🏔️ *Новая заявка — Nomad Trails*

━━━━━━━━━━━━━━━━━

📋 *Тур:* ${tour.name[language]}
📍 *Локация:* ${tour.location[language]}
📅 *Длительность:* ${tour.days} дн.
⭐ *Рейтинг:* ${tour.rating}

━━━━━━━━━━━━━━━━━

👤 *Клиент:*
• Имя: ${name}
• Email: ${email}
• Телефон: ${phone}
• Даты: ${dates || 'Не указаны'}
• Пожелания: ${notes || 'Нет'}

━━━━━━━━━━━━━━━━━

⚙️ *Параметры:*
• Гости: ${guests}
• Проживание: ${accommodation}
• Гид: ${guideService}
• Питание: ${mealPlan}

━━━━━━━━━━━━━━━━━

🕐 *Отправлено:* ${new Date().toLocaleString()}`;
  };

  const handleSendWhatsApp = () => {
    const message = formatWhatsAppMessage();
    const encoded = encodeURIComponent(message);
    // Замените номер на свой:
    window.open(`https://wa.me/77271234567?text=${encoded}`, '_blank');
    setSent(true);
  };

  if (sent) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
        <div className="bg-slate-800 rounded-2xl border border-white/10 p-6 sm:p-8 max-w-md w-full text-center">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
            <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-emerald-400" />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">{t('bookingSuccess')}</h3>
          <p className="text-gray-400 text-sm sm:text-base mb-4 sm:mb-6">{t('bookingSuccessMsg')}</p>
          <button
            onClick={onClose}
            className="px-6 sm:px-8 py-2.5 sm:py-3 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold rounded-xl transition-all duration-300 text-sm sm:text-base"
          >
            {t('bookingClose')}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-sm">
      <div className="bg-slate-800 rounded-2xl border border-white/10 max-w-2xl w-full max-h-[95vh] overflow-y-auto">
        {/* Header */}
        <div className="relative h-32 sm:h-40 overflow-hidden rounded-t-2xl">
          <img
            src={tour.image}
            alt={tour.name[language]}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-800 via-slate-800/60 to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2 bg-black/40 hover:bg-black/60 rounded-full text-white transition-colors"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
          <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
            <h3 className="text-base sm:text-xl font-bold text-white">{tour.name[language]}</h3>
            <p className="text-xs sm:text-sm text-gray-300 mt-0.5">
              {tour.location[language]} · {tour.days} {t('tourDays')} · {guests} guests
            </p>
          </div>
        </div>

        {/* Config summary */}
        <div className="mx-4 sm:mx-6 lg:mx-8 mt-4">
          <div className="grid grid-cols-2 gap-2">
            <div className="px-3 py-2 bg-white/5 rounded-lg border border-white/5">
              <span className="block text-[10px] sm:text-xs text-gray-500">{t('calcGuests')}</span>
              <span className="text-xs sm:text-sm text-white font-medium">{guests}</span>
            </div>
            <div className="px-3 py-2 bg-white/5 rounded-lg border border-white/5">
              <span className="block text-[10px] sm:text-xs text-gray-500">{t('calcAccommodation')}</span>
              <span className="text-xs sm:text-sm text-white font-medium">{accommodation}</span>
            </div>
            <div className="px-3 py-2 bg-white/5 rounded-lg border border-white/5">
              <span className="block text-[10px] sm:text-xs text-gray-500">{t('calcGuide')}</span>
              <span className="text-xs sm:text-sm text-white font-medium">{guideService}</span>
            </div>
            <div className="px-3 py-2 bg-white/5 rounded-lg border border-white/5">
              <span className="block text-[10px] sm:text-xs text-gray-500">{t('calcMeals')}</span>
              <span className="text-xs sm:text-sm text-white font-medium">{mealPlan}</span>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="px-4 sm:px-6 lg:px-8 pb-4 sm:pb-6 lg:pb-8">
          <h4 className="text-base sm:text-lg font-bold text-white mb-1">{t('bookingTitle')}</h4>
          <p className="text-gray-400 text-xs sm:text-sm mb-4 sm:mb-6">{t('bookingSubtitle')}</p>

          <div className="space-y-4 sm:space-y-5">
            {/* Name */}
            <div>
              <label className="flex items-center gap-2 text-xs sm:text-sm font-medium text-gray-300 mb-1.5 sm:mb-2">
                <User className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400" />
                {t('bookingName')} *
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={t('bookingNamePlaceholder')}
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder-gray-500 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 transition-colors"
              />
            </div>

            {/* Email & Phone */}
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
              <div>
                <label className="flex items-center gap-2 text-xs sm:text-sm font-medium text-gray-300 mb-1.5 sm:mb-2">
                  <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400" />
                  {t('bookingEmail')} *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t('bookingEmailPlaceholder')}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder-gray-500 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 transition-colors"
                />
              </div>
              <div>
                <label className="flex items-center gap-2 text-xs sm:text-sm font-medium text-gray-300 mb-1.5 sm:mb-2">
                  <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400" />
                  {t('bookingPhone')} *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder={t('bookingPhonePlaceholder')}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder-gray-500 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 transition-colors"
                />
              </div>
            </div>

            {/* Dates */}
            <div>
              <label className="flex items-center gap-2 text-xs sm:text-sm font-medium text-gray-300 mb-1.5 sm:mb-2">
                <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400" />
                {t('bookingDates')}
              </label>
              <input
                type="text"
                value={dates}
                onChange={(e) => setDates(e.target.value)}
                placeholder={t('bookingDatesPlaceholder')}
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder-gray-500 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 transition-colors"
              />
            </div>

            {/* Notes */}
            <div>
              <label className="flex items-center gap-2 text-xs sm:text-sm font-medium text-gray-300 mb-1.5 sm:mb-2">
                <MessageSquare className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400" />
                {t('bookingNotes')}
              </label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder={t('bookingNotesPlaceholder')}
                rows={2}
                className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm placeholder-gray-500 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 transition-colors resize-none"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-6 sm:mt-8">
            <button
              onClick={onClose}
              className="flex-1 px-5 sm:px-6 py-3 sm:py-3.5 border border-white/20 text-gray-300 font-semibold rounded-xl hover:bg-white/5 transition-colors text-sm"
            >
              {t('bookingCancel')}
            </button>
            <button
              onClick={handleSendWhatsApp}
              disabled={!name || !email || !phone}
              className="flex-1 flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.02] text-sm"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span>WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
