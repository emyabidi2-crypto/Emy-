import React, { useState, useEffect } from 'react';
import { Currency, Product, CartItem, User, Order, Interaction, SiteSettings } from './types';
import { PRODUCTS, CURRENCY_RATES } from './data/mockData';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductCatalog } from './components/ProductCatalog';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CartDrawer } from './components/CartDrawer';
import { StrategyBlueprint } from './components/StrategyBlueprint';
import { TrustSection } from './components/TrustSection';
import { StorySection } from './components/StorySection';
import { BlogSection } from './components/BlogSection';
import { WhatsAppModal } from './components/WhatsAppModal';
import { Footer } from './components/Footer';
import { AuthModal } from './components/AuthModal';
import { AdminDashboard } from './components/admin/AdminDashboard';

export default function App() {
  const [activeView, setActiveView] = useState<'storefront' | 'blueprint'>('storefront');
  const [currency, setCurrency] = useState<Currency>('USD');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isWhatsAppOpen, setIsWhatsAppOpen] = useState<boolean>(false);

  // Auth & Admin States
  const [isAuthOpen, setIsAuthOpen] = useState<boolean>(false);
  const [isAdminOpen, setIsAdminOpen] = useState<boolean>(false);

  // Pre-seeded Users
  const [users, setUsers] = useState<User[]>([
    { id: 'u-1', name: 'المدير الملكي', email: 'admin@kataban.com', role: 'admin', createdAt: '2026-01-01' },
    { id: 'u-2', name: 'الشيخ محمد بن راشد', email: 'user@kataban.com', role: 'customer', createdAt: '2026-02-15' }
  ]);
  const [currentUser, setCurrentUser] = useState<User | null>(users[0]); // default logged in as admin for easy testing

  // Products state with localStorage persistence
  const [products, setProducts] = useState<Product[]>(() => {
    const saved = localStorage.getItem('kataban_products');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { /* ignore */ }
    }
    return PRODUCTS;
  });

  useEffect(() => {
    localStorage.setItem('kataban_products', JSON.stringify(products));
  }, [products]);

  // Orders state with localStorage persistence
  const [orders, setOrders] = useState<Order[]>(() => {
    const saved = localStorage.getItem('kataban_orders');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { /* ignore */ }
    }
    return [
      {
        id: '1082',
        customerName: 'الشيخ محمد بن راشد',
        customerEmail: 'user@kataban.com',
        items: [{ product: PRODUCTS[0], quantity: 2 }],
        totalAmount: 560,
        currency: 'USD',
        status: 'shipped',
        shippingAddress: 'دبي، الإمارات العربية المتحدة',
        createdAt: '2026-08-28'
      }
    ];
  });

  useEffect(() => {
    localStorage.setItem('kataban_orders', JSON.stringify(orders));
  }, [orders]);

  // Interactions state
  const [interactions, setInteractions] = useState<Interaction[]>(() => {
    const saved = localStorage.getItem('kataban_interactions');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { /* ignore */ }
    }
    return [
      {
        id: 'int-1',
        customerName: 'أبو فهد القحطاني',
        customerPhone: '+966500000000',
        subject: 'استفسار عن عسل السدر الملكي',
        message: 'هل يتوفر شحن خاص مبرد إلى الرياض؟',
        status: 'unread',
        createdAt: '2026-08-29'
      }
    ];
  });

  useEffect(() => {
    localStorage.setItem('kataban_interactions', JSON.stringify(interactions));
  }, [interactions]);

  // Site Settings state
  const [settings, setSettings] = useState<SiteSettings>(() => {
    const saved = localStorage.getItem('kataban_settings');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { /* ignore */ }
    }
    return {
      storeName: 'قتبان وذي ريدان | Kataban & Dhu Raydan',
      storeSubtitle: 'متجر الفخامة اليمنية الأصيلة',
      phone: '+967770805627',
      email: 'emyabidi2@gmail.com',
      address: 'اليمن، صنعاء، شارع تعز',
      currency: 'USD',
      maintenanceMode: false,
      allowRegistrations: true
    };
  });

  useEffect(() => {
    localStorage.setItem('kataban_settings', JSON.stringify(settings));
  }, [settings]);

  // Handlers
  const handleLogin = (email: string, roleHint?: 'admin' | 'customer') => {
    const found = users.find(u => u.email === email);
    if (found) {
      setCurrentUser(found);
    } else {
      const newUser: User = {
        id: `u-${Date.now()}`,
        name: email.split('@')[0],
        email,
        role: roleHint || 'customer',
        createdAt: new Date().toISOString()
      };
      setUsers([...users, newUser]);
      setCurrentUser(newUser);
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setIsAdminOpen(false);
  };

  const handleAddToCart = (product: Product, quantity: number = 1) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
    } else {
      setCartItems((prev) =>
        prev.map((item) =>
          item.product.id === productId ? { ...item, quantity } : item
        )
      );
    }
  };

  const handleRemoveItem = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) return;
    const total = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
    const newOrder: Order = {
      id: `${Math.floor(1000 + Math.random() * 9000)}`,
      customerName: currentUser ? currentUser.name : 'زائر ملكي',
      customerEmail: currentUser ? currentUser.email : 'guest@kataban.com',
      items: [...cartItems],
      totalAmount: total,
      currency: currency,
      status: 'pending',
      shippingAddress: settings.address,
      createdAt: new Date().toISOString().slice(0, 10)
    };
    setOrders([newOrder, ...orders]);
    setCartItems([]);
    alert(`تم تأكيد طلبك الملكي بنجاح! رقم الطلب #${newOrder.id}`);
  };

  const navigateSection = (sectionId: string) => {
    setActiveView('storefront');
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#FAF6F0] text-[#1C1C1C] font-['Tajawal',sans-serif] flex flex-col selection:bg-[#D4AF37]/30">
      
      {/* Header */}
      <Header
        activeView={activeView}
        setActiveView={setActiveView}
        currency={currency}
        setCurrency={setCurrency}
        cartCount={cartCount}
        openCart={() => setIsCartOpen(true)}
        openWhatsApp={() => setIsWhatsAppOpen(true)}
        onNavigateSection={navigateSection}
        currentUser={currentUser}
        onOpenAuth={() => setIsAuthOpen(true)}
        onLogout={handleLogout}
        onOpenAdmin={() => setIsAdminOpen(true)}
      />

      {/* Main Content View */}
      <main className="flex-1">
        {activeView === 'blueprint' ? (
          <StrategyBlueprint />
        ) : (
          <>
            <Hero
              onExplore={() => navigateSection('products')}
              onTrust={() => navigateSection('trust')}
            />
            <ProductCatalog
              currency={currency}
              onSelectProduct={(product) => setSelectedProduct(product)}
              onAddToCart={(product) => handleAddToCart(product, 1)}
            />
            <TrustSection />
            <StorySection />
            <BlogSection />
          </>
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavigateSection={navigateSection}
        openWhatsApp={() => setIsWhatsAppOpen(true)}
      />

      {/* Product Detail Modal (PDP) */}
      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          currency={currency}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={(product, qty) => {
            handleAddToCart(product, qty);
            setSelectedProduct(null);
            setIsCartOpen(true);
          }}
        />
      )}

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        currency={currency}
        onCheckout={handleCheckout}
      />

      {/* WhatsApp Concierge Modal */}
      <WhatsAppModal
        isOpen={isWhatsAppOpen}
        onClose={() => setIsWhatsAppOpen(false)}
      />

      {/* Authentication Modal */}
      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        onLogin={handleLogin}
      />

      {/* Admin Dashboard */}
      {isAdminOpen && currentUser && currentUser.role === 'admin' && (
        <AdminDashboard
          currentUser={currentUser}
          products={products}
          onAddProduct={(prod) => setProducts([prod, ...products])}
          onUpdateProduct={(prod) => setProducts(products.map(p => p.id === prod.id ? prod : p))}
          onDeleteProduct={(id) => setProducts(products.filter(p => p.id !== id))}
          orders={orders}
          onUpdateOrderStatus={(id, status) => setOrders(orders.map(o => o.id === id ? { ...o, status } : o))}
          interactions={interactions}
          onReplyInteraction={(id, reply) => setInteractions(interactions.map(i => i.id === id ? { ...i, adminReply: reply, status: 'replied' } : i))}
          users={users}
          onUpdateUserRole={(userId, role) => setUsers(users.map(u => u.id === userId ? { ...u, role } : u))}
          settings={settings}
          onUpdateSettings={(newSet) => setSettings(newSet)}
          onClose={() => setIsAdminOpen(false)}
        />
      )}

    </div>
  );
}
