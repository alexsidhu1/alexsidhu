import Image from "next/image";
import Link from "next/link";
import Nav from "./components/Nav";
import SubscribeForm from "./components/SubscribeForm";
import { getAllPostMeta } from "./lib/feed";

export const revalidate = 300;

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

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-AU", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default async function Home() {
  const latestPosts = (await getAllPostMeta()).slice(0, 3);

  return (
    <>
      <Nav />
      <main className="pt-16">
        {/* ── Hero ── */}
        <section id="home" className="min-h-[92vh] flex items-center">
          <div className="max-w-5xl mx-auto px-6 w-full py-24">
            <div className="grid md:grid-cols-[1fr_auto] gap-12 md:gap-16 items-center">
              <div>
                <SectionLabel>Hey there, I&apos;m</SectionLabel>
                <h1 className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-[96px] font-medium text-warm-text leading-none tracking-tight mb-10">
                  Alex
                  <br />
                  Sidhu
                </h1>
                <p className="text-lg md:text-xl text-warm-muted max-w-md leading-relaxed mb-4">
                  Each week I share a newsletter on everything going on with AI,
                  my business (WhiteHorse AI) and (somewhat) differentiated
                  takes.
                </p>
                <p className="text-base text-warm-text font-medium max-w-md leading-relaxed mb-8">
                  Sign up below to receive it every Monday morning!
                </p>
                <SubscribeForm />
              </div>
              <div className="w-44 sm:w-56 md:w-72 aspect-square overflow-hidden bg-cream-dark shrink-0">
                <Image
                  src="/alexsidhuprofpic.jpeg"
                  alt="Alex Sidhu"
                  width={440}
                  height={440}
                  priority
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <Divider />

        {/* ── About ── */}
        <section id="about" className="py-28 md:py-36">
          <div className="max-w-5xl mx-auto px-6">
            <div className="mb-14">
              <SectionLabel>About</SectionLabel>
              <SectionHeading>About Me</SectionHeading>
            </div>
            <div className="max-w-2xl space-y-5 text-warm-muted leading-[1.85]">
              <p>
                My name is Alex Sidhu. I&apos;m 25 and live in Sydney, with
                plans to move to the US. I play basketball semi-professionally,
                and run two businesses. I&apos;m deeply interested (to a fault
                sometimes) in thinking deeply about simple things and building a
                better future — for both myself and the world.
              </p>
              <p>
                I felt like I needed a place to capture my thoughts. I&apos;ve
                put off doing this for a while because I feel like action and
                creating great things is better and more respectable than
                entertaining analytical bourgeois behaviour. But I think deep
                introspection — putting thoughts to paper, and doing it
                consistently — is important.
              </p>
              <p className="font-serif text-warm-text text-lg italic">Enjoy.</p>
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

        {/* ── Subscribe ── */}
        <section id="subscribe" className="py-28 md:py-36">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid md:grid-cols-[220px_1fr] gap-12 md:gap-20">
              <div>
                <SectionLabel>Newsletter</SectionLabel>
                <SectionHeading>Subscribe</SectionHeading>
              </div>
              <div className="space-y-8">
                <p className="text-warm-muted leading-[1.85] max-w-md">
                  Occasional thoughts on AI, building, and life. No spam, just
                  the writing. Unsubscribe anytime.
                </p>
                <SubscribeForm />
              </div>
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
                    href="mailto:alex@whitehorseai.ai"
                    className="block text-warm-text hover:text-warm-accent transition-colors font-medium"
                  >
                    alex@whitehorseai.ai
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
