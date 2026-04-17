import { themeColors, type ThemeColor } from "@/lib/utils";

export function PageHeader({
  title,
  description,
  color = "green",
}: {
  title: string;
  description?: string;
  color?: ThemeColor;
}) {
  const c = themeColors[color];
  return (
    <div className="mb-10">
      <div className="flex items-center gap-3 mb-3">
        <span
          className="w-3 h-3 rounded-full"
          style={{ backgroundColor: c }}
        />
        <h1 className="font-[family-name:var(--font-space-grotesk)] text-3xl font-bold text-text-main">
          {title}
        </h1>
      </div>
      <div className="h-px w-full" style={{ backgroundColor: c }} />
      {description && (
        <p className="mt-4 text-text-muted text-lg">{description}</p>
      )}
    </div>
  );
}
