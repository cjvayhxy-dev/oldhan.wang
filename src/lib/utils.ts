export const themeColors = {
  green: "#39FF14",
  blue: "#00D4FF",
  pink: "#FF2D78",
  yellow: "#FFD700",
} as const;

export type ThemeColor = keyof typeof themeColors;

const colorKeys = Object.keys(themeColors) as ThemeColor[];

export function getRandomColor(): ThemeColor {
  return colorKeys[Math.floor(Math.random() * colorKeys.length)];
}

export function getCycleColor(index: number): ThemeColor {
  return colorKeys[index % colorKeys.length];
}

export function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("zh-CN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
}
