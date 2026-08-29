import ReactMarkdown from "react-markdown";
import type { Components } from "react-markdown";
import remarkGfm from "remark-gfm";

// Shared Markdown renderer for guide-style content, styled to match the site.
const components: Components = {
  h2: ({ children }) => (
    <h2 className="font-serif text-2xl md:text-3xl font-medium text-warm-text leading-tight mt-16 mb-6">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="font-serif text-xl font-medium text-warm-text mt-10 mb-4">
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="text-warm-muted leading-[1.9] mb-6">{children}</p>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal pl-6 space-y-3 mb-6 text-warm-muted leading-[1.9] marker:text-warm-accent">
      {children}
    </ol>
  ),
  ul: ({ children }) => (
    <ul className="list-disc pl-6 space-y-3 mb-6 text-warm-muted leading-[1.9] marker:text-warm-accent">
      {children}
    </ul>
  ),
  li: ({ children }) => <li className="pl-1">{children}</li>,
  blockquote: ({ children }) => (
    <blockquote className="border-l-2 border-warm-accent bg-cream-dark/60 rounded-r-md px-5 py-1 my-6 text-warm-text [&_p]:text-warm-text [&_p]:mb-0 [&_p]:leading-[1.7]">
      {children}
    </blockquote>
  ),
  code: ({ children }) => (
    <code className="bg-cream-dark rounded px-1.5 py-0.5 text-[0.88em] font-mono text-warm-text break-words">
      {children}
    </code>
  ),
  // Fenced blocks scroll horizontally inside their own box. Without this a single
  // long line pushes the whole page wide on mobile.
  pre: ({ children }) => (
    <pre className="bg-cream-dark rounded-md px-4 py-3 my-6 overflow-x-auto text-[0.88em] leading-[1.7] [&_code]:bg-transparent [&_code]:p-0 [&_code]:whitespace-pre">
      {children}
    </pre>
  ),
  hr: () => <hr className="border-warm-border my-12" />,
  strong: ({ children }) => (
    <strong className="font-medium text-warm-text">{children}</strong>
  ),
  em: ({ children }) => <em className="italic">{children}</em>,
  a: ({ href, children }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-warm-accent underline underline-offset-4 hover:opacity-80"
    >
      {children}
    </a>
  ),
};

export default function GuideBody({ content }: { content: string }) {
  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
      {content}
    </ReactMarkdown>
  );
}
