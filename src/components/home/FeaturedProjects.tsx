import Link from "next/link";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { projects } from "@/data/projects";

export function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured);

  if (featured.length === 0) return null;

  return (
    <section className="py-12">
      <div className="flex items-center gap-3 mb-3">
        <span className="w-3 h-3 rounded-full bg-tertiary" />
        <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold">
          项目工程
        </h2>
      </div>
      <div className="h-px w-full bg-tertiary mb-8" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {featured.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link
          href="/projects"
          className="text-text-muted hover:text-tertiary transition-colors text-sm font-[family-name:var(--font-space-grotesk)]"
        >
          查看全部项目 &rarr;
        </Link>
      </div>
    </section>
  );
}
