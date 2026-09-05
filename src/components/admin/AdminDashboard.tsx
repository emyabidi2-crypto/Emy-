import React, { useState } from 'react';
import { 
  ShieldCheck, Package, ShoppingBag, MessageSquare, Settings, Users, 
  Plus, Edit, Trash2, CheckCircle, Clock, XCircle, Save, Download, Upload, 
  ArrowRight, Search, Eye, AlertCircle, RefreshCw 
} from 'lucide-react';
import { Product, Order, Interaction, User, SiteSettings, Currency } from '../../types';

interface AdminDashboardProps {
  currentUser: User;
  products: Product[];
  onAddProduct: (product: Product) => void;
  onUpdateProduct: (product: Product) => void;
  onDeleteProduct: (productId: string) => void;
  orders: Order[];
  onUpdateOrderStatus: (orderId: string, status: Order['status']) => void;
  interactions: Interaction[];
  onReplyInteraction: (interactionId: string, reply: string) => void;
  users: User[];
  onUpdateUserRole: (userId: string, role: User['role']) => void;
  settings: SiteSettings;
  onUpdateSettings: (newSettings: SiteSettings) => void;
  onClose: () => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({
  currentUser,
  products,
  onAddProduct,
  onUpdateProduct,
  onDeleteProduct,
  orders,
  onUpdateOrderStatus,
  interactions,
  onReplyInteraction,
  users,
  onUpdateUserRole,
  settings,
  onUpdateSettings,
  onClose
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'products' | 'orders' | 'interactions' | 'users' | 'settings'>('overview');
  
  // Product Form State
  const [isEditingProduct, setIsEditingProduct] = useState<Product | null>(null);
  const [isAddingProduct, setIsAddingProduct] = useState(false);
  const [productForm, setProductForm] = useState<Partial<Product>>({
    name: '',
    category: 'honey',
    price: 200,
    originalPrice: 250,
    rating: 5.0,
    reviewsCount: 1,
    image: 'https://images.unsplash.com/photo-1587049352847-4a222e784d38?auto=format&fit=crop&w=800&q=80',
    description: '',
    origin: 'اليمن',
    benefits: ['جودة ملكية', '100% طبيعي خام'],
    isRoyal: true
  });

  // Interaction Reply State
  const [replyingId, setReplyingId] = useState<string | null>(null);
  const [replyText, setReplyText] = useState('');

  // Settings State
  const [settingsForm, setSettingsForm] = useState<SiteSettings>(settings);

  // Search filter
  const [searchTerm, setSearchTerm] = useState('');

  const handleSaveProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!productForm.name) return;

    if (isEditingProduct) {
      onUpdateProduct({
        ...isEditingProduct,
        ...productForm as Product
      });
      setIsEditingProduct(null);
    } else {
      const newProd: Product = {
        id: `prod-${Date.now()}`,
        name: productForm.name || '',
        category: productForm.category || 'honey',
        price: Number(productForm.price) || 100,
        originalPrice: Number(productForm.originalPrice) || 120,
        rating: 5.0,
        reviewsCount: 1,
        image: productForm.image || 'https://images.unsplash.com/photo-1587049352847-4a222e784d38?auto=format&fit=crop&w=800&q=80',
        images: [productForm.image || 'https://images.unsplash.com/photo-1587049352847-4a222e784d38?auto=format&fit=crop&w=800&q=80'],
        description: productForm.description || '',
        origin: productForm.origin || 'اليمن',
        benefits: productForm.benefits || ['طبيعي 100%'],
        isRoyal: productForm.isRoyal ?? true
      };
      onAddProduct(newProd);
      setIsAddingProduct(false);
    }
    setProductForm({
      name: '',
      category: 'honey',
      price: 200,
      originalPrice: 250,
      rating: 5.0,
      reviewsCount: 1,
      image: 'https://images.unsplash.com/photo-1587049352847-4a222e784d38?auto=format&fit=crop&w=800&q=80',
      description: '',
      origin: 'اليمن',
      benefits: ['جودة ملكية', '100% طبيعي خام'],
      isRoyal: true
    });
  };

