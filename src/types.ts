export interface Product {
  id: string;
  name: string;
  category: 'honey' | 'aqeeq' | 'aromas' | 'bundles';
  price: number; // in USD base
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  image: string;
  images: string[];
  description: string;
  origin: string;
  benefits: string[];
  labCertificate?: {
    certId: string;
    date: string;
    labName: string;
    purityScore: string;
    pdfUrl: string;
  };
  has360View?: boolean;
  isBestseller?: boolean;
  isRoyal?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedOption?: string; // e.g. Ring Size or Jar Size
}

export type Currency = 'USD' | 'SAR' | 'EUR' | 'AED';

export interface CurrencyRate {
  code: Currency;
  symbol: string;
  rateToUSD: number;
  nameAr: string;
}

export type UserRole = 'admin' | 'customer';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
  permissions?: string[];
  createdAt: string;
}

export interface Order {
  id: string;
  customerName: string;
  customerEmail: string;
  items: CartItem[];
  totalAmount: number;
  currency: Currency;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  shippingAddress: string;
  createdAt: string;
}

export interface Interaction {
  id: string;
  customerName: string;
  customerPhone?: string;
  message: string;
  subject: string;
  status: 'unread' | 'replied' | 'resolved';
  adminReply?: string;
  createdAt: string;
}

export interface SiteSettings {
  storeName: string;
  storeSubtitle: string;
  phone: string;
  email: string;
  address: string;
  currency: Currency;
  maintenanceMode: boolean;
  allowRegistrations: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  excerpt: string;
  content: string;
  image: string;
}

export interface RoadmapPhase {
  week: string;
  phase: string;
  title: string;
  tasks: string[];
  deliverables: string;
}

