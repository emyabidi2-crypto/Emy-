import React from 'react';
import { ShoppingBag, Crown, Globe, MessageCircle, BookOpen, Compass, ShieldCheck, User as UserIcon, LogOut } from 'lucide-react';
import { Currency, CurrencyRate, User } from '../types';
import { CURRENCY_RATES } from '../data/mockData';
import { Logo } from './Logo';

interface HeaderProps {
  activeView: 'storefront' | 'blueprint';
  setActiveView: (view: 'storefront' | 'blueprint') => void;
  currency: Currency;
  setCurrency: (c: Currency) => void;
  cartCount: number;
  openCart: () => void;
  openWhatsApp: () => void;
  onNavigateSection: (sectionId: string) => void;
  currentUser: User | null;
  onOpenAuth: () => void;
  onLogout: () => void;
  onOpenAdmin: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeView,
  setActiveView,
  currency,
  setCurrency,
  cartCount,
  openCart,
  openWhatsApp,
  onNavigateSection,
  currentUser,
  onOpenAuth,
  onLogout,
  onOpenAdmin,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[#FAF6F0]/95 backdrop-blur-md border-b border-[#D4AF37]/30 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand */}
          <div className="cursor-pointer" onClick={() => { setActiveView('storefront'); onNavigateSection('hero'); }}>
            <Logo size="md" />
          </div>

          {/* Navigation Links (Storefront) */}
          {activeView === 'storefront' && (
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#1C1C1C]">
              <button onClick={() => onNavigateSection('products')} className="hover:text-[#D4AF37] transition-colors">
                الكنوز الملكية
              </button>
              <button onClick={() => onNavigateSection('bundles')} className="hover:text-[#D4AF37] transition-colors">
                مجموعات الهدايا
              </button>
              <button onClick={() => onNavigateSection('story')} className="hover:text-[#D4AF37] transition-colors">
                قصة الممالك
              </button>
              <button onClick={() => onNavigateSection('trust')} className="hover:text-[#D4AF37] transition-colors">
                شهادات الفحص
              </button>
              <button onClick={() => onNavigateSection('blog')} className="hover:text-[#D4AF37] transition-colors">
                مدونة التراث
              </button>
            </nav>
          )}

          {/* Actions & View Switcher */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* View Mode Toggle (Storefront vs Strategy Blueprint) */}
            <div className="hidden lg:flex bg-[#EFECE6] p-1 rounded-xl items-center border border-[#D4AF37]/20">
              <button
                onClick={() => setActiveView('storefront')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                  activeView === 'storefront'
                    ? 'bg-[#1C1C1C] text-[#FAF6F0] shadow-sm'
                    : 'text-[#1C1C1C] hover:text-[#D4AF37]'
                }`}
              >
                <Compass className="w-3.5 h-3.5" />
                <span>المتجر الرقمي</span>
              </button>
              <button
                onClick={() => setActiveView('blueprint')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                  activeView === 'blueprint'
                    ? 'bg-[#D4AF37] text-white shadow-sm'
                    : 'text-[#1C1C1C] hover:text-[#D4AF37]'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>الخطة الإستراتيجية</span>
              </button>
            </div>

            {/* Currency Selector */}
            <div className="hidden xl:flex items-center gap-1 bg-white border border-[#D4AF37]/30 rounded-lg px-2.5 py-1 text-xs">
              <Globe className="w-3.5 h-3.5 text-[#8B5A2B]" />
              <select
                value={currency}
                onChange={(e) => setCurrency(e.target.value as Currency)}
                aria-label="العملة"
                className="bg-transparent font-medium text-[#1C1C1C] focus:outline-none cursor-pointer"
              >
                {Object.values(CURRENCY_RATES).map((c) => (
                  <option key={c.code} value={c.code}>
                    {c.code} ({c.symbol})
                  </option>
                ))}
              </select>
            </div>

            {/* Admin Dashboard Button (if Admin) */}
            {currentUser && currentUser.role === 'admin' && (
              <button
                onClick={onOpenAdmin}
                className="flex items-center gap-1.5 bg-[#D4AF37] text-[#1C1C1C] hover:bg-[#c5a059] px-3 py-2 rounded-xl text-xs font-bold transition-all shadow-sm"
                title="لوحة التحكم الإدارية"
              >
                <ShieldCheck className="w-4 h-4" />
                <span className="hidden sm:inline">لوحة الإدارة</span>
              </button>
            )}

            {/* User Auth Profile / Button */}
            {currentUser ? (
              <div className="flex items-center gap-2 bg-white border border-[#D4AF37]/30 px-3 py-1.5 rounded-xl">
                <span className="w-6 h-6 rounded-full bg-[#D4AF37]/20 text-[#8B5A2B] flex items-center justify-center font-bold text-xs">
                  {currentUser.name.charAt(0)}
                </span>
                <span className="text-xs font-bold text-[#1C1C1C] hidden md:inline">{currentUser.name}</span>
                <button
                  onClick={onLogout}
                  className="text-gray-400 hover:text-red-600 transition-colors ml-1"
                  title="تسجيل الخروج"
                >
                  <LogOut className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              <button
                onClick={onOpenAuth}
                className="flex items-center gap-1 bg-[#1C1C1C] text-[#FAF6F0] hover:bg-[#8B5A2B] px-3.5 py-2 rounded-xl text-xs font-bold transition-colors shadow-sm"
              >
                <UserIcon className="w-3.5 h-3.5" />
                <span>دخول / تسجيل</span>
              </button>
            )}

            {/* WhatsApp Direct Concierge */}
            <button
              onClick={openWhatsApp}
              title="تواصل مباشر عبر الواتساب"
              className="hidden sm:flex items-center gap-1.5 bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366]/20 border border-[#25D366]/30 px-3 py-2 rounded-xl text-xs font-bold transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="hidden xl:inline">كونسيرج الواتساب</span>
            </button>

            {/* Cart Button */}
            <button
              onClick={openCart}
              className="relative p-2.5 rounded-xl bg-[#1C1C1C] text-[#FAF6F0] hover:bg-[#8B5A2B] transition-colors shadow-sm flex items-center justify-center"
              aria-label="سلة المشتريات"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-[#D4AF37] text-white font-bold text-[10px] rounded-full flex items-center justify-center shadow-md animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>

          </div>

        </div>
      </div>
    </header>
  );
};
