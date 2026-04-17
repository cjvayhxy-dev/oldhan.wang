export function Footer() {
  return (
    <footer className="border-t border-border py-8 mt-auto">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-3">
        <p className="text-text-muted text-sm">
          &copy; {new Date().getFullYear()} oldhan.wang
        </p>
        <p className="font-[family-name:var(--font-space-grotesk)] text-xs text-text-muted uppercase tracking-widest">
          Built with Next.js &amp; AI &mdash; Keep Striving
        </p>
        <div className="flex justify-center gap-6 text-text-muted">
          <a
            href="https://www.xiaohongshu.com/user/profile/67e7d670000000000303271b"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-tertiary transition-colors text-sm"
          >
            小红书
          </a>
          <a
            href="https://github.com/bigmouth-han"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-text-main transition-colors text-sm"
          >
            GitHub
          </a>
          <a
            href="mailto:hi@oldhan.wang"
            className="hover:text-secondary transition-colors text-sm"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
