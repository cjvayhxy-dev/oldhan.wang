import { Hero } from "@/components/home/Hero";
import { FeaturedNotes } from "@/components/home/FeaturedNotes";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedNotes />
      <FeaturedProjects />
    </>
  );
}
