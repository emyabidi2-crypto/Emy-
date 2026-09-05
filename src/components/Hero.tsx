import React from 'react';
import { Crown, Sparkles, ShieldCheck, Award, ArrowLeft } from 'lucide-react';

interface HeroProps {
  onExplore: () => void;
  onTrust: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExplore, onTrust }) => {
  return (
    <section id="hero" className="relative overflow-hidden bg-[#FAF6F0] py-16 sm:py-24 border-b border-[#D4AF37]/20">
      
      {/* Decorative Royal Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:24px_24px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-6 text-right">
            
            <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#8B5A2B]">
              <Crown className="w-4 h-4 text-[#D4AF37]" />
              <span>قتبان وذي ريدان | إرث الحضارة.. وفخامة الطبيعة</span>
            </div>

            <h1 className="font-amiri text-3xl sm:text-5xl lg:text-6xl font-bold text-[#1C1C1C] leading-[1.2]">
              من عروش الممالك العريقة.. <br />
              <span className="gold-shimmer font-bold">نسوق إليك كنز الأرض اليمنية</span>
            </h1>

            <p className="text-base sm:text-lg text-[#1C1C1C]/80 leading-relaxed font-normal max-w-2xl">
              في الأزمنة الغابرة، حيث كانت قوافل اللبان والبخور تعبر طريق التجارة العالمي، وتزن الممالك اليمنية القديمة ذهبها بكنوز أرضها المعطاءة، صُنع مفهوم الفخامة الأصيلة. نقدم لك عسل السدر الملكي النادر، وعقيق الملوك الخام، وأفخر أنواع البخور واللبان الحوجري.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={onExplore}
                className="bg-[#D4AF37] hover:bg-[#C5A059] text-white px-7 py-3.5 rounded-xl font-bold text-sm shadow-lg shadow-[#D4AF37]/20 transition-all flex items-center gap-2 hover:-translate-y-0.5"
              >
                <span>استكشف كنوز الممالك</span>
                <ArrowLeft className="w-4 h-4" />
              </button>

              <button
                onClick={onTrust}
                className="bg-white hover:bg-[#EFECE6] text-[#1C1C1C] border border-[#D4AF37]/40 px-7 py-3.5 rounded-xl font-bold text-sm transition-all flex items-center gap-2"
              >
                <ShieldCheck className="w-4 h-4 text-[#8B5A2B]" />
                <span>تصفح شهادات الجودة والأصالة</span>
              </button>
            </div>

            {/* Key Trust Stats Bar */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-[#D4AF37]/20 max-w-lg">
              <div>
                <p className="font-amiri text-2xl font-bold text-[#8B5A2B]">100%</p>
                <p className="text-xs text-[#1C1C1C]/70">نقاء مخبري معتمد</p>
              </div>
              <div>
                <p className="font-amiri text-2xl font-bold text-[#8B5A2B]">أصلي</p>
                <p className="text-xs text-[#1C1C1C]/70">من مناجم وجبال اليمن</p>
              </div>
              <div>
                <p className="font-amiri text-2xl font-bold text-[#8B5A2B]">ملوكي</p>
                <p className="text-xs text-[#1C1C1C]/70">تغليف وضمان فاخر</p>
              </div>
            </div>

          </div>

          {/* Visual Showcase Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative Frame */}
              <div className="absolute -inset-2 bg-gradient-to-r from-[#D4AF37] to-[#8B5A2B] rounded-2xl opacity-30 blur-lg"></div>
              
              <div className="relative bg-white p-4 sm:p-6 rounded-2xl border border-[#D4AF37]/30 shadow-xl space-y-4">
                <div className="relative h-72 sm:h-80 rounded-xl overflow-hidden shadow-inner">
                  <img
                    src="https://images.unsplash.com/photo-1587049352847-4a222e784d38?auto=format&fit=crop&w=800&q=80"
                    alt="عسل السدر الملكي الحضرمي"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 right-3 bg-[#1C1C1C]/80 backdrop-blur-md text-[#D4AF37] px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 border border-[#D4AF37]/30">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>المنتج الملكي الأكثر طلباً</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-semibold text-[#8B5A2B] bg-[#8B5A2B]/10 px-2.5 py-1 rounded-md">
                      حضرموت - وادي دوان
                    </span>
                    <span className="text-xs text-[#1C1C1C]/60 flex items-center gap-1">
                      <Award className="w-3.5 h-3.5 text-[#D4AF37]" /> شهادة معملية معتمدة
                    </span>
                  </div>
                  <h3 className="font-amiri text-xl font-bold text-[#1C1C1C]">
                    عسل السدر الملكي الحضرمي الفاخر
                  </h3>
                  <p className="text-xs text-[#1C1C1C]/70 line-clamp-2">
                    مستخلص حصرياً من أزهار السدر البري في وديان حضرموت العريقة، بكثافة ملكية وخصائص علاجية فريدة.
                  </p>
                </div>

                <div className="pt-2 border-t border-gray-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-gray-500 block">السعر الأساسي</span>
                    <span className="font-amiri text-xl font-bold text-[#8B5A2B]">$280 USD</span>
                  </div>
                  <button
                    onClick={onExplore}
                    className="bg-[#1C1C1C] hover:bg-[#8B5A2B] text-white px-4 py-2 rounded-xl text-xs font-bold transition-colors"
                  >
                    عرض التفاصيل والمعاينة
                  </button>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
