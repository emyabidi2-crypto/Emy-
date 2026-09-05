import React, { useState } from 'react';
import { X, ShieldCheck, User as UserIcon, Lock, Mail, KeyRound } from 'lucide-react';
import { User } from '../types';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (email: string, roleHint?: 'admin' | 'customer') => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, onLogin }) => {
  const [isLoginTab, setIsLoginTab] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    const roleHint = email.includes('admin') ? 'admin' : 'customer';
    onLogin(email, roleHint);
    onClose();
  };

  const handleQuickDemo = (role: 'admin' | 'customer') => {
    if (role === 'admin') {
      setEmail('admin@kataban.com');
      onLogin('admin@kataban.com', 'admin');
    } else {
      setEmail('user@kataban.com');
      onLogin('user@kataban.com', 'customer');
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-[#FAF6F0] border border-[#D4AF37]/40 rounded-2xl shadow-2xl w-full max-w-md overflow-hidden relative">
        
        {/* Header */}
        <div className="bg-gradient-to-r from-[#1C1C1C] to-[#2C2C2C] text-[#FAF6F0] p-6 text-center relative">
          <button
            onClick={onClose}
            className="absolute top-4 left-4 text-[#FAF6F0]/70 hover:text-white transition-colors"
            aria-label="إغلاق"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="w-12 h-12 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37] flex items-center justify-center mx-auto mb-3 text-[#D4AF37]">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h3 className="font-amiri text-2xl font-bold tracking-wide">بوابة الدخول الملكية</h3>
          <p className="text-xs text-[#FAF6F0]/70 mt-1">قتبان وذي ريدان | Kataban & Dhu Raydan</p>
        </div>

        {/* Quick Demo Accounts Bar */}
        <div className="bg-[#EFECE6] p-3 border-b border-[#D4AF37]/20 text-center">
          <p className="text-xs text-[#8B5A2B] font-semibold mb-2">تسجيل دخول سريع للاختبار:</p>
          <div className="flex gap-2 justify-center">
            <button
              type="button"
              onClick={() => handleQuickDemo('admin')}
              className="bg-[#1C1C1C] text-[#FAF6F0] hover:bg-[#D4AF37] hover:text-[#1C1C1C] text-xs px-3 py-1.5 rounded-lg font-bold transition-all shadow-sm"
            >
              👑 حساب المدير (Admin)
            </button>
            <button
              type="button"
              onClick={() => handleQuickDemo('customer')}
              className="bg-white text-[#1C1C1C] border border-[#D4AF37]/40 hover:bg-[#D4AF37]/10 text-xs px-3 py-1.5 rounded-lg font-bold transition-all shadow-sm"
            >
              👤 حساب العميل (Customer)
            </button>
          </div>
        </div>

        {/* Form Body */}
        <div className="p-6">
          <div className="flex border-b border-[#D4AF37]/30 mb-6">
            <button
              type="button"
              onClick={() => setIsLoginTab(true)}
              className={`flex-1 pb-3 text-sm font-bold border-b-2 transition-all ${
                isLoginTab ? 'border-[#D4AF37] text-[#1C1C1C]' : 'border-transparent text-gray-500'
              }`}
            >
              تسجيل الدخول
            </button>
            <button
              type="button"
              onClick={() => setIsLoginTab(false)}
              className={`flex-1 pb-3 text-sm font-bold border-b-2 transition-all ${
                !isLoginTab ? 'border-[#D4AF37] text-[#1C1C1C]' : 'border-transparent text-gray-500'
              }`}
            >
              حساب جديد
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLoginTab && (
              <div>
                <label className="block text-xs font-bold text-[#1C1C1C] mb-1">الاسم الكامل</label>
                <div className="relative">
                  <UserIcon className="absolute right-3 top-3 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    required={!isLoginTab}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="الشيخ / السيد..."
                    className="w-full pr-10 pl-3 py-2.5 bg-white border border-[#D4AF37]/30 rounded-xl text-sm focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-xs font-bold text-[#1C1C1C] mb-1">البريد الإلكتروني</label>
              <div className="relative">
                <Mail className="absolute right-3 top-3 w-4 h-4 text-gray-400" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full pr-10 pl-3 py-2.5 bg-white border border-[#D4AF37]/30 rounded-xl text-sm focus:outline-none focus:border-[#D4AF37]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#1C1C1C] mb-1">كلمة المرور</label>
              <div className="relative">
                <KeyRound className="absolute right-3 top-3 w-4 h-4 text-gray-400" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pr-10 pl-3 py-2.5 bg-white border border-[#D4AF37]/30 rounded-xl text-sm focus:outline-none focus:border-[#D4AF37]"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#D4AF37] to-[#C5A059] text-[#1C1C1C] font-bold py-3 rounded-xl shadow-md hover:opacity-95 transition-all text-sm mt-2"
            >
              {isLoginTab ? 'الدخول إلى النظام' : 'إنشاء حساب ملكي جديد'}
            </button>
          </form>
        </div>

        {/* Footer info */}
        <div className="bg-[#EFECE6] px-6 py-3 text-center text-[11px] text-[#8B5A2B] border-t border-[#D4AF37]/20">
          محمي بتشفير عالي الأمان ومعايير الخصوصية الملكية
        </div>

      </div>
    </div>
  );
};
