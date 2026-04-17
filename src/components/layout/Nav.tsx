"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "笔记", href: "/notes", color: "#39FF14" },
  { label: "项目", href: "/projects", color: "#FF2D78" },
  { label: "资源", href: "/resources", color: "#00D4FF" },
  { label: "关于", href: "/about", color: "#FFD700" },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bg-main/80 backdrop-blur-md border-b border-border">
      <nav className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-[family-name:var(--font-press-start)] text-primary text-xs sm:text-sm hover:opacity-80 transition-opacity">
          oldhan.wang
          <span className="animate-[blink_1s_step-end_infinite]">_</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden sm:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className="relative px-4 py-2 rounded-full font-[family-name:var(--font-space-grotesk)] text-sm transition-all duration-200"
                style={{
                  backgroundColor: isActive ? `${item.color}20` : "transparent",
                  color: isActive ? item.color : "#F0F0F0",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.backgroundColor = `${item.color}15`;
                    e.currentTarget.style.color = item.color;
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.color = "#F0F0F0";
                  }
                }}
              >
                {item.label}
              </Link>
            );
          })}
          <a
            href="https://github.com/cjvayhxy-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 px-3 py-2 text-text-muted hover:text-text-main transition-colors font-mono text-sm"
          >
            [&gt;_]
          </a>
        </div>

        {/* Mobile bottom tab bar is handled below */}
      </nav>

      {/* Mobile bottom tab bar */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 bg-bg-main/90 backdrop-blur-md border-t border-border z-50">
        <div className="flex justify-around items-center h-14">
          {navItems.map((item) => {
            const isActive = pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex flex-col items-center gap-0.5 text-xs transition-colors"
                style={{ color: isActive ? item.color : "#888888" }}
              >
                <span className="text-lg">{item.label === "笔记" ? "📝" : item.label === "项目" ? "🚀" : item.label === "资源" ? "📦" : "👤"}</span>
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
}
