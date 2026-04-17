import { PageHeader } from "@/components/ui/PageHeader";
import { resources } from "@/data/resources";
import { formatDate, getCycleColor, themeColors } from "@/lib/utils";

export const metadata = {
  title: "资源",
  description: "老韩收藏的 AI 学习资源推荐。",
};

const sourceLabel: Record<string, string> = {
  wechat: "微信",
  bilibili: "B站",
  youtube: "YouTube",
  website: "网站",
};

export default function ResourcesPage() {
  return (
    <>
      <PageHeader
        title="资源收藏"
        description="我觉得真正有用的 AI 学习资料，持续更新。"
        color="blue"
      />

      <div className="space-y-4">
        {resources.map((r, i) => {
          const colorKey = getCycleColor(i);
          const c = themeColors[colorKey];
          return (
            <a
              key={r.id}
              href={r.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-bg-card border border-border rounded-lg p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#3a3a3a]"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-3">
                    <h3 className="font-semibold text-text-main group-hover:text-white transition-colors">
                      {r.title}
                    </h3>
                    <span
                      className="text-[10px] px-2 py-0.5 rounded border shrink-0"
                      style={{ color: c, borderColor: `${c}50` }}
                    >
                      {sourceLabel[r.source] || r.source}
                    </span>
                  </div>

                  <p className="text-text-muted text-sm">{r.author}</p>

                  {r.note && (
                    <p className="text-text-muted text-sm italic border-l-2 pl-3" style={{ borderColor: `${c}50` }}>
                      {r.note}
                    </p>
                  )}

                  <div className="flex items-center gap-3 text-xs text-text-muted">
                    <span>{formatDate(r.date)}</span>
                    <div className="flex gap-1.5">
                      {r.tags.map((tag) => (
                        <span key={tag} style={{ color: c }}>
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <span className="text-text-muted group-hover:text-text-main transition-colors shrink-0">
                  &rarr;
                </span>
              </div>
            </a>
          );
        })}
      </div>
    </>
  );
}
