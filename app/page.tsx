import Image from "next/image";
import Link from "next/link";
import Nav from "./components/Nav";
import { posts } from "./lib/posts";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs tracking-[0.2em] uppercase text-warm-muted mb-4">
      {children}
    </p>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-serif text-3xl md:text-4xl font-medium text-warm-text leading-tight">
      {children}
    </h2>
  );
}

function Divider() {
  return (
    <div className="max-w-5xl mx-auto px-6">
      <hr className="border-warm-border" />
    </div>
  );
}

const projects = [
  {
    name: "White Horse Digital",
    year: "2022–present",
    description:
      "A boutique digital studio helping founders and teams build products worth building. Strategy, design, and development — done carefully.",
  },
  {
    name: "Project Placeholder",
    year: "2024",
    description:
      "A brief description of a product, tool, or initiative you built. What it does, who it's for, and why it matters. Be specific — the best descriptions say exactly what the thing is.",
  },
  {
    name: "Project Placeholder",
    year: "2023",
    description:
      "Another project here. Keep it honest and direct. The most compelling project descriptions don't oversell — they just describe the thing clearly and let it speak for itself.",
  },
];

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-AU", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function Home() {
  const latestPosts = posts.slice(0, 3);

  return (
    <>
      <Nav />
      <main className="pt-16">
        {/* ── Hero ── */}
        <section id="home" className="min-h-[92vh] flex items-center">
          <div className="max-w-5xl mx-auto px-6 w-full py-24">
            <SectionLabel>Hello</SectionLabel>
            <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-[96px] font-medium text-warm-text leading-none tracking-tight mb-10">
              Alex
              <br />
              Sidhu
            </h1>
            <p className="text-lg md:text-xl text-warm-muted max-w-md leading-relaxed">
              Thinking deeply about simple things, and building a better future
              — for both myself and the world.
            </p>
          </div>
        </section>

        <Divider />

        {/* ── About ── */}
        <section id="about" className="py-28 md:py-36">
          <div className="max-w-5xl mx-auto px-6">
            <div className="mb-14">
              <SectionLabel>About</SectionLabel>
              <SectionHeading>Who I am</SectionHeading>
            </div>
            <div className="grid md:grid-cols-[220px_1fr] gap-10 md:gap-20 items-start">
              <div className="w-[200px] md:w-full aspect-square overflow-hidden bg-cream-dark">
                <Image
                  src="/alex.jpg"
                  alt="Alex Sidhu"
                  width={440}
                  height={440}
                  priority
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-5 text-warm-muted leading-[1.85]">
                <p>
                  My name is Alex Sidhu. I&apos;m 25 and live in Sydney, with
                  plans to move to the US. I play basketball semi-professionally,
                  and run two businesses. I&apos;m deeply interested (to a fault
                  sometimes) in thinking deeply about simple things and building
                  a better future — for both myself and the world.
                </p>
                <p>
                  I felt like I needed a place to capture my thoughts. I&apos;ve
                  put off doing this for a while because I feel like action and
                  creating great things is better and more respectable than
                  entertaining analytical bourgeois behaviour. But I think deep
                  introspection — putting thoughts to paper, and doing it
                  consistently — is important.
                </p>
                <p className="font-serif text-warm-text text-lg italic">
                  Enjoy.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Divider />

        {/* ── Work ── */}
        <section id="work" className="py-28 md:py-36">
          <div className="max-w-5xl mx-auto px-6">
            <div className="mb-14">
              <SectionLabel>Selected work</SectionLabel>
              <SectionHeading>What I&apos;ve Built</SectionHeading>
            </div>
            <div className="border-t border-warm-border">
              {projects.map((project) => (
                <div
                  key={project.name}
                  className="grid md:grid-cols-[1fr_auto] gap-4 py-8 border-b border-warm-border"
                >
                  <div>
                    <div className="flex items-baseline gap-4 mb-2">
                      <h3 className="font-serif text-xl md:text-2xl text-warm-text">
                        {project.name}
                      </h3>
                      <span className="text-sm text-warm-muted shrink-0">
                        {project.year}
                      </span>
                    </div>
                    <p className="text-warm-muted leading-relaxed max-w-xl text-sm md:text-base">
                      {project.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Divider />

        {/* ── Thoughts preview ── */}
        <section id="thoughts" className="py-28 md:py-36">
          <div className="max-w-5xl mx-auto px-6">
            <div className="flex items-end justify-between mb-14">
              <div>
                <SectionLabel>Writing</SectionLabel>
                <SectionHeading>Thoughts</SectionHeading>
              </div>
              <Link
                href="/thoughts"
                className="text-sm text-warm-accent hover:underline underline-offset-4 shrink-0 mb-1"
              >
                All posts →
              </Link>
            </div>
            <div className="border-t border-warm-border">
              {latestPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/thoughts/${post.slug}`}
                  className="group flex flex-col md:flex-row md:items-baseline gap-2 md:gap-10 py-7 border-b border-warm-border"
                >
                  <span className="text-sm text-warm-muted md:w-40 shrink-0">
                    {formatDate(post.date)}
                  </span>
                  <div>
                    <h3 className="font-serif text-xl text-warm-text group-hover:text-warm-accent transition-colors mb-1">
                      {post.title}
                    </h3>
                    <p className="text-warm-muted text-sm leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <Divider />

        {/* ── Contact ── */}
        <section id="contact" className="py-28 md:py-36">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid md:grid-cols-[220px_1fr] gap-12 md:gap-20">
              <div>
                <SectionLabel>Get in touch</SectionLabel>
                <SectionHeading>Contact</SectionHeading>
              </div>
              <div className="space-y-8">
                <p className="text-warm-muted leading-[1.85] max-w-md">
                  I&apos;m always open to interesting conversations — whether
                  you have a project in mind, a question worth exploring, or
                  just want to say hello.
                </p>
                <div className="space-y-4">
                  <a
                    href="mailto:alex@whitehorsedigital.com.au"
                    className="block text-warm-text hover:text-warm-accent transition-colors font-medium"
                  >
                    alex@whitehorsedigital.com.au
                  </a>
                  <div className="flex gap-6 text-sm">
                    <a
                      href="#"
                      className="text-warm-muted hover:text-warm-text transition-colors"
                    >
                      Twitter
                    </a>
                    <a
                      href="#"
                      className="text-warm-muted hover:text-warm-text transition-colors"
                    >
                      LinkedIn
                    </a>
                    <a
                      href="#"
                      className="text-warm-muted hover:text-warm-text transition-colors"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Footer ── */}
        <footer className="border-t border-warm-border">
          <div className="max-w-5xl mx-auto px-6 py-8 flex items-center justify-between">
            <span className="text-sm text-warm-muted">© 2026 Alex Sidhu</span>
            <a
              href="#home"
              className="text-sm text-warm-muted hover:text-warm-text transition-colors"
            >
              Back to top ↑
            </a>
          </div>
        </footer>
      </main>
    </>
  );
}
