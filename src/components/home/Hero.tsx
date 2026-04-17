"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="py-16 sm:py-24 flex flex-col-reverse sm:flex-row items-center gap-10 sm:gap-16">
      {/* Text */}
      <div className="flex-1 space-y-6">
        <div className="space-y-2">
          <p className="text-xl sm:text-2xl text-text-muted">
            <span className="line-through decoration-tertiary decoration-2">
              前大学老师
            </span>
          </p>
          <h1 className="text-3xl sm:text-5xl font-bold font-[family-name:var(--font-space-grotesk)] leading-tight">
            现在猛学 AI ⚡
          </h1>
        </div>

        <p className="text-text-muted text-lg leading-relaxed max-w-lg">
          裸辞回成都，零基础转行AI，
          <br />
          用AI做产品，记录一切探索的过程。
        </p>

        <div className="flex gap-4 pt-2">
          <Link
            href="/notes"
            className="px-6 py-3 rounded-lg border-2 border-primary text-primary font-semibold text-sm hover:bg-primary hover:text-bg-main transition-all duration-200 font-[family-name:var(--font-space-grotesk)]"
          >
            看我的笔记 &rarr;
          </Link>
          <Link
            href="/projects"
            className="px-6 py-3 rounded-lg border-2 border-tertiary text-tertiary font-semibold text-sm hover:bg-tertiary hover:text-bg-main transition-all duration-200 font-[family-name:var(--font-space-grotesk)]"
          >
            看我做了啥 &rarr;
          </Link>
        </div>
      </div>

      {/* Avatar */}
      <motion.div
        className="relative shrink-0"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="w-40 h-40 sm:w-52 sm:h-52 rounded-full p-[3px] animate-[spin-slow_6s_linear_infinite] bg-[conic-gradient(#39FF14,#00D4FF,#FF2D78,#FFD700,#39FF14)]">
          <div className="w-full h-full rounded-full bg-bg-main p-1">
            <Image
              src="/images/avatar.jpg"
              alt="老韩"
              width={208}
              height={208}
              className="w-full h-full rounded-full object-cover"
              priority
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
