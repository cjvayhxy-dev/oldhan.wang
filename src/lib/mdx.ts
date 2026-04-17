import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type NoteMeta = {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  summary: string;
  readTime: string;
  featured: boolean;
  color: string;
};

const NOTES_DIR = path.join(process.cwd(), "src/content/notes");

export function getAllNotes(): NoteMeta[] {
  if (!fs.existsSync(NOTES_DIR)) return [];

  const files = fs.readdirSync(NOTES_DIR).filter((f) => f.endsWith(".mdx"));

  const notes = files.map((file) => {
    const slug = file.replace(/\.mdx$/, "");
    const raw = fs.readFileSync(path.join(NOTES_DIR, file), "utf-8");
    const { data } = matter(raw);

    return {
      slug,
      title: data.title || slug,
      date: data.date || "2026-01-01",
      tags: data.tags || [],
      summary: data.summary || "",
      readTime: data.readTime || "",
      featured: data.featured || false,
      color: data.color || "green",
    } as NoteMeta;
  });

  return notes.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getFeaturedNotes(): NoteMeta[] {
  return getAllNotes().filter((n) => n.featured);
}

export function getNoteBySlug(slug: string): { meta: NoteMeta; content: string } | null {
  const filePath = path.join(NOTES_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);

  return {
    meta: {
      slug,
      title: data.title || slug,
      date: data.date || "2026-01-01",
      tags: data.tags || [],
      summary: data.summary || "",
      readTime: data.readTime || "",
      featured: data.featured || false,
      color: data.color || "green",
    },
    content,
  };
}

export function getAllNoteSlugs(): string[] {
  if (!fs.existsSync(NOTES_DIR)) return [];
  return fs
    .readdirSync(NOTES_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}
