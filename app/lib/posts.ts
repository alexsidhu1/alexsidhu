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
    title: "The Inaugural Newsletter",
    date: "2026-06-07",
    excerpt:
      "The first newsletter. Breaking down what's new in the business, what's going on in AI, and my thoughts on the NDIS budget.",
    content: `What up people,

Thanks for being a part of the newsletter (and the first edition).

For the TLDR here's what's good. Going to be running through:

- what's new in the business
- what AI tools I'm using (and new stuff in AI), and
- my thoughts on the NDIS budget

Enjoy :)

## 💼 1. What's new in the biz

So this week was a cool week.

We have now officially solidified our core products. One thing we're trying to do more as we scale is to productise.

Productise, productise, productise. (really keen on productising if you couldn't tell).

Over the last few months, we've essentially been getting paid to do discovery. Clients will tell us their problems and we try and solve them. But we need the solutions we create to be systemised, so we're able to increase the time to value for each client and reduce the cognitive overload we would endure due to context switching. Accordingly, we've settled on essentially 3 core products.

1. We've launched our fully autonomous executive assistant, **AxleClaw: 1-click deployed OpenClaw**. It connects all your business apps and it can run 24/7 to do (pretty much) what your heart desires. Think daily reporting, summary of the day and week's work, Meta ads analysis, website deployment and updates. Plus you can connect it via your phone (usually via a messaging app like Telegram) and get it set up all in less than 10 minutes. It will also run an accountability check each Sunday to see how well you're performing compared to the goals you laid out. We're having beta users test it currently. Think of it as a second brain for you (really helpful for founders). I use it to just dump voice notes in and then get it to action items.

See the website here: [axleclaw.ai](https://axleclaw.ai)

![AxleClaw dashboard](https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,quality=80,format=auto,onerror=redirect/uploads/asset/file/bce2d2de-b240-470b-a5b7-5f72d837de23/Screenshot_2026-06-07_at_3.54.41_pm.png)

See here for a breakdown from Swanny (my co-founder): [Getting Started with AxleClaw: A Complete Walkthrough](https://www.tella.tv/video/vid_cmpnmsntf00000bjhc1rfgdbp/view)

2. We **audit, build and optimise**. This is our core offering. Essentially we'll go in, interview people, try to understand where inefficiencies might lie and then roadmap out what an AI implementation plan could look like for them.

We often find people (and companies) don't know what they don't know, so the audit process is almost necessary at each step.

We then build out the audits we roadmap for people, working through a phased plan to ensure any changes aren't too drastic.

And then we optimise. We implement self-learning feedback into the agents so they can recursively improve over time. Think of edge cases that might occur, things that go wrong. We give our clients the ability to give feedback on the agents and then have them improve themselves over time. Getting smarter the more they are used in the business.

3. More recently we've been doing **education**. We've started building out workshops for companies to help them understand what AI is, how it can be used effectively and what it can look like long term. At first we were super hesitant about this but after more and more demand, we have started doing these. They're typically 3 hours long with secondary drop-down hours for Q&A and build fixes with people.

We may have **in-person live workshops** for teaching people how to use Claude Code, Cowork, Codex coming over the next week or so.

We also have **2 employees!** (will be intro'd in the next newsletter).

One thing I've found to be quite ironic is ensuring we constantly automate our manual processes.

For example, onboarding for us was too manual, so we're streamlining it and ensuring that this is an agentic workflow, with the agreements, contract and timeline plus agent build dashboard all one click away for our users.

Will be sharing these builds as we go.

## 🤖 2. What's New in AI (and What I'm Actually Using)

Most of what gets hyped in AI is theatre (if you've seen those stupid Obsidian graphs or some Jarvis voice-activated setup you know what I'm talking about).

Some of it is genuinely good. Most of it isn't :/

Here's where I've landed.

**Opus 4.8** is **Anthropic's current flagship**, and to me the upgrade is cool, but not a benchmark-chasing point release (like when ChatGPT went from 3 to 4). The headline for me isn't the coding scores (though they jumped), it's reliability. I notice it flags when it's unsure instead of bluffing, and I'm catching far fewer quiet bugs sitting in its own code. If you've ever had a model hand you confidently broken work, you'll feel the difference straight away. They also shipped effort control, where I decide how hard it thinks on a given task, plus "dynamic workflows" in Claude Code: it plans a big job and fires off a swarm of parallel subagents to chew through it. For the layman, not that important, just keep using Claude Code. The larger issue is that the app keeps breaking (see more down below). Whether or not this is because of the app or the update is unclear to me. Although I imagine the stronger model doesn't help.

**Codex (semi-recently)** went all-in-one, and I think that's a bigger story than any single model release. OpenAI turned it from a coding tool into a general work agent. It can now drive your computer, use the everyday apps on your machine, review PRs, run its own browser to check the frontend it just built, remember your preferences, and take on repeatable jobs. Little bit nicer than **Claude with Claude Code, Cowork and normal Claude** (most people don't actually know what the difference between Claude Cowork and Code is). Codex has also since bolted on role-specific plugins and shareable hosted apps. E.g. you can make sites that are shareable with work colleagues, which is super cool. Would recommend a look (even if you don't write code). Really nice to have a visual representation of stuff.

### My Actual Work OS

Ditch Claude Desktop. Use Claude Code in VS Code. The desktop app just keeps breaking, and the thing that really winds me up is you can't easily see your skills (only in Claude Cowork). In VS Code I can watch which skills are being created and track them as they're built. That visibility alone is worth the switch to me. But the main thing is it breaks way less which is great.

![VS Code folder setup](https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,quality=80,format=auto,onerror=redirect/uploads/asset/file/6b6a4ae6-c44a-4eeb-ba67-8e336f287f46/Screenshot_2026-06-07_at_9.57.37_pm.png)

This is an example of what the folder setup looks like in VS Code.

The desktop app is really good for projects (purely because of the way it holds and condenses memory and context). The bit I love most is the memory-condensing: it holds onto the context that matters and drops the noise, so I'm not re-explaining myself every session.

Nate Herk runs through this setup really nicely: [Turn Claude Code Into Your Executive Assistant in 27 Mins](https://www.youtube.com/watch?v=mi4hcipESKQ)

But for 24/7, do-it-while-I-sleep work, I still lean on OpenClaw. It's there whenever I want it to go and do something for me, and I don't have to worry about keeping my laptop open. I find Hermes solid and it breaks less often, but it's really built for single-agent work. OpenClaw's multi-agent setup is far easier for me to configure. The catch is the one everyone hits with multi-agent: the agents don't share enough context, so they drift. Working on trying to fix this.

### BS I'm seeing way too often

The Obsidian "second brain" stuff. I get the appeal: a pretty graph of all your notes connected by glowing lines. It photographs well. But every one I've looked at is an elaborate way to feel productive without being productive. A visual workflow isn't the same as a working one. I've yet to see one actually save someone time. For most people it's a fidget toy. The main thing I really want to knuckle down is context. For everything. AI is only as good as the data you give it. The more context you can give it, the better.

![Obsidian graph](https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,quality=80,format=auto,onerror=redirect/uploads/asset/file/01c559b0-bcf2-464c-b0cb-c5ec014c19e0/image.png)

This is the type of thing I be seeing 50 times on IG.

Then there's the "Jarvis" builds all over your feed. Everyone's showing off their personal AI that controls their lights and reads their emails back in a calm voice. Fun demo. But the token burn to keep one of these things live and useful is frankly absurd. It's a great way to spend a small fortune turning your lamp off. Cool engineering, terrible economics.

![Jarvis builds](https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,quality=80,format=auto,onerror=redirect/uploads/asset/file/fbc9ed23-632f-418d-96f9-08293324cdbb/image.png)

Most people need help with getting their quoting done faster rather than trying to be Iron Man lol.

### 👷 For the builders: cool products and apps I'm seeing and using (not affiliated FYI)

![Fastlane hits $1M ARR](https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,quality=80,format=auto,onerror=redirect/uploads/asset/file/86f1fc78-3165-4b84-a152-2b77cd94456d/Screenshot_2026-06-07_at_4.08.24_pm.png)

$1mil ARR in 2 months is crazy.

Fastlane is the one I'd flag for indie hackers and solo founders. You point it at your website, it learns your product and your tone, and generates short-form video you swipe through Tinder-style and schedule straight to TikTok, Reels and Shorts. If you've built something good but have no time to market it, I think it's a useful distribution machine: on-brand content without standing up a content team. I've shouted the boys out before on my LinkedIn (I happen to be mates with the founders), but they just hit $1mil ARR in the last 2 months so gotta show them some love again - shoutout kings!

## 🧐 3. Differentiated Take of the Week: The NDIS Budget Is a Proxy for the Care We No Longer Have Time to Give

There has been much chatter about the NDIS, particularly recently. It has become more of a cultural conversation with the proliferation of media covering scammers who abuse the system. My take isn't so much about the rise of fraudulent behaviour, but rather what the NDIS represents in a modern-day capitalistic society.

When the NDIS was started, it was a noble idea: to give the same baseline of care to people who can't care for themselves, to everyone, regardless of age, race, background or financial situation.

The budget has since blown out to gargantuan proportions. But my claim today isn't about that fiscal immaturity. It's about what the blowout represents for us as a society.

I was recently reading Homo Deus by Yuval Harari (a fascinating read, if you haven't already).

He gives an example that has stuck with me - see screenshot from my mate Amey who I was discussing this topic with.

![Homo Deus excerpt](https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,quality=80,format=auto,onerror=redirect/uploads/asset/file/97d1d75f-28e3-4020-b148-47c17cd43003/image.png)

Amey finally reading Homo Deus and then proceeding to send me screenshots of the best bits.

A software engineer earning $250 an hour at a hi-tech start-up has a father who suffers a stroke; overnight he needs help with shopping, cooking, even showering. She could move him in and care for him herself: her income and the start-up's output would take the hit, but her father would have the company of a loving daughter. Or she could hire a carer at $25 an hour to live with him and meet his every need. As Harari frames it, the second option means "business as usual for the engineer and her start-up", and, on paper, everyone comes out ahead.

Harari names something I'd only ever talked about with a select few: the dilemma of specialisation. We live in a world that rewards you for optimising one narrow skill, and the better you get, the more the world, and then you yourself, values that skill above almost everything else, including the care of the people closest to you.

A software engineer creates more measurable value at a keyboard than at a parent's bedside. So that's where they go.

Reading it, I agreed with him, and then questioned why I did.

I run two businesses, play basketball semi-professionally, and try to hold onto some semblance of an intellectual and social life. I also have a sister with special needs. I cannot, in any honest reflection, chase everything I've set out to do and personally make sure she is looked after at all times. Something gives. It's usually the time spent with my sister.

We may tell ourselves the NDIS is proof of how much we value caring for the vulnerable, and it is. Its mere existence is generally a morally good thing (caveats for its ballooning expenditure and scammers who abuse the system). But more specifically, the budget isn't a measure of how much love we give our own; it's a measure of the gap left behind once specialisation pulled us away, the price of buying back, at scale, the care we no longer have the hours to give ourselves.

It exists because the rest of us are at the keyboard, or specialising in a facet of life we have more leverage in, and can produce a greater benefit to society.

I've lived out of home for a while now. Every time I go back, I'm reminded of the one axiom one cannot out-optimise: everyone I love is getting older, and time is finite.

I'm not the first one to recognise this, and I won't be the last. Nor is this some ground-breaking revelation of the world. It is just something I experienced.

I don't have a tidy answer to this existential angst. I haven't given up my goals, and I'm not going to pretend I'm about to. But I've made my peace with this much: in a world that pays you to specialise, the time you spend on the people who will never show up on a balance sheet is the one allocation you'll never regret.

But I figure, on my deathbed, I'll probably never have wished I spent more time at the office.

So say hi to your mum.

Until next week amigos,

Peace,
Alex`,
  },
  {
    slug: "does-pe-ruin-everything",
    title: "Does PE Ruin Everything?",
    date: "2025-10-07",
    excerpt:
      "Every brand I've loved seems to get worse after private equity buys it. A bang-average dinner at Chargrill Charlie's, and why \"shareholder value\" so often means less value for everyone.",
    content: `It feels like every brand I've ever loved eventually gets worse after being bought by Private Equity.

They seem to consistently trade long-term brand quality for short-term returns, and in doing so, destroy the very thing that made the business valuable.

The other day I realised it had been quite a while since I had frequented my local Chargrill Charlie's.

Accordingly I ventured down the road in hunt of some hot chicken and chips.

I decided to change things up and went for their "meal" instead of a burger.

What I was left with was: stale chips, cold chicken and a couple bang-average sides.

Oh, and a price tag of $26.

I knew Chargrill Charlie's had been taken over by the private equity group PAG Asia Capital a few years ago (they also own Red Rooster, Oporto and Chicken Treat) and it feels like the quality has dropped off.

Maybe it was just one bad experience.

Unlikely.

What always baffles me is how "creating shareholder value" becomes a licence to undermine consumer value. Prices go up, quality goes down, and shrinkflation quietly creeps in.

And in the longrun, shareholders, and everyone for that matter, are worse off.

In my experience, good business is simple: give the customer more value than what they're paying for.

Maybe that's a simplified view. But why PE and investor funds continue to ruin a good thing in search of a short-term gain still baffles me.

Perhaps it's naive.

But, why can't we have nice things?`,
  },
  {
    slug: "building-in-america",
    title: "Why I'd Build in America",
    date: "2025-09-01",
    excerpt:
      "Six months at UNC changed how I think about where to build. A purely-business case for why the same hours might go 10x further in the States.",
    content: `Last year I spent 6+ months in America. UNC, North Carolina, to be exact.

Truly one of the best experiences I've ever undertaken.

I didn't think there'd be much of a culture shock to be honest, but looking back one thing that has really stood out to me is their attitude towards business.

In Australia, sometimes it feels like when you tell people you run your own business or you're trying to start something yourself, you often get met with the look that you're basically the equivalent of being unemployed.

But it made me think about living in the States more, especially if you're trying to pursue your own business goals.

From a purely ROI perspective I've figured if I have the same input in Australia as in the States (i.e. just working the same amount of hours), I could theoretically achieve a 10x output or higher.

This is based on a few things:

- **Increased purchasing power:** Americans just have more wealth than Australians.
- **Increased willingness to spend:** consumer culture is just much more encouraged there.
- **Exchange rate:** you can provide the same service and get paid the same absolute amount and purely via the exchange rate you could receive a 1.5x multiplier on your work.
- **Lower taxes:** lower federal tax, some states have no income tax, and increased business subsidies/loans.
- **Housing/rent costs** (median house price relative to median wage) are lower: Sydney is the second highest at 13.3x, only behind Hong Kong.
- **Market size is 12.5x larger** (purely by population): competition is more fierce, but if you can break in then the sky really is the limit.
- **Network:** the most powerful and least quantifiable one. In SF you could be 2 degrees of separation from someone like Peter Thiel. In Sydney, a little tougher.
- **Lending laws:** SBA loans let individuals borrow up to 90% of the loan amount, and businesses can use the business itself as the underlying asset. In Australia that framework doesn't exist; banks overwhelmingly want property as security, so housing rather than the business is what underpins lending.

Again, there are a lot of caveats. You have to take into account lifestyle, different laws, culture, being away from home, friends and family, and so on.

But purely from a business perspective, it looks pretty enticing. The power and encouragement given to businesses makes it so inviting to pursue your own thing.

I'd be interested to hear what other people think. Especially people who have lived in both places.`,
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
