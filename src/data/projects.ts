export type Project = {
  id: string;
  name: string;
  description: string;
  tech: string[];
  url?: string;
  github?: string;
  image?: string;
  status: "live" | "wip" | "planned";
  featured: boolean;
};

export const projects: Project[] = [
  {
    id: "xiaohongshu-safe-work",
    name: "小红苕 App",
    description:
      "一个基于 AI 的安全工作助手，帮助用户高效管理日常安全检查、隐患排查和整改跟踪。",
    tech: ["Next.js", "Python", "LLM", "PostgreSQL"],
    url: "https://github.com/bigmouth-han",
    github: "https://github.com/bigmouth-han",
    status: "live",
    featured: true,
  },
  {
    id: "voice-accounting",
    name: "语音记账 App",
    description:
      "用语音快速记账，AI 自动识别金额和类别，让记账像说话一样简单。",
    tech: ["React Native", "Whisper", "LLM"],
    status: "wip",
    featured: true,
  },
  {
    id: "oldhan-wang",
    name: "oldhan.wang",
    description: "你现在看到的这个网站。个人博客 + 项目展示，从零用 AI 辅助搭建。",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "MDX"],
    url: "https://oldhan.wang",
    github: "https://github.com/bigmouth-han/oldhan.wang",
    status: "live",
    featured: false,
  },
];
