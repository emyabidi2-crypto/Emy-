import React from 'react';
import { Crown, ShieldCheck, Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { Logo } from './Logo';

interface FooterProps {
  onNavigateSection: (sectionId: string) => void;
  openWhatsApp: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateSection, openWhatsApp }) => {
  return (
    <footer className="bg-[#1C1C1C] text-[#FAF6F0] pt-16 pb-12 border-t border-[#D4AF37]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1C1C1C] to-[#141414] border border-[#D4AF37]/60 flex items-center justify-center text-[#D4AF37] font-amiri text-xl font-bold">
                ق
              </div>
              <div>
                <span className="font-amiri text-xl font-bold tracking-wide text-white">قتبان وذي ريدان</span>
                <span className="block text-[10px] tracking-widest text-[#D4AF37] uppercase">Kataban & Dhu Raydan</span>
              </div>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              متجر إلكتروني فاخر متخصص في بيع المنتجات اليمنية الأصيلة والنادرة ذات الجودة الملكية، من العسل الحر إلى العقيق والبخور الفاخر.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-amiri text-lg font-bold text-[#D4AF37]">روابط سريعة</h4>
            <ul className="space-y-2 text-xs text-gray-300">
              <li>
                <button onClick={() => onNavigateSection('products')} className="hover:text-[#D4AF37] transition-colors">
                  الكنوز الملكية
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('bundles')} className="hover:text-[#D4AF37] transition-colors">
                  مجموعات الهدايا الملكية
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('story')} className="hover:text-[#D4AF37] transition-colors">
                  قصة الممالك والنشأة
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('trust')} className="hover:text-[#D4AF37] transition-colors">
                  شهادات الفحص المخبري
                </button>
              </li>
              <li>
                <button onClick={() => onNavigateSection('blog')} className="hover:text-[#D4AF37] transition-colors">
                  مدونة التراث (Resource Hub)
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div className="space-y-3">
            <h4 className="font-amiri text-lg font-bold text-[#D4AF37]">خدمة كبار الشخصيات</h4>
            <ul className="space-y-2 text-xs text-gray-300">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D4AF37]" />
                <span dir="ltr">+967 770 805 627</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#D4AF37]" />
                <span>emyabidi2@gmail.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#D4AF37]" />
                <span>اليمن، صنعاء، شارع تعز</span>
              </li>
            </ul>
            <button
              onClick={openWhatsApp}
              className="mt-2 inline-flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-xl text-xs font-bold hover:bg-[#20ba59] transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>تواصل فوري عبر الواتساب</span>
            </button>
          </div>

          {/* Newsletter */}
          <div className="space-y-3">
            <h4 className="font-amiri text-lg font-bold text-[#D4AF37]">النشرة الملكية</h4>
            <p className="text-xs text-gray-400">اشترك ليصلك حصرياً إصدارات النوادر ومزادات العقيق والعسل الملكي.</p>
            <div className="space-y-2">
              <input
                type="email"
                placeholder="البريد الإلكتروني..."
                className="w-full bg-white/10 border border-[#D4AF37]/30 rounded-xl px-3 py-2 text-xs text-white placeholder-gray-400 focus:outline-none focus:border-[#D4AF37]"
              />
              <button
                onClick={() => alert('تم اشتراكك في النشرة الملكية بنجاح.')}
                className="w-full bg-[#D4AF37] hover:bg-[#C5A059] text-white py-2 rounded-xl text-xs font-bold transition-colors"
              >
                اشتراك
              </button>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-xs text-gray-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 قتبان وذي ريدان | Kataban & Dhu Raydan. جميع الحقوق محفوظة.</p>
          <div className="flex items-center gap-2 text-[#D4AF37]">
            <ShieldCheck className="w-4 h-4" />
            <span>معتمد وموثق وفق أعلى معايير الجودة العالمية</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
