import { notFound } from "next/navigation";
import Link from "next/link";
import { getNoteBySlug, getAllNoteSlugs } from "@/lib/mdx";
import { formatDate, themeColors } from "@/lib/utils";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllNoteSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const note = getNoteBySlug(slug);
  if (!note) return {};
  return {
    title: note.meta.title,
    description: note.meta.summary,
  };
}

export default async function NoteDetailPage({ params }: Props) {
  const { slug } = await params;
  const note = getNoteBySlug(slug);

  if (!note) notFound();

  const { meta, content } = note;
  const c = themeColors[(meta.color as keyof typeof themeColors) || "green"];

  return (
    <article className="max-w-3xl mx-auto">
      {/* Back link */}
      <Link
        href="/notes"
        className="text-text-muted hover:text-text-main transition-colors text-sm mb-8 inline-block"
      >
        &larr; 返回笔记列表
      </Link>

      {/* Header */}
      <header className="mb-10">
        <div className="flex flex-wrap gap-2 mb-4">
          {meta.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-0.5 rounded border"
              style={{ color: c, borderColor: `${c}50` }}
            >
              #{tag}
            </span>
          ))}
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-space-grotesk)] mb-4">
          {meta.title}
        </h1>
        <div className="flex items-center gap-4 text-text-muted text-sm">
          <span>{formatDate(meta.date)}</span>
          {meta.readTime && (
            <>
              <span>&middot;</span>
              <span>{meta.readTime}</span>
            </>
          )}
        </div>
      </header>

      {/* Content */}
      <div
        className="prose prose-invert max-w-none
          [&>h1]:font-[family-name:var(--font-space-grotesk)] [&>h1]:text-2xl [&>h1]:font-bold [&>h1]:mt-10 [&>h1]:mb-4
          [&>h2]:font-[family-name:var(--font-space-grotesk)] [&>h2]:text-xl [&>h2]:font-bold [&>h2]:mt-8 [&>h2]:mb-3
          [&>h3]:font-[family-name:var(--font-space-grotesk)] [&>h3]:text-lg [&>h3]:font-semibold [&>h3]:mt-6 [&>h3]:mb-2
          [&>p]:text-text-main [&>p]:leading-relaxed [&>p]:mb-4
          [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-4 [&>ul>li]:text-text-main [&>ul>li]:mb-1
          [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:mb-4 [&>ol>li]:text-text-main [&>ol>li]:mb-1
          [&>blockquote]:border-l-2 [&>blockquote]:pl-4 [&>blockquote]:italic [&>blockquote]:text-text-muted [&>blockquote]:mb-4
          [&>pre]:bg-bg-card [&>pre]:rounded-lg [&>pre]:p-4 [&>pre]:mb-4 [&>pre]:overflow-x-auto
          [&_code]:font-[family-name:var(--font-jetbrains-mono)] [&_code]:text-sm
          [&>p>code]:bg-bg-card [&>p>code]:px-1.5 [&>p>code]:py-0.5 [&>p>code]:rounded [&>p>code]:text-primary
          [&_a]:text-secondary [&_a:hover]:underline
          [&_strong]:text-white [&_strong]:font-semibold"
        dangerouslySetInnerHTML={{ __html: "" }}
      />
      {/* Render MDX content as raw markdown for now */}
      <div
        className="prose prose-invert max-w-none
          [&>h1]:font-[family-name:var(--font-space-grotesk)] [&>h1]:text-2xl [&>h1]:font-bold [&>h1]:mt-10 [&>h1]:mb-4
          [&>h2]:font-[family-name:var(--font-space-grotesk)] [&>h2]:text-xl [&>h2]:font-bold [&>h2]:mt-8 [&>h2]:mb-3
          [&>h3]:font-[family-name:var(--font-space-grotesk)] [&>h3]:text-lg [&>h3]:font-semibold [&>h3]:mt-6 [&>h3]:mb-2
          [&>p]:text-text-main [&>p]:leading-relaxed [&>p]:mb-4
          [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-4
          [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:mb-4
          [&>blockquote]:border-l-2 [&>blockquote]:pl-4 [&>blockquote]:italic [&>blockquote]:text-text-muted
          [&>pre]:bg-bg-card [&>pre]:rounded-lg [&>pre]:p-4 [&>pre]:overflow-x-auto
          [&_code]:font-[family-name:var(--font-jetbrains-mono)] [&_code]:text-sm
          [&_a]:text-secondary [&_a:hover]:underline
          [&_strong]:text-white"
      >
        <MDXContent content={content} />
      </div>
    </article>
  );
}

function MDXContent({ content }: { content: string }) {
  // Simple markdown-to-HTML rendering for MDX content
  const lines = content.split("\n");
  const html = lines
    .map((line) => {
      // Headers
      if (line.startsWith("### ")) return `<h3>${processInline(line.slice(4))}</h3>`;
      if (line.startsWith("## ")) return `<h2>${processInline(line.slice(3))}</h2>`;
      if (line.startsWith("# ")) return `<h1>${processInline(line.slice(2))}</h1>`;
      // Blockquote
      if (line.startsWith("> ")) return `<blockquote><p>${processInline(line.slice(2))}</p></blockquote>`;
      // Unordered list
      if (line.startsWith("- ")) return `<li>${processInline(line.slice(2))}</li>`;
      // Ordered list
      const olMatch = line.match(/^(\d+)\.\s(.*)/);
      if (olMatch) return `<li>${processInline(olMatch[2])}</li>`;
      // Code block markers
      if (line.startsWith("```")) return line.length > 3 ? `<pre><code>` : `</code></pre>`;
      // Empty line
      if (line.trim() === "") return "";
      // Paragraph
      return `<p>${processInline(line)}</p>`;
    })
    .join("\n");

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

function processInline(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/`(.+?)`/g, '<code>$1</code>')
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2">$1</a>');
}
