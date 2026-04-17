"use client";

import Link from "next/link";
import { useState } from "react";
import { themeColors, type ThemeColor } from "@/lib/utils";

const colorKeys = Object.keys(themeColors) as ThemeColor[];

export function ColorfulLink({
  href,
  children,
  className = "",
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}) {
  const [color, setColor] = useState<string | undefined>(undefined);

  const handleMouseEnter = () => {
    const randomKey = colorKeys[Math.floor(Math.random() * colorKeys.length)];
    setColor(themeColors[randomKey]);
  };

  const handleMouseLeave = () => {
    setColor(undefined);
  };

  const props = {
    className: `transition-colors duration-200 ${className}`,
    style: { color: color || undefined },
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
  };

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} {...props}>
      {children}
    </Link>
  );
}
