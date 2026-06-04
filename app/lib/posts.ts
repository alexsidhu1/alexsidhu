export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
};

export const posts: Post[] = [
  {
    slug: "newsletter-01",
    title: "Newsletter No. 01",
    date: "2026-06-04",
    excerpt:
      "Five core offerings now live, the AI tools I actually use (and the hype I'm not buying), and why the NDIS budget is really a measure of the care we've outsourced.",
    content: `## 1. New in the business

So this week was a cool week.

We have now officially moved into 5 core offerings.

1. We've launched our fully autonomous executive assistant: 1-click OpenClaw. Connect all your business apps and it can run 24/7 to do (pretty much) what your heart desires. Think daily reporting, summary of the day and week's work, Meta ads analysis, website deployment and updates. Plus you can connect it via your phone and get it set up all in less than 10 minutes. It will also run an accountability check each Sunday to see how well you're performing compared to the goals you laid out. We're calling it AxleClaw and having beta users test it currently. Think of it as a second brain for you. I use it to just dump voice notes in and then get it to action items.
2. We audit companies. Essentially we'll go in, interview people, try to understand where inefficiencies might lie and then roadmap out what an AI implementation plan could look like for them.
3. Builds. We then build out the audits we roadmap for people, working through a phased plan to ensure no one is too overloaded.
4. Optimise. We implement self-learning feedback into the agents so they can recursively improve over time. Think of edge cases that might occur, things that go wrong. We give our clients the ability to give feedback on the agents and then have them improve themselves over time. Getting smarter the more they are used in the business.
5. Education. We've started building out workshops for companies to help them understand what AI is, how it can be used effectively and what it can look like long term. At first we were super hesitant about this but after more and more demand, we have started doing these. They're typically 3 hours long with secondary drop-down hours for Q&A and build fixes with people.

We may have in-person live workshops for teaching people how to use Claude Code, Cowork, Codex coming over the next week or so.

So, things are moving.

2 employees (will be intro'd in the next newsletter).

One thing that is quite funny is ensuring we constantly iterate on our processes. For example, onboarding for us was too manual, so we're streamlining it and ensuring that this is an agentic workflow, with the agreements, contract and timeline plus agent build dashboard all one click away for our users.

So, things are moving. It's exciting and nice to be able to ground out the core offerings that people are wanting.

Big focus moving forward is productising everything and doing more content, sharing findings.

---

## 2. What's New in AI (and What I'm Actually Using)

Most of what gets hyped in AI is theatre. Some of it is genuinely good.

I run two businesses on these tools every day, so I've got a decent read on which is which. Here's where I've landed.

### The models

Opus 4.8 is Anthropic's current flagship, and to me the upgrade is real, not a benchmark-chasing point release. The headline for me isn't the coding scores (though they jumped), it's reliability. I notice it flags when it's unsure instead of bluffing, and I'm catching far fewer quiet bugs sitting in its own code. If you've ever had a model hand you confidently broken work, you'll feel the difference straight away. They also shipped effort control, where I decide how hard it thinks on a given task, plus "dynamic workflows" in Claude Code: it plans a big job and fires off a swarm of parallel subagents to chew through it (I use this for codebase-scale migrations). Fast mode got cheaper and quicker too. I'm babysitting it far less.

Codex went all-in-one, and I think that's a bigger story than any single model release. OpenAI turned it from a coding tool into a general work agent. It can now drive your computer, use the everyday apps on your machine, review PRs, run its own browser to check the frontend it just built, remember your preferences, and take on repeatable jobs. They've since bolted on role-specific plugins and shareable hosted apps. To me it's no longer "the thing that writes functions." It's a desktop operator, and I'd look at it even if you don't write code.

### My actual workflow

Ditch Claude Desktop. Use Claude Code in VS Code. I want to like the desktop app. I can't. It keeps breaking, and the thing that really winds me up is you can't easily see your skills. In VS Code I can watch which skills are being created and track them as they're built. That visibility alone is worth the switch to me. The desktop app feels like a demo; Claude Code feels like a workbench.

Projects in Claude have quietly become part of my daily setup. The bit I love most is the memory-condensing: it holds onto the context that matters and drops the noise, so I'm not re-explaining myself every session.

But for 24/7, do-it-while-I-sleep work, I still lean on OpenClaw. It's there whenever I want it to go and do something for me, no hand-holding. I find Hermes solid and it breaks less often, but it's really built for single-agent work. OpenClaw's multi-agent setup is far easier for me to configure. The catch is the one everyone hits with multi-agent: the agents don't share enough context, so they drift. I haven't seen anyone crack that yet.

### Hype I'm not buying

The Obsidian "second brain" stuff. I get the appeal: a pretty graph of all your notes connected by glowing lines. It photographs well. But every one I've looked at is an elaborate way to feel productive without being productive. A visual workflow isn't the same as a working one. I've yet to see one actually save someone time. For most people it's a fidget toy.

Then there's the "Jarvis" builds all over your feed. Everyone's showing off their personal AI that controls their lights and reads their emails back in a calm voice. Fun demo. But I've looked at what it costs to run, and the token burn to keep one of these things live and useful is absurd. It's a great way to spend a small fortune turning your lamp off. Cool engineering, terrible economics.

### For the builders

Fastlane is the one I'd flag for indie hackers and solo founders. You point it at your website, it learns your product and your tone, and generates short-form video you swipe through Tinder-style and schedule straight to TikTok, Reels and Shorts. If you've built something good but have no time to market it, I think it's a useful distribution machine: on-brand content without standing up a content team.

### Bottom line

Here's what I keep coming back to. The tools I'm winning with are the ones that quietly remove babysitting: better reliability, real autonomy, less context I have to carry in my head. The ones I drop are optimised to look impressive in a screenshot. I build for the former and ignore the latter.

---

## 3. The NDIS Budget Is a Proxy for the Care We No Longer Have Time to Give

When the NDIS was started, it was a noble idea: to give the same baseline of care to people who can't care for themselves, to everyone, regardless of age, race, background or financial situation.

The budget has since blown out to gargantuan proportions. But my claim today isn't about that fiscal immaturity. It's about what the blowout represents for us as a society.

I was recently reading Homo Deus by Yuval Harari (a fascinating read, if you haven't already).

He gives an example that stopped me. A software engineer earning $250 an hour at a hi-tech start-up has a father who suffers a stroke; overnight he needs help with shopping, cooking, even showering. She could move him in and care for him herself: her income and the start-up's output would take the hit, but her father would have the company of a loving daughter. Or she could hire a carer at $25 an hour to live with him and meet his every need. As Harari frames it, the second option means "business as usual for the engineer and her start-up", and, on paper, everyone comes out ahead.

Harari names something I'd only ever talked about with a select few: the dilemma of specialisation. We live in a world that rewards you for optimising one narrow skill, and the better you get, the more the world, and then you yourself, values that skill above almost everything else, including the care of the people closest to you.

A software engineer creates more measurable value at a keyboard than at a parent's bedside. So that's where they go.

Reading it, I agreed with him, and then questioned why I did.

I run two businesses, play basketball semi-professionally, and try to hold onto some semblance of an intellectual and social life. I also have a sister with special needs. I cannot, in any honest reflection, chase everything I've set out to do and personally make sure she is looked after at all times. Something gives. It's usually the time spent with my sister.

We may tell ourselves the NDIS is proof of how much we value caring for the vulnerable, and it is. Its mere existence is generally a morally good thing (caveats for its ballooning expenditure and scammers who abuse the system). But more specifically, the budget isn't a measure of how much love we give our own; it's a measure of the gap left behind once specialisation pulled us away, the price of buying back, at scale, the care we no longer have the hours to give ourselves.

It exists because the rest of us are at the keyboard.

And uncomfortably, the budget line is largely the size of the absence of the care we would give.

(I recognise that the system is full of rorts and scammers. But you don't build a multi-billion-dollar program around something a society has decided doesn't matter. Its very existence is proof of this notion.)

I've lived out of home for a while now. Every time I go back, I'm reminded of the one axiom one cannot out-optimise: everyone I love is getting older, and time is finite.

I'm not the first one to recognise this, and I won't be the last. Nor is this some ground-breaking revelation of the world. It is just something I experienced.

I don't have a tidy answer to this existential angst. I haven't given up my goals, and I'm not going to pretend I'm about to. But I've made my peace with this much: in a world that pays you to specialise, the time you spend on the people who will never show up on a balance sheet is the one allocation you'll never regret.

On your deathbed, you'll never say you wished you spent more time at the office.

Say hi to your mum.

Peace,
Alex`,
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
