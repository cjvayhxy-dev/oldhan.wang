"use client";

import Link from "next/link";
import { getCycleColor, themeColors, formatDate } from "@/lib/utils";
import type { NoteMeta } from "@/lib/mdx";

export function NoteCard({ note, index }: { note: NoteMeta; index: number }) {
  const colorKey = note.color || getCycleColor(index);
  const c = themeColors[colorKey as keyof typeof themeColors] || themeColors.green;

  return (
    <Link href={`/notes/${note.slug}`} className="group block">
      <article className="bg-bg-card border border-border rounded-lg overflow-hidden transition-all duration-200 group-hover:-translate-y-0.5 group-hover:border-[#3a3a3a]">
        {/* Color bar */}
        <div
          className="h-1 transition-shadow duration-200 group-hover:shadow-[0_0_12px_0_var(--bar-color)]"
          style={{ backgroundColor: c, "--bar-color": c } as React.CSSProperties}
        />

        <div className="p-5 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-text-muted text-xs">{formatDate(note.date)}</span>
            {note.tags?.[0] && (
              <span
                className="text-[10px] px-2 py-0.5 rounded border"
                style={{ color: c, borderColor: `${c}50` }}
              >
                #{note.tags[0]}
              </span>
            )}
          </div>

          <h3 className="font-semibold text-text-main line-clamp-2 group-hover:text-white transition-colors">
            {note.title}
          </h3>

          {note.summary && (
            <p className="text-text-muted text-sm line-clamp-2">{note.summary}</p>
          )}

          {note.readTime && (
            <div className="flex items-center gap-1.5 text-text-muted text-xs">
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: c }} />
              {note.readTime}
            </div>
          )}
        </div>
      </article>
    </Link>
  );
}
