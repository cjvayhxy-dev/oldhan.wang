import { themeColors, type ThemeColor } from "@/lib/utils";

export function PixelBadge({
  children,
  color = "yellow",
}: {
  children: React.ReactNode;
  color?: ThemeColor;
}) {
  const c = themeColors[color];
  return (
    <span
      className="inline-block font-[family-name:var(--font-press-start)] text-[10px] px-2 py-1 border rounded"
      style={{
        color: c,
        borderColor: c,
        backgroundColor: `${c}15`,
      }}
    >
      {children}
    </span>
  );
}
