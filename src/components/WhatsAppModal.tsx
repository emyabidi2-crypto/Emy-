import React, { useState } from 'react';
import { X, MessageCircle, Send, Crown, CheckCircle2 } from 'lucide-react';

interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WhatsAppModal: React.FC<WhatsAppModalProps> = ({ isOpen, onClose }) => {
  const [message, setMessage] = useState<string>('');
  const [sent, setSent] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setMessage('');
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-65 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#FAF6F0] rounded-3xl max-w-md w-full p-6 sm:p-8 space-y-6 border border-[#D4AF37] shadow-2xl relative">
        
        <div className="flex items-center justify-between border-b pb-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-amiri text-lg font-bold text-[#1C1C1C]">كونسيرج الواتساب الملكي</h3>
              <p className="text-[10px] text-gray-500">متاحون على مدار الساعة لخدمة كبار الشخصيات</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-100 text-gray-500">
            <X className="w-5 h-5" />
          </button>
        </div>

        {sent ? (
          <div className="bg-emerald-50 text-emerald-800 border border-emerald-200 p-6 rounded-2xl text-center space-y-2 animate-in fade-in">
            <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
            <h4 className="font-bold text-sm">تم إرسال استفسارك إلى كونسيرج المتجر بنجاح</h4>
            <p className="text-xs text-gray-600">سيتم فتح محادثة الواتساب الفورية مع المستشار المختص.</p>
          </div>
        ) : (
          <form onSubmit={handleSend} className="space-y-4">
            <div className="space-y-1">
              <label className="text-xs font-bold text-[#1C1C1C]">رسالتك أو استفسارك حول الكنوز:</label>
              <textarea
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="أهلاً بك، أود الاستفسار عن توفر عسل السدر الملكي وخواتم العقيق الأصلي..."
                className="w-full bg-white border border-[#D4AF37]/30 rounded-xl p-3 text-xs focus:outline-none focus:border-[#D4AF37]"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#25D366] hover:bg-[#20ba59] text-white py-3 rounded-xl font-bold text-xs shadow-lg flex items-center justify-center gap-2 transition-all"
            >
              <Send className="w-4 h-4" />
              <span>إرسال عبر الواتساب الفوري</span>
            </button>
          </form>
        )}

      </div>
    </div>
  );
};
