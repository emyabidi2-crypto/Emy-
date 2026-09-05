import React, { useState } from 'react';
import { BlogPost } from '../types';
import { BLOG_POSTS } from '../data/mockData';
import { BookOpen, Clock, Calendar, ArrowLeft, X } from 'lucide-react';

export const BlogSection: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <section id="blog" className="py-16 sm:py-24 bg-white border-t border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 bg-[#D4AF37]/10 border border-[#D4AF37]/30 px-3 py-1 rounded-full text-xs font-bold text-[#8B5A2B]">
            <BookOpen className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>مدونة التراث والمعرفة (Resource Hub)</span>
          </div>
          <h2 className="font-amiri text-3xl sm:text-4xl font-bold text-[#1C1C1C]">
            حكايات وأسرار من التاريخ اليمني
          </h2>
          <p className="text-sm sm:text-base text-[#1C1C1C]/70">
            مقالات وأبحاث متخصصة حول طرق استخراج العسل، أسرار العقيق اليماني، وتاريخ تجارة البخور واللبان.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <div
              key={post.id}
              onClick={() => setSelectedPost(post)}
              className="group bg-[#FAF6F0] rounded-3xl border border-[#D4AF37]/30 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 right-3 bg-[#1C1C1C]/90 text-[#D4AF37] text-[10px] font-bold px-3 py-1 rounded-full border border-[#D4AF37]/30">
                    {post.category}
                  </span>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                  </div>

                  <h3 className="font-amiri text-xl font-bold text-[#1C1C1C] group-hover:text-[#8B5A2B] transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-xs text-[#1C1C1C]/70 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 flex items-center justify-between text-xs font-bold text-[#8B5A2B]">
                <span>اقرأ المقال كاملاً</span>
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Article Reader Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#FAF6F0] rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-6 border border-[#D4AF37] relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-6 left-6 p-2 rounded-full bg-white hover:bg-gray-100 shadow"
            >
              <X className="w-5 h-5 text-[#1C1C1C]" />
            </button>

            <span className="bg-[#D4AF37]/20 text-[#8B5A2B] text-xs font-bold px-3 py-1 rounded-full">
              {selectedPost.category}
            </span>

            <h2 className="font-amiri text-2xl sm:text-3xl font-bold text-[#1C1C1C]">
              {selectedPost.title}
            </h2>

            <div className="flex items-center gap-4 text-xs text-gray-500 border-b pb-4">
              <span>{selectedPost.date}</span>
              <span>•</span>
              <span>{selectedPost.readTime}</span>
            </div>

            <div className="relative h-64 rounded-2xl overflow-hidden mb-4">
              <img src={selectedPost.image} alt="" className="w-full h-full object-cover" />
            </div>

            <div className="text-sm text-[#1C1C1C]/80 leading-relaxed whitespace-pre-line space-y-4">
              {selectedPost.content}
            </div>

            <div className="pt-4 border-t flex justify-end">
              <button
                onClick={() => setSelectedPost(null)}
                className="bg-[#1C1C1C] text-white px-6 py-2.5 rounded-xl text-xs font-bold"
              >
                إغلاق المقال
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
