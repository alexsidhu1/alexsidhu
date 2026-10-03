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
  // Standalone images. Spans keep the markup valid inside the wrapping <p>.
  img: ({ src, alt }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={typeof src === "string" ? src : undefined}
      alt={alt ?? ""}
      loading="lazy"
      className="block w-full rounded-xl border border-warm-border"
    />
  ),
  // A link wrapping an image, e.g. [![Title](thumb.jpg)](youtube-url),
  // renders as a clickable video thumbnail with a play button.
  a: ({ href, children, node }) =>
    node?.children.some((c) => c.type === "element" && c.tagName === "img") ? (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative block my-2 overflow-hidden rounded-xl shadow-[0_12px_32px_-16px_rgba(28,25,23,0.35)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-warm-accent"
      >
        <span className="block aspect-video [&_img]:h-full [&_img]:object-cover [&_img]:transition-transform [&_img]:duration-300 group-hover:[&_img]:scale-[1.02]">
          {children}
        </span>
        <span
          aria-hidden
          className="absolute inset-0 flex items-center justify-center bg-warm-text/10 transition-colors group-hover:bg-warm-text/20"
        >
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-cream/95 shadow-lg transition-transform group-hover:scale-105">
            <svg viewBox="0 0 24 24" className="ml-1 h-7 w-7 fill-warm-accent">
              <path d="M8 5.5v13a1 1 0 0 0 1.5.86l10.5-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5Z" />
            </svg>
          </span>
        </span>
      </a>
    ) : (
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
