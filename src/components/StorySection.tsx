import React from 'react';
import { Crown, Sparkles, Compass, ShieldCheck } from 'lucide-react';

export const StorySection: React.FC = () => {
  return (
    <section id="story" className="py-16 sm:py-24 bg-[#FAF6F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 bg-[#D4AF37]/10 border border-[#D4AF37]/30 px-3 py-1 rounded-full text-xs font-bold text-[#8B5A2B]">
            <Crown className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>قصة الممالك والأصالة</span>
          </div>
          <h2 className="font-amiri text-3xl sm:text-4xl font-bold text-[#1C1C1C]">
            حكاية وُلدت في أرض السعيدة
          </h2>
          <p className="text-sm sm:text-base text-[#1C1C1C]/70">
            امتداد معاصر لرحلة القوافل الملكية، نضع بين يديك ثروات اليمن النادرة.
          </p>
        </div>

        {/* Narrative Box */}
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-[#D4AF37]/30 shadow-sm max-w-4xl mx-auto space-y-6">
          <div className="space-y-4 text-sm sm:text-base text-[#1C1C1C]/80 leading-relaxed">
            <p>
              في الأزمنة الغابرة، حيث كانت قوافل اللبان والبخور تعبر طريق التجارة العالمي، وتزن الممالك اليمنية القديمة كـ "قتبان" و"ذي ريدان" ذهبها بكنوز أرضها المعطاءة، صُنع مفهوم الفخامة الأصيلة.
            </p>
            <p>
              لم تكن تلك الممالك تجاراً فحسب، بل كانوا حُرّاساً لأسرار الطبيعة؛ يعرفون أين يختبئ أجود العقيق في قلب الجبال، وكيف يستخلصون أنقى العسل من سدر الشعاب النائية، وأي أصناف اللبان والبخور تُليق بملوك العالم.
            </p>
            <p className="font-bold text-[#8B5A2B] text-base sm:text-lg">
              اليوم، ومن قلب هذه الجغرافيا العريقة، نبعت فكرة "قتبان وذي ريدان". نحن لسنا مجرد متجر إلكتروني، بل نحن امتداد معاصر لرحلة القوافل الملكية، جاء ليعيد تعريف الجودة والأصالة في زمن الكثرة، ويضع بين يديك ثروات اليمن النادرة بأسلوب يعكس مهابة الماضي ورقي الحاضر.
            </p>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          <div className="bg-white p-8 rounded-3xl border border-[#D4AF37]/30 space-y-3 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/10 text-[#8B5A2B] flex items-center justify-center font-bold">
              رؤ
            </div>
            <h3 className="font-amiri text-2xl font-bold text-[#1C1C1C]">رؤيتنا</h3>
            <p className="text-xs sm:text-sm text-[#1C1C1C]/70 leading-relaxed">
              أن نكون السفير الرقمي الأول للتراث والمنتجات الطبيعية الفاخرة من اليمن إلى العالم، وأن نصبح الخيار الأول لمن يبحث عن الجودة المطلقة والندرة والموثوقية.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-[#D4AF37]/30 space-y-3 shadow-sm">
            <div className="w-12 h-12 rounded-2xl bg-[#8B5A2B]/10 text-[#8B5A2B] flex items-center justify-center font-bold">
              رس
            </div>
            <h3 className="font-amiri text-2xl font-bold text-[#1C1C1C]">رسالتنا</h3>
            <p className="text-xs sm:text-sm text-[#1C1C1C]/70 leading-relaxed">
              تقديم ثروات الطبيعة اليمنية—من عسل سدر ملكي، وعقيق يماني أصيل، وبخور ولبان فاخر—وفق أعلى معايير الانتقاء والفحص المعملي، مع تغليف ملوكي وتجربة تسوق رقمية استثنائية.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
