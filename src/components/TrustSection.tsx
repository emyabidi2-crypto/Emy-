import React from 'react';
import { ShieldCheck, Award, CheckCircle2, Star } from 'lucide-react';

export const TrustSection: React.FC = () => {
  return (
    <section id="trust" className="py-16 sm:py-24 bg-white border-y border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 bg-[#D4AF37]/10 border border-[#D4AF37]/30 px-3 py-1 rounded-full text-xs font-bold text-[#8B5A2B]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>الشفافية والتوثيق الملكي</span>
          </div>
          <h2 className="font-amiri text-3xl sm:text-4xl font-bold text-[#1C1C1C]">
            معايير فحص صارمة.. وثقة متوارثة
          </h2>
          <p className="text-sm sm:text-base text-[#1C1C1C]/70">
            الفخامة الحقيقية تبدأ من الثقة والمصداقية المطلقة. نخضع كل منتج لفحوصات مخبرية معتمدة لضمان وصوله إليك بنقائه الأصلي.
          </p>
        </div>

        {/* 3 Pillars of Trust */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-[#FAF6F0] p-8 rounded-3xl border border-[#D4AF37]/30 space-y-4 text-right shadow-sm">
            <div className="w-14 h-14 rounded-2xl bg-[#D4AF37] text-white flex items-center justify-center shadow-lg">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <h3 className="font-amiri text-xl font-bold text-[#1C1C1C]">فحص معملي 100%</h3>
            <p className="text-xs sm:text-sm text-[#1C1C1C]/70 leading-relaxed">
              كل قطرة عسل تخضع لاختبارات قياس نسبة الرطوبة والأنزيمات، وكل فص عقيق يرفق ببطاقة توثيق منجي دقيقة.
            </p>
          </div>

          <div className="bg-[#FAF6F0] p-8 rounded-3xl border border-[#D4AF37]/30 space-y-4 text-right shadow-sm">
            <div className="w-14 h-14 rounded-2xl bg-[#8B5A2B] text-white flex items-center justify-center shadow-lg">
              <Award className="w-7 h-7" />
            </div>
            <h3 className="font-amiri text-xl font-bold text-[#1C1C1C]">مصادر أصلية موثوقة</h3>
            <p className="text-xs sm:text-sm text-[#1C1C1C]/70 leading-relaxed">
              نتعاون مباشرة مع نخبة النحالين في حضرموت وشبوة، وحرفيي العقيق في مناجم ثلاء وعنس، دون أي وسطاء.
            </p>
          </div>

          <div className="bg-[#FAF6F0] p-8 rounded-3xl border border-[#D4AF37]/30 space-y-4 text-right shadow-sm">
            <div className="w-14 h-14 rounded-2xl bg-[#1C1C1C] text-[#D4AF37] flex items-center justify-center shadow-lg">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="font-amiri text-xl font-bold text-[#1C1C1C]">شحن ملكي مؤمن</h3>
            <p className="text-xs sm:text-sm text-[#1C1C1C]/70 leading-relaxed">
              تغليف ملوكي خاص يحمي المنتجات النادرة خلال رحلة نقلها السريعة عبر أفضل شركات الشحن الدولي.
            </p>
          </div>

        </div>

        {/* Customer Testimonials */}
        <div className="pt-8">
          <h3 className="font-amiri text-2xl font-bold text-center text-[#1C1C1C] mb-8">
            آراء عملائنا من كبار الشخصيات
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            <div className="bg-[#FAF6F0] p-6 rounded-2xl border border-[#D4AF37]/20 space-y-4 shadow-sm">
              <div className="flex items-center gap-1 text-[#D4AF37]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-[#1C1C1C]/80 italic">
                "طلبت عسل السدر الملكي الحضرمي وخاتم العقيق الكبدي. الجودة فاقت كل التوقعات، والتغليف ملكي بحق. شكراً لمتجر قتبان وذي ريدان على إحياء هذا الإرث العظيم."
              </p>
              <div className="flex items-center justify-between text-xs text-gray-500 pt-2 border-t border-gray-200">
                <span className="font-bold text-[#1C1C1C]">الشيخ طارق آل مكتوم</span>
                <span>دبي، الإمارات</span>
              </div>
            </div>

            <div className="bg-[#FAF6F0] p-6 rounded-2xl border border-[#D4AF37]/20 space-y-4 shadow-sm">
              <div className="flex items-center gap-1 text-[#D4AF37]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-xs sm:text-sm text-[#1C1C1C]/80 italic">
                "البخور العدني واللبان الحوجري يملآن المنزل بعبق تاريخي لا يُقدر بثمن. وصلت الشحنة خلال 3 أيام بتغليف استثنائي. أنصح الجميع بتجربة مجموعات الهدايا."
              </p>
              <div className="flex items-center justify-between text-xs text-gray-500 pt-2 border-t border-gray-200">
                <span className="font-bold text-[#1C1C1C]">د. أمل القحطاني</span>
                <span>الرياض، السعودية</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
