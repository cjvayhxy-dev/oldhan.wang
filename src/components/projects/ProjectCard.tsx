import { PixelBadge } from "@/components/ui/PixelBadge";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group bg-bg-card border border-border rounded-lg p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#3a3a3a] relative overflow-hidden">
      {/* Top accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-tertiary" />

      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <div>
            <p className="font-[family-name:var(--font-space-grotesk)] text-xs text-tertiary uppercase tracking-wider mb-1">
              Project
            </p>
            <h3 className="text-xl font-bold text-text-main group-hover:text-white transition-colors">
              {project.name}
            </h3>
          </div>
          {project.status === "wip" && <PixelBadge color="yellow">WIP</PixelBadge>}
          {project.status === "planned" && <PixelBadge color="blue">PLANNED</PixelBadge>}
        </div>

        <p className="text-text-muted text-sm leading-relaxed">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs px-2 py-0.5 rounded border border-border text-text-muted"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-4 pt-2">
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-tertiary hover:underline font-[family-name:var(--font-space-grotesk)]"
            >
              查看项目 &rarr;
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-text-muted hover:text-text-main transition-colors"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
