export type Resource = {
  id: string;
  title: string;
  url: string;
  source: "wechat" | "bilibili" | "youtube" | "website";
  author: string;
  date: string;
  note?: string;
  tags: string[];
};

export const resources: Resource[] = [
  {
    id: "1",
    title: "吴恩达 Prompt Engineering 课程",
    url: "https://www.deeplearning.ai/short-courses/chatgpt-prompt-engineering-for-developers/",
    source: "website",
    author: "Andrew Ng & OpenAI",
    date: "2024-12-01",
    note: "入门 Prompt Engineering 的最佳免费课程，1.5 小时就能看完。",
    tags: ["Prompt", "入门"],
  },
  {
    id: "2",
    title: "3Blue1Brown - 神经网络系列",
    url: "https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi",
    source: "youtube",
    author: "3Blue1Brown",
    date: "2024-11-15",
    note: "可视化讲解神经网络原理，看完对深度学习的直觉会好很多。",
    tags: ["深度学习", "可视化"],
  },
  {
    id: "3",
    title: "Andrej Karpathy - Let's build GPT",
    url: "https://www.youtube.com/watch?v=kCc8FmEb1nY",
    source: "youtube",
    author: "Andrej Karpathy",
    date: "2024-10-20",
    note: "从零手搓 GPT，Karpathy 大神亲自教学，质量极高。",
    tags: ["LLM", "实战"],
  },
  {
    id: "4",
    title: "李沐 - 动手学深度学习",
    url: "https://space.bilibili.com/1567748478",
    source: "bilibili",
    author: "李沐",
    date: "2024-09-10",
    note: "中文最好的深度学习系统教程，理论+代码并重。",
    tags: ["深度学习", "系统学习"],
  },
];
