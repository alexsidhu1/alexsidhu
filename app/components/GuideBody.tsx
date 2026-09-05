import ReactMarkdown from "react-markdown";
import type { Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import CodeBlock from "./CodeBlock";

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
  // Fenced blocks get a copy button and scroll horizontally inside their own
  // box, so a long line never pushes the page wide on mobile.
  pre: ({ children }) => <CodeBlock>{children}</CodeBlock>,
  // Tables scroll inside their own box so a wide one never pushes the page
  // sideways on mobile. Header styling matches the site's eyebrow type.
  table: ({ children }) => (
    <div
      className="my-8 overflow-x-auto"
      style={{
        backgroundImage: [
          "linear-gradient(to right, #FAFAF7 40%, rgba(250,250,247,0))",
          "linear-gradient(to left, #FAFAF7 40%, rgba(250,250,247,0))",
          "radial-gradient(farthest-side at 0 50%, rgba(28,25,23,0.22), rgba(28,25,23,0))",
          "radial-gradient(farthest-side at 100% 50%, rgba(28,25,23,0.22), rgba(28,25,23,0))",
        ].join(","),
        backgroundPosition: "0 0, 100% 0, 0 0, 100% 0",
        backgroundSize: "36px 100%, 36px 100%, 14px 100%, 14px 100%",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "local, local, scroll, scroll",
      }}
    >
      <table className="w-full border-collapse text-left">
        {children}
      </table>
    </div>
  ),
  thead: ({ children }) => (
    <thead className="border-b border-warm-border">{children}</thead>
  ),
  tbody: ({ children }) => (
    <tbody className="divide-y divide-warm-border/50">{children}</tbody>
  ),
  th: ({ children }) => (
    <th className="py-3 pr-4 md:pr-6 last:pr-0 align-bottom whitespace-nowrap text-xs tracking-[0.12em] uppercase font-medium text-warm-accent">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="py-4 pr-4 md:pr-6 last:pr-0 align-top text-warm-muted leading-[1.6] [&_a]:font-medium">
      {children}
    </td>
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
