import React, { useState } from 'react';
import { Product, Currency } from '../types';
import { PRODUCTS, CURRENCY_RATES } from '../data/mockData';
import { Sparkles, Star, ShieldCheck, Eye, ShoppingBag, Gift, Crown } from 'lucide-react';

interface ProductCatalogProps {
  currency: Currency;
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  currency,
  onSelectProduct,
  onAddToCart,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const rate = CURRENCY_RATES[currency].rateToUSD;
  const symbol = CURRENCY_RATES[currency].symbol;

  const formatPrice = (usdPrice: number) => {
    return `${Math.round(usdPrice * rate)} ${symbol}`;
  };

  const filteredProducts = PRODUCTS.filter((p) => {
    const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.origin.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="products" className="py-16 sm:py-24 bg-[#FAF6F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-1.5 bg-[#D4AF37]/10 border border-[#D4AF37]/30 px-3 py-1 rounded-full text-xs font-bold text-[#8B5A2B]">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>متجر الكنوز الملكية</span>
          </div>
          <h2 className="font-amiri text-3xl sm:text-4xl font-bold text-[#1C1C1C]">
            روائع الأرض اليمنية.. بين يديك
          </h2>
          <p className="text-sm sm:text-base text-[#1C1C1C]/70">
            اختر من بين تشكيلاتنا الملكية المختارة بعناية فائقة، من عسل السدر الحر إلى العقيق اليماني الأصيل والبخور الفاخر.
          </p>
        </div>

        {/* Filters & Search */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 bg-[#EFECE6] p-1.5 rounded-2xl border border-[#D4AF37]/20">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                selectedCategory === 'all'
                  ? 'bg-[#1C1C1C] text-white shadow-sm'
                  : 'text-[#1C1C1C] hover:text-[#D4AF37]'
              }`}
            >
              جميع الكنوز
            </button>
            <button
              onClick={() => setSelectedCategory('honey')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                selectedCategory === 'honey'
                  ? 'bg-[#D4AF37] text-white shadow-sm'
                  : 'text-[#1C1C1C] hover:text-[#D4AF37]'
              }`}
            >
              العسل الملكي
            </button>
            <button
              onClick={() => setSelectedCategory('aqeeq')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                selectedCategory === 'aqeeq'
                  ? 'bg-[#D4AF37] text-white shadow-sm'
                  : 'text-[#1C1C1C] hover:text-[#D4AF37]'
              }`}
            >
              العقيق والجوهر
            </button>
            <button
              onClick={() => setSelectedCategory('aromas')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                selectedCategory === 'aromas'
                  ? 'bg-[#D4AF37] text-white shadow-sm'
                  : 'text-[#1C1C1C] hover:text-[#D4AF37]'
              }`}
            >
              البخور واللبان
            </button>
            <button
              onClick={() => setSelectedCategory('bundles')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                selectedCategory === 'bundles'
                  ? 'bg-[#8B5A2B] text-white shadow-sm'
                  : 'text-[#1C1C1C] hover:text-[#D4AF37]'
              }`}
            >
              <Gift className="w-3.5 h-3.5 inline ml-1" />
              مجموعات الهدايا
            </button>
          </div>

          {/* Search Input */}
          <div className="w-full md:w-72">
            <input
              type="text"
              placeholder="ابحث عن منتج، منشأ، أو عقيق..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-[#D4AF37]/30 rounded-xl px-4 py-2.5 text-xs sm:text-sm focus:outline-none focus:border-[#D4AF37] shadow-sm"
            />
          </div>

        </div>

        {/* Product Grid */}
        <div id="bundles" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl border border-[#D4AF37]/30 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Image & Badges */}
                <div className="relative h-64 overflow-hidden bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Tags */}
                  <div className="absolute top-3 right-3 flex flex-col gap-1 items-end">
                    {product.isRoyal && (
                      <span className="bg-[#D4AF37] text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-md flex items-center gap-1">
                        <Crown className="w-3 h-3" /> جودة ملكية
                      </span>
                    )}
                    {product.has360View && (
                      <span className="bg-[#1C1C1C]/90 text-[#D4AF37] text-[10px] font-bold px-2.5 py-1 rounded-full shadow-md border border-[#D4AF37]/30 flex items-center gap-1">
                        <Eye className="w-3 h-3" /> معاينة 360°
                      </span>
                    )}
                  </div>

                  <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm text-[#8B5A2B] text-xs font-semibold px-2.5 py-1 rounded-lg border border-[#D4AF37]/30">
                    {product.origin}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span className="flex items-center gap-1 text-[#D4AF37] font-bold">
                      <Star className="w-3.5 h-3.5 fill-current" /> {product.rating} ({product.reviewsCount} تقييم)
                    </span>
                    {product.labCertificate && (
                      <span className="flex items-center gap-1 text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded text-[11px] font-medium">
                        <ShieldCheck className="w-3 h-3" /> معملي معتمد
                      </span>
                    )}
                  </div>

                  <h3
                    onClick={() => onSelectProduct(product)}
                    className="font-amiri text-lg font-bold text-[#1C1C1C] hover:text-[#8B5A2B] cursor-pointer transition-colors line-clamp-1"
                  >
                    {product.name}
                  </h3>

                  <p className="text-xs text-[#1C1C1C]/70 line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </div>

              {/* Footer / Price & Actions */}
              <div className="p-6 pt-0 flex items-center justify-between border-t border-gray-100 mt-4">
                <div>
                  <span className="text-[10px] text-gray-400 block">السعر الملكي</span>
                  <div className="flex items-baseline gap-2">
                    <span className="font-amiri text-xl font-bold text-[#8B5A2B]">
                      {formatPrice(product.price)}
                    </span>
                    {product.originalPrice && (
                      <span className="text-xs text-gray-400 line-through">
                        {formatPrice(product.originalPrice)}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onSelectProduct(product)}
                    className="p-2.5 rounded-xl bg-[#FAF6F0] hover:bg-[#EFECE6] text-[#1C1C1C] border border-[#D4AF37]/30 transition-colors"
                    title="عرض التفاصيل"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => onAddToCart(product)}
                    className="bg-[#D4AF37] hover:bg-[#C5A059] text-white px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shadow-md shadow-[#D4AF37]/20"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>إضافة للسلة</span>
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
