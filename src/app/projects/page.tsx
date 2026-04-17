import { PageHeader } from "@/components/ui/PageHeader";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { projects } from "@/data/projects";

export const metadata = {
  title: "项目",
  description: "老韩用 AI 做的产品和项目。",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        title="项目工程"
        description="用 AI 做产品，把想法变成现实。"
        color="pink"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </>
  );
}
