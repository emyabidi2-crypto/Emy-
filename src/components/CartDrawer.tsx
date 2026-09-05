import React, { useState } from 'react';
import { CartItem, Currency } from '../types';
import { CURRENCY_RATES } from '../data/mockData';
import { X, ShoppingBag, Trash2, Truck, CheckCircle2, ArrowLeft, ShieldCheck } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  currency: Currency;
  onCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  currency,
  onCheckout,
}) => {
  const [destination, setDestination] = useState<string>('gcc');
  const [checkoutSuccess, setCheckoutSuccess] = useState<boolean>(false);

  if (!isOpen) return null;

  const rate = CURRENCY_RATES[currency].rateToUSD;
  const symbol = CURRENCY_RATES[currency].symbol;

  const formatPrice = (usd: number) => `${Math.round(usd * rate)} ${symbol}`;

  const subtotalUSD = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  
  // Shipping cost in USD
  const shippingUSD = destination === 'gcc' ? 25 : destination === 'europe' ? 45 : destination === 'usa' ? 55 : 35;
  const totalUSD = subtotalUSD + (subtotalUSD > 500 ? 0 : shippingUSD);

  const handleCheckoutProcess = () => {
    setCheckoutSuccess(true);
    setTimeout(() => {
      setCheckoutSuccess(false);
      onCheckout();
      onClose();
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm flex justify-end">
      <div className="w-full max-w-md bg-[#FAF6F0] h-full shadow-2xl flex flex-col border-r border-[#D4AF37]/35 animate-in slide-in-from-left duration-300">
        
        {/* Header */}
        <div className="p-6 bg-white border-b border-[#D4AF37]/20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#D4AF37]" />
            <h2 className="font-amiri text-xl font-bold text-[#1C1C1C]">سلة المشتريات الملكية</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 text-[#1C1C1C] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Items List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {items.length === 0 ? (
            <div className="text-center py-20 space-y-4">
              <ShoppingBag className="w-16 h-16 text-gray-300 mx-auto" />
              <p className="font-amiri text-lg text-gray-600">سلة المشتريات فارغة حالياً</p>
              <p className="text-xs text-gray-400">اختر من كنوزنا الملكية لتزين سلتك</p>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.product.id}
                className="bg-white p-4 rounded-2xl border border-[#D4AF37]/20 flex items-center gap-4 shadow-sm"
              >
                <img
                  src={item.product.image}
                  alt={item.product.name}
                  className="w-16 h-16 rounded-xl object-cover flex-shrink-0 border border-gray-100"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="font-amiri text-sm font-bold text-[#1C1C1C] truncate">
                    {item.product.name}
                  </h4>
                  <p className="text-xs font-bold text-[#8B5A2B] mt-1">
                    {formatPrice(item.product.price)}
                  </p>
                  <div className="flex items-center gap-3 mt-2">
                    <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden text-xs">
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                        className="px-2 py-1 bg-gray-50 hover:bg-gray-100"
                      >
                        -
                      </button>
                      <span className="px-3 py-1 font-bold">{item.quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                        className="px-2 py-1 bg-gray-50 hover:bg-gray-100"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => onRemoveItem(item.product.id)}
                  className="text-gray-400 hover:text-red-600 transition-colors p-2"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Shipping Calculator & Summary */}
        {items.length > 0 && (
          <div className="p-6 bg-white border-t border-[#D4AF37]/20 space-y-4">
            
            {/* International Shipping Calculator */}
            <div className="bg-[#FAF6F0] p-3.5 rounded-2xl border border-[#D4AF37]/30 space-y-2">
              <div className="flex items-center justify-between text-xs font-bold text-[#8B5A2B]">
                <span className="flex items-center gap-1.5">
                  <Truck className="w-4 h-4 text-[#D4AF37]" /> حاسبة الشحن الدولي الفوري
                </span>
                {subtotalUSD > 500 && (
                  <span className="text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded text-[10px]">
                    شحن مجاني ملكي!
                  </span>
                )}
              </div>
              <select
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                aria-label="وجهة الشحن الدولي"
                className="w-full bg-white border border-[#D4AF37]/30 rounded-xl p-2 text-xs font-medium text-[#1C1C1C] focus:outline-none"
              >
                <option value="gcc">دول مجلس التعاون الخليجي (السعودية، الإمارات، قطر...) - 25$</option>
                <option value="europe">دول الاتحاد الأوروبي (بريطانيا، فرنسا، ألمانيا...) - 45$</option>
                <option value="usa">الولايات المتحدة وكندا - 55$</option>
                <option value="rest">باقي دول العالم - 35$</option>
              </select>
            </div>

            {/* Totals */}
            <div className="space-y-1.5 text-xs">
              <div className="flex justify-between text-gray-600">
                <span>مجموع المنتجات:</span>
                <span className="font-bold text-[#1C1C1C]">{formatPrice(subtotalUSD)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>تكلفة الشحن المؤمّن:</span>
                <span className="font-bold text-[#1C1C1C]">
                  {subtotalUSD > 500 ? 'مجاني' : formatPrice(shippingUSD)}
                </span>
              </div>
              <div className="flex justify-between text-base font-bold text-[#1C1C1C] pt-2 border-t border-gray-100">
                <span>الإجمالي النهائي:</span>
                <span className="font-amiri text-xl text-[#8B5A2B]">{formatPrice(totalUSD)}</span>
              </div>
            </div>

            {checkoutSuccess ? (
              <div className="bg-emerald-50 text-emerald-800 border border-emerald-200 p-4 rounded-2xl text-center space-y-1 animate-in fade-in">
                <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                <h4 className="font-bold text-sm">تم تأكيد طلبك الملكي بنجاح!</h4>
                <p className="text-xs text-gray-600">سيتم التواصل معك عبر الواتساب لتنسيق تفاصيل الشحن والتغليف.</p>
              </div>
            ) : (
              <button
                onClick={handleCheckoutProcess}
                className="w-full bg-[#D4AF37] hover:bg-[#C5A059] text-white py-3.5 rounded-xl font-bold text-sm shadow-lg shadow-[#D4AF37]/30 transition-all flex items-center justify-center gap-2"
              >
                <span>إتمام الطلب والتوصيل الملكي</span>
                <ArrowLeft className="w-4 h-4" />
              </button>
            )}

            <p className="text-[10px] text-center text-gray-400 flex items-center justify-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" /> ضمان استرجاع ملكي خلال 14 يوماً في حال عدم الرضا
            </p>

          </div>
        )}

      </div>
    </div>
  );
};
