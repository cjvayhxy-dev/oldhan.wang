import Link from "next/link";
import { NoteCard } from "@/components/notes/NoteCard";
import { getFeaturedNotes } from "@/lib/mdx";

export async function FeaturedNotes() {
  const notes = await getFeaturedNotes();

  if (notes.length === 0) return null;

  return (
    <section className="py-12">
      <div className="flex items-center gap-3 mb-3">
        <span className="w-3 h-3 rounded-full bg-primary" />
        <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-bold">
          最新笔记
        </h2>
      </div>
      <div className="h-px w-full bg-primary mb-8" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {notes.slice(0, 3).map((note, i) => (
          <NoteCard key={note.slug} note={note} index={i} />
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link
          href="/notes"
          className="text-text-muted hover:text-primary transition-colors text-sm font-[family-name:var(--font-space-grotesk)]"
        >
          查看全部笔记 &rarr;
        </Link>
      </div>
    </section>
  );
}
