import { PageHeader } from "@/components/ui/PageHeader";
import Image from "next/image";

export const metadata = {
  title: "关于",
  description: "关于老韩 — 前大学老师，现在猛学 AI。",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="关于我"
        description="一个正在经历认知重构的人。"
        color="yellow"
      />

      <div className="max-w-3xl space-y-8">
        {/* Avatar + intro */}
        <div className="flex flex-col sm:flex-row items-start gap-8">
          <div className="w-28 h-28 rounded-full overflow-hidden shrink-0 border-2 border-accent">
            <Image
              src="/images/avatar.jpg"
              alt="老韩"
              width={112}
              height={112}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold font-[family-name:var(--font-space-grotesk)]">
              老韩
            </h2>
            <p className="text-text-muted leading-relaxed">
              前大学老师，2024 年底裸辞，回到成都，开始零基础转行 AI。
              <br />
              不是天才，不是富二代，就是一个觉得 AI 会改变世界、然后决定 all in 的普通人。
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="space-y-6">
          <h3 className="text-lg font-semibold font-[family-name:var(--font-space-grotesk)] text-accent">
            时间线
          </h3>

          <div className="border-l-2 border-border pl-6 space-y-6">
            {[
              {
                time: "2026 年初",
                title: "开始用 AI 做产品",
                desc: "做了小红苕 App、语音记账等项目，用 AI 辅助全栈开发。",
              },
              {
                time: "2025 年中",
                title: "系统学习 AI",
                desc: "从 Prompt Engineering 到 LLM 原理，从吴恩达课程到 Karpathy 的 Let's build GPT。",
              },
              {
                time: "2024 年底",
                title: "裸辞，回成都",
                desc: "告别了稳定的大学教职，决定投身 AGI 浪潮。这可能是我做过最疯狂的决定。",
              },
              {
                time: "2020-2024",
                title: "大学老师",
                desc: "在高校教书，教的是传统课程，但心里一直在关注科技前沿。",
              },
            ].map((item) => (
              <div key={item.time} className="relative">
                <div className="absolute -left-[31px] top-1 w-3 h-3 rounded-full bg-border" />
                <p className="text-xs text-text-muted mb-1">{item.time}</p>
                <h4 className="font-semibold text-text-main mb-1">{item.title}</h4>
                <p className="text-text-muted text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold font-[family-name:var(--font-space-grotesk)] text-accent">
            找到我
          </h3>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://www.xiaohongshu.com/user/profile/67e7d670000000000303271b"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg border border-border text-text-muted hover:text-tertiary hover:border-tertiary transition-colors text-sm"
            >
              小红书
            </a>
            <a
              href="https://github.com/bigmouth-han"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg border border-border text-text-muted hover:text-text-main hover:border-text-main transition-colors text-sm"
            >
              GitHub
            </a>
            <a
              href="mailto:hi@oldhan.wang"
              className="px-4 py-2 rounded-lg border border-border text-text-muted hover:text-secondary hover:border-secondary transition-colors text-sm"
            >
              hi@oldhan.wang
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
