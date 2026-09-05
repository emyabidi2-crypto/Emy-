import React from 'react';
import { Crown, Sparkles, ShieldCheck, MapPin, Compass, BookOpen, Clock, Layers, CheckCircle2, Award } from 'lucide-react';
import { ROADMAP_PHASES } from '../data/mockData';

export const StrategyBlueprint: React.FC = () => {
  return (
    <div className="py-12 sm:py-20 bg-[#FAF6F0] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header / Title */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-[#D4AF37]/10 border border-[#D4AF37]/30 px-4 py-1.5 rounded-full text-xs font-bold text-[#8B5A2B]">
            <Crown className="w-4 h-4 text-[#D4AF37]" />
            <span>الخطة الإستراتيجية وهندسة الهوية الرقمية الفاخرة</span>
          </div>
          <h1 className="font-amiri text-3xl sm:text-5xl font-bold text-[#1C1C1C]">
            قتبان وذي ريدان | Kataban & Dhu Raydan
          </h1>
          <p className="text-sm sm:text-base text-[#1C1C1C]/80 leading-relaxed">
            وثيقة التصميم والتنفيذ المتكاملة للمتجر الإلكتروني الفاخر، صُممت بعناية لتعكس روح الفخامة التاريخية والأصالة مع البساطة الرقمية الحديثة.
          </p>
        </div>

        {/* 1. Brand Identity & Color Palette */}
        <div className="bg-white rounded-3xl p-8 border border-[#D4AF37]/30 shadow-sm space-y-6">
          <div className="flex items-center gap-3 border-b pb-4">
            <span className="p-2.5 rounded-xl bg-[#D4AF37]/10 text-[#8B5A2B]">
              <Sparkles className="w-6 h-6" />
            </span>
            <div>
              <h2 className="font-amiri text-2xl font-bold text-[#1C1C1C]">الرؤية البصرية ولوحة الألوان (Luxury Aesthetic Guidelines)</h2>
              <p className="text-xs text-gray-500">Historic Royal Luxury meets Modern Minimalism</p>
            </div>
          </div>

          <p className="text-sm text-[#1C1C1C]/80 leading-relaxed">
            يجمع الشعار بين خط المسند اليمني القديم ورمز هندسي يدمج بين "جرة العسل الملكية" و"فص العقيق اليماني"، مع أيقونة متجر (Favicon) مبسطة ومميزة. أما لوحة الألوان فتتوزع كالتالي:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
            
            <div className="p-5 rounded-2xl bg-[#FAF6F0] border border-[#D4AF37]/30 space-y-3">
              <div className="h-14 rounded-xl bg-[#D4AF37] shadow-inner"></div>
              <div>
                <h4 className="font-amiri font-bold text-base text-[#1C1C1C]">الذهبي المعتق الفاخر</h4>
                <p className="text-xs text-[#8B5A2B] font-mono">#D4AF37</p>
                <p className="text-xs text-gray-600 mt-1">يُستخدم للأزرار الرئيسية، شارات الجودة، والتفاصيل البارزة للتمييز.</p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#FAF6F0] border border-[#D4AF37]/30 space-y-3">
              <div className="h-14 rounded-xl bg-[#8B5A2B] shadow-inner"></div>
              <div>
                <h4 className="font-amiri font-bold text-base text-[#1C1C1C]">البني الأرضي الداكن</h4>
                <p className="text-xs text-[#8B5A2B] font-mono">#8B5A2B</p>
                <p className="text-xs text-gray-600 mt-1">للتفاصيل الديكورية وإبراز عمق التراث اليمني والمنتجات الطبيعية.</p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#FAF6F0] border border-[#D4AF37]/30 space-y-3">
              <div className="h-14 rounded-xl bg-[#FAF6F0] border border-gray-300 shadow-inner"></div>
              <div>
                <h4 className="font-amiri font-bold text-base text-[#1C1C1C]">الأبيض الكريمي الفاخر</h4>
                <p className="text-xs text-[#8B5A2B] font-mono">#FAF6F0</p>
                <p className="text-xs text-gray-600 mt-1">كخلفية أساسية لإراحة العين وإبراز صور المنتجات بدقة متناهية.</p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#FAF6F0] border border-[#D4AF37]/30 space-y-3">
              <div className="h-14 rounded-xl bg-[#1C1C1C] shadow-inner"></div>
              <div>
                <h4 className="font-amiri font-bold text-base text-[#1C1C1C]">الأسود الفحمي</h4>
                <p className="text-xs text-[#8B5A2B] font-mono">#1C1C1C</p>
                <p className="text-xs text-gray-600 mt-1">للنصوص والعناوين الكبرى لضمان الوضوح التام والقراءة المريحة.</p>
              </div>
            </div>

          </div>
        </div>

        {/* 2. Storytelling & Origin */}
        <div className="bg-white rounded-3xl p-8 border border-[#D4AF37]/30 shadow-sm space-y-6">
          <div className="flex items-center gap-3 border-b pb-4">
            <span className="p-2.5 rounded-xl bg-[#D4AF37]/10 text-[#8B5A2B]">
              <BookOpen className="w-6 h-6" />
            </span>
            <div>
              <h2 className="font-amiri text-2xl font-bold text-[#1C1C1C]">القصة والنشأة (Storytelling & Origin)</h2>
              <p className="text-xs text-gray-500">حكاية وُلدت في أرض السعيدة</p>
            </div>
          </div>

          <div className="space-y-4 text-sm sm:text-base text-[#1C1C1C]/80 leading-relaxed font-normal bg-[#FAF6F0] p-6 rounded-2xl border border-[#D4AF37]/20">
            <p>
              في الأزمنة الغابرة، حيث كانت قوافل اللبان والبخور تعبر طريق التجارة العالمي، وتزن الممالك اليمنية القديمة كـ "قتبان" و"ذي ريدان" ذهبها بكنوز أرضها المعطاءة، صُنع مفهوم الفخامة الأصيلة.
            </p>
            <p>
              لم تكن تلك الممالك تجاراً فحسب، بل كانوا حُرّاساً لأسرار الطبيعة؛ يعرفون أين يختبئ أجود العقيق في قلب الجبال، وكيف يستخلصون أنقى العسل من سدر الشعاب النائية، وأي أصناف اللبان والبخور تُليق بملوك العالم.
            </p>
            <p className="font-bold text-[#8B5A2B]">
              اليوم، ومن قلب هذه الجغرافيا العريقة، نبعت فكرة "قتبان وذي ريدان". نحن لسنا مجرد متجر إلكتروني، بل نحن امتداد معاصر لرحلة القوافل الملكية، جاء ليعيد تعريف الجودة والأصالة في زمن الكثرة، ويضع بين يديك ثروات اليمن النادرة.
            </p>
          </div>
        </div>

        {/* 3. Sitemap & UX Structure */}
        <div className="bg-white rounded-3xl p-8 border border-[#D4AF37]/30 shadow-sm space-y-6">
          <div className="flex items-center gap-3 border-b pb-4">
            <span className="p-2.5 rounded-xl bg-[#D4AF37]/10 text-[#8B5A2B]">
              <Layers className="w-6 h-6" />
            </span>
            <div>
              <h2 className="font-amiri text-2xl font-bold text-[#1C1C1C]">شجرة الموقع (Sitemap) وهيكلية التجربة</h2>
              <p className="text-xs text-gray-500">هيكلية بسيطة ومباشرة تمنع تشتت الزائر وتضمن رحلة تسوق فاخرة</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="p-6 rounded-2xl bg-[#FAF6F0] border border-gray-200 space-y-3">
              <h4 className="font-amiri font-bold text-lg text-[#8B5A2B]">1. الواجهة الرئيسية (Homepage)</h4>
              <ul className="space-y-2 text-xs text-[#1C1C1C]/80">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" /> قسم Hero Section البصري الساحر</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" /> إحصائيات الثقة وشهادات المختبرات</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" /> عرض سريع لأبرز الكنوز الملكية</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF6F0] border border-gray-200 space-y-3">
              <h4 className="font-amiri font-bold text-lg text-[#8B5A2B]">2. صفحات المنتجات (PDP)</h4>
              <ul className="space-y-2 text-xs text-[#1C1C1C]/80">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" /> خاصية المعاينة ثلاثية الأبعاد 360° للعقيق</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" /> عارض شهادات الفحص المخبري بصيغة PDF</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" /> استعراض القصة التاريخية لكل منتج</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF6F0] border border-gray-200 space-y-3">
              <h4 className="font-amiri font-bold text-lg text-[#8B5A2B]">3. المحور الثقافي والخدمات</h4>
              <ul className="space-y-2 text-xs text-[#1C1C1C]/80">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" /> مدونة التراث (SEO Resource Hub)</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" /> حاسبة الشحن الدولي الفوري</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" /> زر كونسيرج الواتساب المباشر</li>
              </ul>
            </div>

          </div>
        </div>

        {/* 4. Execution Roadmap Table */}
        <div className="bg-white rounded-3xl p-8 border border-[#D4AF37]/30 shadow-sm space-y-6">
          <div className="flex items-center gap-3 border-b pb-4">
            <span className="p-2.5 rounded-xl bg-[#D4AF37]/10 text-[#8B5A2B]">
              <Clock className="w-6 h-6" />
            </span>
            <div>
              <h2 className="font-amiri text-2xl font-bold text-[#1C1C1C]">جدول العمل والتنفيذ (Roadmap)</h2>
              <p className="text-xs text-gray-500">خطة تنفيذية دقيقة مقسمة إلى 8 أسابيع من التأسيس إلى الإطلاق</p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-right border-collapse">
              <thead>
                <tr className="bg-[#FAF6F0] border-b border-[#D4AF37]/30 text-xs font-bold text-[#1C1C1C]">
                  <th className="p-4">المدى الزمني</th>
                  <th className="p-4">المرحلة الرئيسية</th>
                  <th className="p-4">المهام والأنشطة</th>
                  <th className="p-4">المخرجات النهائية</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-xs sm:text-sm">
                {ROADMAP_PHASES.map((phase, idx) => (
                  <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                    <td className="p-4 font-bold text-[#8B5A2B] whitespace-nowrap">{phase.week}</td>
                    <td className="p-4 font-bold text-[#1C1C1C]">{phase.phase}</td>
                    <td className="p-4">
                      <ul className="list-disc list-inside space-y-1 text-gray-600">
                        {phase.tasks.map((task, i) => (
                          <li key={i}>{task}</li>
                        ))}
                      </ul>
                    </td>
                    <td className="p-4 font-semibold text-emerald-700">{phase.deliverables}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
};