  const handleExportBackup = () => {
    const backupData = {
      settings,
      products,
      orders,
      interactions,
      users,
      exportedAt: new Date().toISOString()
    };
    const blob = new Blob([JSON.stringify(backupData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `kataban-backup-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#FAF6F0] flex flex-col overflow-hidden animate-fadeIn font-['Tajawal',sans-serif]">
      
      {/* Top Admin Header */}
      <header className="bg-[#1C1C1C] text-[#FAF6F0] px-6 py-4 flex items-center justify-between border-b border-[#D4AF37]/40 shadow-lg">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#D4AF37] text-[#1C1C1C] flex items-center justify-center font-bold shadow-md">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h1 className="font-amiri text-xl font-bold tracking-wide">لوحة التحكم الإدارية الملكية</h1>
            <p className="text-xs text-[#D4AF37]">مرحباً بالمدير: {currentUser.name} ({currentUser.email})</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleExportBackup}
            className="hidden sm:flex items-center gap-1.5 bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#D4AF37] hover:bg-[#D4AF37]/30 px-3 py-2 rounded-xl text-xs font-bold transition-all"
          >
            <Download className="w-4 h-4" />
            <span>نسخ احتياطي للبيانات</span>
          </button>
          <button
            onClick={onClose}
            className="flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-xl text-xs font-bold transition-all"
          >
            <ArrowRight className="w-4 h-4" />
            <span>العودة للمتجر</span>
          </button>
        </div>
      </header>

      {/* Main Admin Layout */}
      <div className="flex-1 flex overflow-hidden">
        
        {/* Sidebar Navigation */}
        <aside className="w-64 bg-[#141414] text-[#FAF6F0] p-4 flex flex-col gap-2 border-l border-[#D4AF37]/20">
          <div className="text-[11px] font-bold text-gray-400 uppercase tracking-widest px-3 py-1">القائمة الرئيسية</div>
          
          <button
            onClick={() => setActiveTab('overview')}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${
              activeTab === 'overview' ? 'bg-[#D4AF37] text-[#1C1C1C] shadow-md' : 'text-gray-300 hover:bg-white/5 hover:text-white'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>نظرة عامة والتقارير</span>
          </button>

          <button
            onClick={() => setActiveTab('products')}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${
              activeTab === 'products' ? 'bg-[#D4AF37] text-[#1C1C1C] shadow-md' : 'text-gray-300 hover:bg-white/5 hover:text-white'
            }`}
          >
            <Package className="w-4 h-4" />
            <span>المنتجات والخدمات ({products.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('orders')}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${
              activeTab === 'orders' ? 'bg-[#D4AF37] text-[#1C1C1C] shadow-md' : 'text-gray-300 hover:bg-white/5 hover:text-white'
            }`}
          >
            <ShoppingBag className="w-4 h-4" />
            <span>الطلبات والمبيعات ({orders.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('interactions')}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${
              activeTab === 'interactions' ? 'bg-[#D4AF37] text-[#1C1C1C] shadow-md' : 'text-gray-300 hover:bg-white/5 hover:text-white'
            }`}
          >
            <MessageSquare className="w-4 h-4" />
            <span>التفاعل والردود ({interactions.filter(i => i.status === 'unread').length})</span>
          </button>

          <button
            onClick={() => setActiveTab('users')}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${
              activeTab === 'users' ? 'bg-[#D4AF37] text-[#1C1C1C] shadow-md' : 'text-gray-300 hover:bg-white/5 hover:text-white'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>المستخدمون والصلاحيات ({users.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('settings')}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${
              activeTab === 'settings' ? 'bg-[#D4AF37] text-[#1C1C1C] shadow-md' : 'text-gray-300 hover:bg-white/5 hover:text-white'
            }`}
          >
            <Settings className="w-4 h-4" />
            <span>إعدادات المتجر</span>
          </button>
        </aside>

        {/* Content Panel */}
        <main className="flex-1 overflow-y-auto p-6 lg:p-8 bg-[#FAF6F0]">
          
          {/* OVERVIEW TAB */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div>
                <h2 className="font-amiri text-2xl font-bold text-[#1C1C1C]">لوحة المؤشرات والتقارير العامة</h2>
                <p className="text-xs text-[#8B5A2B]">نظرة شاملة على أداء متجر قتبان وذي ريدان الملكي</p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white p-5 rounded-2xl border border-[#D4AF37]/30 shadow-sm">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-gray-500">إجمالي المبيعات</span>
                    <span className="p-2 bg-[#D4AF37]/10 text-[#D4AF37] rounded-xl"><ShoppingBag className="w-5 h-5" /></span>
                  </div>
                  <div className="text-2xl font-bold text-[#1C1C1C] font-amiri">$14,850</div>
                  <div className="text-[11px] text-emerald-600 font-semibold mt-1">↑ 18% عن الشهر السابق</div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-[#D4AF37]/30 shadow-sm">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-gray-500">المنتجات النشطة</span>
                    <span className="p-2 bg-[#8B5A2B]/10 text-[#8B5A2B] rounded-xl"><Package className="w-5 h-5" /></span>
                  </div>
                  <div className="text-2xl font-bold text-[#1C1C1C] font-amiri">{products.length} منتجات ملكية</div>
                  <div className="text-[11px] text-[#8B5A2B] font-semibold mt-1">مفحوصة معملياً 100%</div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-[#D4AF37]/30 shadow-sm">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-gray-500">الطلبات الواردة</span>
                    <span className="p-2 bg-blue-500/10 text-blue-600 rounded-xl"><Clock className="w-5 h-5" /></span>
                  </div>
                  <div className="text-2xl font-bold text-[#1C1C1C] font-amiri">{orders.length} طلبات</div>
                  <div className="text-[11px] text-blue-600 font-semibold mt-1">قيد التجهيز والشحن</div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-[#D4AF37]/30 shadow-sm">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-gray-500">رسائل العملاء</span>
                    <span className="p-2 bg-amber-500/10 text-amber-600 rounded-xl"><MessageSquare className="w-5 h-5" /></span>
                  </div>
                  <div className="text-2xl font-bold text-[#1C1C1C] font-amiri">{interactions.length} استفسار</div>
                  <div className="text-[11px] text-amber-600 font-semibold mt-1">وقت الاستجابة الفوري</div>
                </div>
              </div>

              {/* Quick Summary Card */}
              <div className="bg-gradient-to-br from-[#1C1C1C] to-[#2C2C2C] text-[#FAF6F0] p-6 rounded-2xl shadow-xl border border-[#D4AF37]/40 flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <span className="bg-[#D4AF37] text-[#1C1C1C] text-[10px] px-2.5 py-1 rounded-full font-bold uppercase">صلاحيات كاملة مفعلة</span>
                  <h3 className="font-amiri text-xl font-bold mt-2">إدارة أمن وصلاحيات النظام نشطة</h3>
                  <p className="text-xs text-gray-300 mt-1 max-w-xl">
                    يتم تطبيق صلاحيات الأدمن والتحكم الكامل بالمنتجات والخدمات والردود والأسعار. جميع العمليات مسجلة بسجل الأمان الملكي.
                  </p>
                </div>
                <button
                  onClick={() => setActiveTab('products')}
                  className="bg-[#D4AF37] text-[#1C1C1C] hover:bg-[#F3E5AB] px-5 py-3 rounded-xl font-bold text-xs transition-all shadow-md shrink-0"
                >
                  إدارة المنتجات الآن
                </button>
              </div>
            </div>
          )}

          {/* PRODUCTS TAB */}
          {activeTab === 'products' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h2 className="font-amiri text-2xl font-bold text-[#1C1C1C]">إدارة المنتجات والخدمات الملكية</h2>
                  <p className="text-xs text-[#8B5A2B]">إضافة، تعديل وحذف الكنوز اليمنية الأصيلة</p>
                </div>
                <button
                  onClick={() => { setIsAddingProduct(true); setIsEditingProduct(null); }}
                  className="flex items-center gap-2 bg-[#1C1C1C] hover:bg-[#D4AF37] hover:text-[#1C1C1C] text-white px-4 py-2.5 rounded-xl text-xs font-bold transition-all shadow-sm"
                >
                  <Plus className="w-4 h-4" />
                  <span>إضافة منتج ملكي جديد</span>
                </button>
              </div>

              {/* Add / Edit Modal Form */}
              {(isAddingProduct || isEditingProduct) && (
                <div className="bg-white p-6 rounded-2xl border border-[#D4AF37] shadow-lg mb-6 animate-fadeIn">
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-gray-100">
                    <h3 className="font-amiri text-lg font-bold text-[#1C1C1C]">
                      {isEditingProduct ? 'تعديل بيانات المنتج الملكي' : 'إضافة منتج ملكي جديد'}
                    </h3>
                    <button
                      onClick={() => { setIsAddingProduct(false); setIsEditingProduct(null); }}
                      className="text-gray-400 hover:text-gray-700"
                    >
                      ✕
                    </button>
                  </div>

                  <form onSubmit={handleSaveProduct} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">اسم المنتج</label>
                      <input
                        type="text"
                        required
                        value={productForm.name}
                        onChange={(e) => setProductForm({ ...productForm, name: e.target.value })}
                        className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl text-xs"
                        placeholder="عسل سدر ملكي..."
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">التصنيف</label>
                      <select
                        value={productForm.category}
                        onChange={(e) => setProductForm({ ...productForm, category: e.target.value as any })}
                        className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl text-xs"
                      >
                        <option value="honey">العسل الملكي</option>
                        <option value="aqeeq">العقيق اليماني</option>
                        <option value="aromas">البخور والعبق</option>
                        <option value="bundles">مجموعات الهدايا</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">السعر ($ USD)</label>
                      <input
                        type="number"
                        required
                        value={productForm.price}
                        onChange={(e) => setProductForm({ ...productForm, price: Number(e.target.value) })}
                        className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl text-xs"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">السعر قبل الخصم ($ USD)</label>
                      <input
                        type="number"
                        value={productForm.originalPrice}
                        onChange={(e) => setProductForm({ ...productForm, originalPrice: Number(e.target.value) })}
                        className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl text-xs"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">رابط الصورة (URL)</label>
                      <input
                        type="url"
                        required
                        value={productForm.image}
                        onChange={(e) => setProductForm({ ...productForm, image: e.target.value })}
                        className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl text-xs"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">بلد المنشأ / المنطقة</label>
                      <input
                        type="text"
                        value={productForm.origin}
                        onChange={(e) => setProductForm({ ...productForm, origin: e.target.value })}
                        className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl text-xs"
                        placeholder="وادي دوان، حضرموت"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-xs font-bold text-gray-700 mb-1">وصف المنتج</label>
                      <textarea
                        rows={3}
                        value={productForm.description}
                        onChange={(e) => setProductForm({ ...productForm, description: e.target.value })}
                        className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl text-xs"
                        placeholder="تفاصيل الجودة والخصائص الملكية..."
                      />
                    </div>

                    <div className="md:col-span-2 flex justify-end gap-3 mt-4">
                      <button
                        type="button"
                        onClick={() => { setIsAddingProduct(false); setIsEditingProduct(null); }}
                        className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-xl text-xs font-bold text-gray-700"
                      >
                        إلغاء
                      </button>
                      <button
                        type="submit"
                        className="px-5 py-2 bg-[#D4AF37] hover:bg-[#c5a059] rounded-xl text-xs font-bold text-[#1C1C1C] shadow-sm"
                      >
                        {isEditingProduct ? 'حفظ التعديلات' : 'إضافة المنتج للمتجر'}
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {/* Products Table */}
              <div className="bg-white rounded-2xl border border-[#D4AF37]/30 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-right text-xs">
                    <thead className="bg-[#FAF6F0] text-[#1C1C1C] border-b border-[#D4AF37]/20 font-bold">
                      <tr>
                        <th className="p-4">المنتج</th>
                        <th className="p-4">التصنيف</th>
                        <th className="p-4">السعر</th>
                        <th className="p-4">المنشأ</th>
                        <th className="p-4">التقييم</th>
                        <th className="p-4 text-center">الإجراءات</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {products.map((p) => (
                        <tr key={p.id} className="hover:bg-gray-50 transition-colors">
                          <td className="p-4 flex items-center gap-3">
                            <img src={p.image} alt={p.name} className="w-10 h-10 rounded-lg object-cover border border-[#D4AF37]/30" />
                            <div>
                              <div className="font-bold text-[#1C1C1C]">{p.name}</div>
                              <div className="text-[10px] text-gray-400">ID: {p.id}</div>
                            </div>
                          </td>
                          <td className="p-4">
                            <span className="bg-[#D4AF37]/10 text-[#8B5A2B] px-2 py-1 rounded-md text-[10px] font-bold">
                              {p.category}
                            </span>
                          </td>
                          <td className="p-4 font-bold text-[#1C1C1C]">${p.price}</td>
                          <td className="p-4 text-gray-600">{p.origin}</td>
                          <td className="p-4">⭐ {p.rating} ({p.reviewsCount})</td>
                          <td className="p-4 text-center">
                            <div className="flex items-center justify-center gap-2">
                              <button
                                onClick={() => { setIsEditingProduct(p); setProductForm(p); setIsAddingProduct(false); }}
                                className="p-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors"
                                title="تعديل"
                              >
                                <Edit className="w-4 h-4" />
                              </button>
                              <button
                                onClick={() => onDeleteProduct(p.id)}
                                className="p-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors"
                                title="حذف"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* ORDERS TAB */}
          {activeTab === 'orders' && (
            <div className="space-y-6">
              <div>
                <h2 className="font-amiri text-2xl font-bold text-[#1C1C1C]">إدارة الطلبات والمبيعات الملكية</h2>
                <p className="text-xs text-[#8B5A2B]">متابعة وتحديث حالة طلبات العملاء</p>
              </div>

              <div className="bg-white rounded-2xl border border-[#D4AF37]/30 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-right text-xs">
                    <thead className="bg-[#FAF6F0] text-[#1C1C1C] border-b border-[#D4AF37]/20 font-bold">
                      <tr>
                        <th className="p-4">رقم الطلب</th>
                        <th className="p-4">العميل</th>
                        <th className="p-4">المنتجات</th>
                        <th className="p-4">المبلغ الإجمالي</th>
                        <th className="p-4">الحالة</th>
                        <th className="p-4 text-center">تحديث الحالة</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {orders.length === 0 ? (
                        <tr>
                          <td colSpan={6} className="p-8 text-center text-gray-400">لا توجد طلبات مسجلة حتى الآن</td>
                        </tr>
                      ) : (
                        orders.map((o) => (
                          <tr key={o.id} className="hover:bg-gray-50 transition-colors">
                            <td className="p-4 font-bold text-[#1C1C1C]">#{o.id}</td>
                            <td className="p-4">
                              <div className="font-bold">{o.customerName}</div>
                              <div className="text-[10px] text-gray-400">{o.customerEmail}</div>
                            </td>
                            <td className="p-4">
                              {o.items.map((i, idx) => (
                                <div key={idx} className="text-[11px] text-gray-700">
                                  • {i.product.name} (×{i.quantity})
                                </div>
                              ))}
                            </td>
                            <td className="p-4 font-bold text-[#D4AF37]">
                              {o.totalAmount} {o.currency}
                            </td>
                            <td className="p-4">
                              <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${
                                o.status === 'delivered' ? 'bg-emerald-100 text-emerald-800' :
                                o.status === 'shipped' ? 'bg-blue-100 text-blue-800' :
                                'bg-amber-100 text-amber-800'
                              }`}>
                                {o.status === 'delivered' ? 'تم التوصيل' : o.status === 'shipped' ? 'تم الشحن' : 'قيد المعالجة'}
                              </span>
                            </td>
                            <td className="p-4 text-center">
                              <select
                                value={o.status}
                                onChange={(e) => onUpdateOrderStatus(o.id, e.target.value as any)}
                                className="bg-[#FAF6F0] border border-[#D4AF37]/30 rounded-lg px-2 py-1 text-[11px] font-bold cursor-pointer"
                              >
                                <option value="pending">قيد المعالجة</option>
                                <option value="processing">جاري التجهيز</option>
                                <option value="shipped">تم الشحن</option>
                                <option value="delivered">تم التوصيل</option>
                                <option value="cancelled">ملغي</option>
                              </select>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* INTERACTIONS TAB */}
          {activeTab === 'interactions' && (
            <div className="space-y-6">
              <div>
                <h2 className="font-amiri text-2xl font-bold text-[#1C1C1C]">إدارة التفاعل والردود وكونسيرج الواتساب</h2>
                <p className="text-xs text-[#8B5A2B]">الرد على استفسارات كبار الشخصيات والعملاء</p>
              </div>

              <div className="space-y-4">
                {interactions.map((int) => (
                  <div key={int.id} className="bg-white p-5 rounded-2xl border border-[#D4AF37]/30 shadow-sm">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <span className="font-bold text-sm text-[#1C1C1C]">{int.customerName}</span>
                        {int.customerPhone && <span className="text-xs text-gray-500 mr-3">📞 {int.customerPhone}</span>}
                      </div>
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                        int.status === 'replied' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                      }`}>
                        {int.status === 'replied' ? 'تم الرد' : 'بانتظار الرد'}
                      </span>
                    </div>

                    <div className="bg-[#FAF6F0] p-3 rounded-xl text-xs text-gray-800 mb-3 border border-[#D4AF37]/10">
                      <strong>الموضوع: {int.subject}</strong>
                      <p className="mt-1 text-gray-600">{int.message}</p>
                    </div>

                    {int.adminReply && (
                      <div className="bg-emerald-50 p-3 rounded-xl text-xs text-emerald-900 mb-3 border border-emerald-200">
                        <strong>رد الإدارة الملكية:</strong>
                        <p className="mt-1">{int.adminReply}</p>
                      </div>
                    )}

                    {replyingId === int.id ? (
                      <div className="mt-3 flex gap-2">
                        <input
                          type="text"
                          value={replyText}
                          onChange={(e) => setReplyText(e.target.value)}
                          placeholder="اكتب رد الإدارة هنا..."
                          className="flex-1 px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl text-xs"
                        />
                        <button
                          onClick={() => {
                            onReplyInteraction(int.id, replyText);
                            setReplyingId(null);
                            setReplyText('');
                          }}
                          className="bg-[#D4AF37] text-[#1C1C1C] px-4 py-2 rounded-xl text-xs font-bold"
                        >
                          إرسال الرد
                        </button>
                        <button
                          onClick={() => setReplyingId(null)}
                          className="bg-gray-100 text-gray-600 px-3 py-2 rounded-xl text-xs"
                        >
                          إلغاء
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => { setReplyingId(int.id); setReplyText(int.adminReply || ''); }}
                        className="text-xs font-bold text-[#8B5A2B] hover:text-[#D4AF37] transition-colors"
                      >
                        {int.adminReply ? '✏️ تعديل الرد' : '💬 الرد على الاستفسار'}
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* USERS & RBAC TAB */}
          {activeTab === 'users' && (
            <div className="space-y-6">
              <div>
                <h2 className="font-amiri text-2xl font-bold text-[#1C1C1C]">إدارة الصلاحيات والمستخدمين (RBAC)</h2>
                <p className="text-xs text-[#8B5A2B]">التحكم الكامل بصلاحيات حسابات الإدارة والعملاء</p>
              </div>

              <div className="bg-white rounded-2xl border border-[#D4AF37]/30 shadow-sm overflow-hidden">
                <table className="w-full text-right text-xs">
                  <thead className="bg-[#FAF6F0] text-[#1C1C1C] border-b border-[#D4AF37]/20 font-bold">
                    <tr>
                      <th className="p-4">المستخدم</th>
                      <th className="p-4">البريد الإلكتروني</th>
                      <th className="p-4">الصلاحية / الدور</th>
                      <th className="p-4 text-center">تغيير الصلاحية</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {users.map((u) => (
                      <tr key={u.id} className="hover:bg-gray-50">
                        <td className="p-4 font-bold text-[#1C1C1C] flex items-center gap-2">
                          <span className="w-8 h-8 rounded-full bg-[#D4AF37]/20 text-[#8B5A2B] flex items-center justify-center font-bold">
                            {u.name.charAt(0)}
                          </span>
                          {u.name}
                        </td>
                        <td className="p-4 text-gray-600">{u.email}</td>
                        <td className="p-4">
                          <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${
                            u.role === 'admin' ? 'bg-purple-100 text-purple-800' : 'bg-gray-100 text-gray-800'
                          }`}>
                            {u.role === 'admin' ? '👑 مدير النظام (Admin)' : '👤 عميل ملكي (Customer)'}
                          </span>
                        </td>
                        <td className="p-4 text-center">
                          <select
                            value={u.role}
                            onChange={(e) => onUpdateUserRole(u.id, e.target.value as any)}
                            className="bg-[#FAF6F0] border border-[#D4AF37]/30 rounded-lg px-2 py-1 text-[11px] font-bold cursor-pointer"
                          >
                            <option value="customer">عميل (Customer)</option>
                            <option value="admin">مدير (Admin)</option>
                          </select>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* SETTINGS TAB */}
          {activeTab === 'settings' && (
            <div className="space-y-6">
              <div>
                <h2 className="font-amiri text-2xl font-bold text-[#1C1C1C]">إعدادات الموقع والمتجر الرسمي</h2>
                <p className="text-xs text-[#8B5A2B]">تحديث بيانات الهوية ومعلومات التواصل الرسمية</p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-[#D4AF37]/30 shadow-sm space-y-4 max-w-2xl">
                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">اسم المتجر</label>
                  <input
                    type="text"
                    value={settingsForm.storeName}
                    onChange={(e) => setSettingsForm({ ...settingsForm, storeName: e.target.value })}
                    className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs font-bold"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">عنوان المتجر والعنوان الجغرافي</label>
                  <input
                    type="text"
                    value={settingsForm.address}
                    onChange={(e) => setSettingsForm({ ...settingsForm, address: e.target.value })}
                    className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">رقم الهاتف الرسمي</label>
                    <input
                      type="text"
                      value={settingsForm.phone}
                      onChange={(e) => setSettingsForm({ ...settingsForm, phone: e.target.value })}
                      className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">البريد الإلكتروني للإدارة</label>
                    <input
                      type="email"
                      value={settingsForm.email}
                      onChange={(e) => setSettingsForm({ ...settingsForm, email: e.target.value })}
                      className="w-full px-3 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs"
                    />
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100 flex justify-end">
                  <button
                    onClick={() => {
                      onUpdateSettings(settingsForm);
                      alert('تم حفظ إعدادات المتجر بنجاح!');
                    }}
                    className="bg-[#D4AF37] hover:bg-[#c5a059] text-[#1C1C1C] px-6 py-2.5 rounded-xl text-xs font-bold shadow-sm"
                  >
                    حفظ التعديلات العامة
                  </button>
                </div>
              </div>
            </div>
          )}

        </main>
      </div>

    </div>
  );
};
