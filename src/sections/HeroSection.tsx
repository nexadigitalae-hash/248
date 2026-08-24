"use client";

import { motion } from "framer-motion";
import {
  FileCheck2,
  ArrowLeft,
  HelpCircle,
  ShieldCheck,
  Lock,
  Clock,
  CheckCircle2,
} from "lucide-react";

interface HeroSectionProps {
  onPrimaryClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export function HeroSection({ onPrimaryClick }: HeroSectionProps) {
  return (
    <section
      aria-label="الرئيسية - تقديم الشكوى"
      className="relative overflow-hidden bg-background py-20 md:py-28 lg:py-32 border-b border-border/50"
    >
      {/* 1. خلفية الصورة مع طبقة الشفافية الخفيفة */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <img
          src="/hh.jpg"
          alt="خلفية منصة حماية المستهلك"
          className="h-full w-full object-cover object-center"
        />
        {/* طبقة تغشية داكنة خفيفة جداً لضمان مقروئية النصوص */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
        {/* تدرج خفيف في الأسفل فقط للدمج بسلاسة مع الصفحة */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-black/20" />
      </div>

      <div className="container-page relative z-10 max-w-5xl mx-auto px-4 text-center">
        
    
        {/* العنوان الرئيسي */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-6 text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.2] drop-shadow-md"
          style={{ fontFamily: "'Amiri', 'Noto Naskh Arabic', serif" }}
        >
          احمِ حقوقك ..{" "}
          <span className="relative inline-block text-[#E6CA85]">
            ووثّق شكواك
            <svg
              aria-hidden="true"
              viewBox="0 0 120 12"
              preserveAspectRatio="none"
              className="absolute -bottom-2 left-0 h-3 w-full text-[#C7A24C]"
            >
              <path
                d="M2 8 C 30 2, 90 2, 118 8"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </motion.h1>

        {/* النص الوصفي */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 max-w-2xl mx-auto text-base sm:text-xl text-white/90 leading-relaxed font-medium drop-shadow-sm"
        >
منصة رقمية لتقديم شكاوى المستهلكين وملاحظاتهم بسهولة، مع تنظيم بيانات الشكوى وتسهيل متابعة الطلب من مكان واحد.        </motion.p>

        {/* الأزرار CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#complaint-form"
            onClick={onPrimaryClick}
            className="group relative inline-flex items-center justify-center gap-3 w-full sm:w-auto rounded-xl bg-[#0F3B39] px-8 py-4 text-base font-bold text-white shadow-xl transition-all duration-200 hover:bg-[#144d4a] active:scale-[0.98]"
          >
            <FileCheck2 className="h-5 w-5 text-[#C7A24C]" />
            <span>تقديم شكوى الآن</span>
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          </a>

          <a
            href="#how-it-works"
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto rounded-xl border border-white/30 bg-black/30 backdrop-blur-md px-7 py-4 text-base font-semibold text-white transition-all duration-200 hover:bg-black/50 active:scale-[0.98]"
          >
            <HelpCircle className="h-4 w-4 text-white/80" />
            <span>كيف نعمل؟</span>
          </a>
        </motion.div>

        {/* شريط الضمانات بأسلوب بسيط ولون زيتي بالنص */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-14 pt-8 border-t border-white/20 max-w-3xl mx-auto flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm font-bold text-[#0F3B39]"
        >
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-[#C7A24C]" />
            <span>خدمة مجانية بالكامل</span>
          </div>

          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-[#C7A24C]" />
            <span>بدء المعالجة خلال 24 ساعة</span>
          </div>

          <div className="flex items-center gap-2">
            <Lock className="h-4 w-4 text-[#C7A24C]" />
            <span>بيانات مشفّرة وآمنة</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}