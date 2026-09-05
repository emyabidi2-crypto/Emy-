import React, { useState } from 'react';
import { Product, Currency } from '../types';
import { CURRENCY_RATES } from '../data/mockData';
import { X, Star, ShieldCheck, Eye, RotateCw, FileText, ShoppingBag, CheckCircle2, ArrowRight, Download } from 'lucide-react';

interface ProductDetailModalProps {
  product: Product;
  currency: Currency;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  currency,
  onClose,
  onAddToCart,
}) => {
  const [activeImage, setActiveImage] = useState<string>(product.image);
  const [quantity, setQuantity] = useState<number>(1);
  const [isRotating, setIsRotating] = useState<boolean>(false);
  const [rotationAngle, setRotationAngle] = useState<number>(0);
  const [showCertificateModal, setShowCertificateModal] = useState<boolean>(false);
  const [addedToast, setAddedToast] = useState<boolean>(false);

  const rate = CURRENCY_RATES[currency].rateToUSD;
  const symbol = CURRENCY_RATES[currency].symbol;

  const formatPrice = (usd: number) => `${Math.round(usd * rate)} ${symbol}`;

  const handleRotate360 = () => {
    setIsRotating(true);
    let angle = rotationAngle;
    const interval = setInterval(() => {
      angle += 60;
      setRotationAngle(angle);
      if (angle >= 360) {
        clearInterval(interval);
        setIsRotating(false);
      }
    }, 200);
  };

  const handleAdd = () => {
    onAddToCart(product, quantity);
    setAddedToast(true);
    setTimeout(() => setAddedToast(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative bg-[#FAF6F0] rounded-3xl max-w-4xl w-full border border-[#D4AF37]/40 shadow-2xl overflow-hidden my-8">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-white border-b border-[#D4AF37]/20">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#D4AF37]"></span>
            <span className="font-amiri font-bold text-lg text-[#1C1C1C]">تفاصيل الكنز الملكي</span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100 text-[#1C1C1C] transition-colors"
            aria-label="إغلاق"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Gallery & 360 Simulation */}
          <div className="space-y-4">
            <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden bg-white border border-[#D4AF37]/30 shadow-inner flex items-center justify-center">
              <img
                src={activeImage}
                alt={product.name}
                style={{ transform: `rotate(${rotationAngle}deg)` }}
                className={`w-full h-full object-cover transition-transform duration-300 ${isRotating ? 'scale-105' : ''}`}
              />

              {/* 360 Overlay Badge */}
              {product.has360View && (
                <div className="absolute bottom-4 inset-x-4 flex justify-center">
                  <button
                    onClick={handleRotate360}
                    disabled={isRotating}
                    className="bg-[#1C1C1C]/90 backdrop-blur-md text-[#D4AF37] px-4 py-2 rounded-xl text-xs font-bold border border-[#D4AF37]/40 shadow-lg flex items-center gap-2 hover:bg-[#1C1C1C] transition-all"
                  >
                    <RotateCw className={`w-4 h-4 ${isRotating ? 'animate-spin' : ''}`} />
                    <span>{isRotating ? 'جاري الاستعراض 360°...' : 'تشغيل المعاينة ثلاثية الأبعاد 360°'}</span>
                  </button>
                </div>
              )}
            </div>

            {/* Thumbnails */}
            <div className="flex items-center gap-3 overflow-x-auto pb-2">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(img)}
                  className={`w-16 h-16 rounded-xl overflow-hidden border-2 transition-all flex-shrink-0 ${
                    activeImage === img ? 'border-[#D4AF37] scale-105 shadow-md' : 'border-gray-200 opacity-70'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Details & Options */}
          <div className="space-y-6">
            
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-[#8B5A2B] bg-[#8B5A2B]/10 px-3 py-1 rounded-full">
                  المنشأ: {product.origin}
                </span>
                <div className="flex items-center gap-1 text-sm font-bold text-[#D4AF37]">
                  <Star className="w-4 h-4 fill-current" />
                  <span>{product.rating} ({product.reviewsCount} تقييم ملكي)</span>
                </div>
              </div>

              <h1 className="font-amiri text-2xl sm:text-3xl font-bold text-[#1C1C1C]">
                {product.name}
              </h1>

              <div className="flex items-baseline gap-3 pt-2">
                <span className="font-amiri text-3xl font-bold text-[#8B5A2B]">
                  {formatPrice(product.price)}
                </span>
                {product.originalPrice && (
                  <span className="text-base text-gray-400 line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
                <span className="text-xs text-emerald-600 bg-emerald-50 px-2 py-1 rounded font-bold">
                  شحن ملكي مؤمن
                </span>
              </div>
            </div>

            <p className="text-sm text-[#1C1C1C]/80 leading-relaxed">
              {product.description}
            </p>

            {/* Benefits */}
            <div className="space-y-2 pt-2">
              <h4 className="text-xs font-bold text-[#8B5A2B] uppercase tracking-wider">الخصائص والمميزات الملكية:</h4>
              <ul className="space-y-1.5">
                {product.benefits.map((benefit, idx) => (
                  <li key={idx} className="text-xs text-[#1C1C1C]/80 flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Lab Certificate Button if available */}
            {product.labCertificate && (
              <div className="bg-white p-4 rounded-2xl border border-[#D4AF37]/30 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-[#1C1C1C]">شهادة الفحص المخبري الموثق</h5>
                    <p className="text-[11px] text-gray-500">{product.labCertificate.labName}</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowCertificateModal(true)}
                  className="bg-[#1C1C1C] hover:bg-[#8B5A2B] text-white px-3.5 py-2 rounded-xl text-xs font-bold transition-colors flex items-center gap-1.5"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>عرض الشهادة PDF</span>
                </button>
              </div>
            )}

            {/* Quantity & Add to Cart */}
            <div className="pt-4 border-t border-[#D4AF37]/20 flex items-center gap-4">
              <div className="flex items-center bg-white border border-[#D4AF37]/30 rounded-xl overflow-hidden">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3.5 py-2.5 text-[#1C1C1C] hover:bg-gray-100 font-bold"
                >
                  -
                </button>
                <span className="px-4 py-2.5 text-sm font-bold text-[#1C1C1C]">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3.5 py-2.5 text-[#1C1C1C] hover:bg-gray-100 font-bold"
                >
                  +
                </button>
              </div>

              <button
                onClick={handleAdd}
                className="flex-1 bg-[#D4AF37] hover:bg-[#C5A059] text-white py-3 px-6 rounded-xl font-bold text-sm shadow-lg shadow-[#D4AF37]/30 transition-all flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>إضافة إلى سلة المشتريات الملكية</span>
              </button>
            </div>

            {addedToast && (
              <div className="bg-emerald-50 text-emerald-800 border border-emerald-200 px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 animate-bounce">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>تمت إضافة المنتج بنجاح إلى سلة مشترياتك الملكية</span>
              </div>
            )}

          </div>

        </div>

      </div>

      {/* Lab Certificate PDF Modal */}
      {showCertificateModal && product.labCertificate && (
        <div className="fixed inset-0 z-60 bg-black/70 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-6 border border-[#D4AF37]">
            <div className="flex items-center justify-between border-b pb-4">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-6 h-6 text-emerald-600" />
                <h3 className="font-amiri text-xl font-bold text-[#1C1C1C]">شهادة الفحص المخبري الرسمي</h3>
              </div>
              <button onClick={() => setShowCertificateModal(false)} className="text-gray-400 hover:text-gray-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-xs sm:text-sm bg-[#FAF6F0] p-4 rounded-2xl border border-gray-200">
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-500">رقم الشهادة:</span>
                <span className="font-bold text-[#1C1C1C]">{product.labCertificate.certId}</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-500">المختبر المصدر:</span>
                <span className="font-bold text-[#1C1C1C]">{product.labCertificate.labName}</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="text-gray-500">تاريخ الإصدار:</span>
                <span className="font-bold text-[#1C1C1C]">{product.labCertificate.date}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">نتيجة التحليل والفحص:</span>
                <span className="font-bold text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded">
                  {product.labCertificate.purityScore}
                </span>
              </div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => alert('تم تنزيل شهادة الفحص بصيغة PDF بنجاح.')}
                className="flex-1 bg-[#D4AF37] hover:bg-[#C5A059] text-white py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-md"
              >
                <Download className="w-4 h-4" />
                <span>تحميل النسخة الأصلية PDF</span>
              </button>
              <button
                onClick={() => setShowCertificateModal(false)}
                className="bg-gray-100 hover:bg-gray-200 text-[#1C1C1C] px-6 py-3 rounded-xl font-bold text-xs"
              >
                إغلاق
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
