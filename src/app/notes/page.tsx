import { PageHeader } from "@/components/ui/PageHeader";
import { NoteCard } from "@/components/notes/NoteCard";
import { getAllNotes } from "@/lib/mdx";

export const metadata = {
  title: "笔记",
  description: "老韩的 AI 学习笔记，记录从零开始的探索过程。",
};

export default function NotesPage() {
  const notes = getAllNotes();

  return (
    <>
      <PageHeader
        title="笔记"
        description="AI 学习笔记，记录从零开始的探索过程。"
        color="green"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {notes.map((note, i) => (
          <NoteCard key={note.slug} note={note} index={i} />
        ))}
      </div>

      {notes.length === 0 && (
        <p className="text-text-muted text-center py-20">还没有笔记，快来写第一篇吧。</p>
      )}
    </>
  );
}
