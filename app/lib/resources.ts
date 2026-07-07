export type Resource = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  /** Short bullets used on the capture/landing view. */
  highlights: string[];
  /** Full guide body, Markdown. */
  content: string;
};

export const resources: Resource[] = [
  {
    slug: "the-ai-second-brain",
    title: "The AI Second Brain",
    date: "2026-07-02",
    excerpt:
      "The exact no-code setup I run my business and life on. Install it, feed it your context once, and get an AI that actually knows you and gets sharper over time. About 30 minutes, start to finish.",
    highlights: [
      "Install Claude Code and load the free template, no coding required",
      "Feed it your context once (or let it interview you) so it actually knows you",
      "Make it remember decisions and build reusable skills, so it compounds",
      "Where a personal setup ends and a company brain begins",
    ],
    content: `## Your AI has amnesia

Most people use AI like a stranger they meet every morning. They explain who they are, what they do, and what they need. The chat ends, and all of it is forgotten. That is why the answers feel generic. Not because the model is weak, but because it knows nothing about you.

A second brain fixes that. You give the AI your context once, in files it reads every time, and every answer after gets sharper. This is the exact setup I run my business and life on. It is not locked to one model either, so you can switch between Claude, Codex, or whatever is best that week, and your context comes with you.

No coding. If you can install an app and fill in a form, you can do this. Set aside 30 to 45 minutes. Here is the whole thing in five steps.

## Step 1: Install Claude Code

Claude Code is an app from Anthropic. It is Claude with the ability to read and write files on your computer. That is what lets it hold a second brain instead of forgetting everything when you close the chat.

The easy way, if you are non-technical:

1. Go to [claude.com/claude-code](https://claude.com/claude-code).
2. Download the desktop app for Mac or Windows.
3. Install it like any other app and open it.
4. Sign in with your Claude account. You need a paid Claude plan or an Anthropic API key; the sign-in screen walks you through it.

If you are comfortable with a terminal, Claude Code also runs there and inside editors like VS Code. It is one command, \`npm install -g @anthropic-ai/claude-code\` (you will need [Node.js](https://nodejs.org) first), then run \`claude\`. If those words mean nothing to you, ignore this and use the desktop app.

## Step 2: Download the template

The template is the skeleton of a second brain: a set of folders and files Claude reads to understand you. Grab a copy.

1. Go to [github.com/alexsidhu1/execassistant-template](https://github.com/alexsidhu1/execassistant-template).
2. Click the green **Code** button near the top.
3. Click **Download ZIP**.
4. Find the ZIP (usually in Downloads) and double-click to unzip.
5. Move the \`execassistant-template\` folder somewhere you will remember, like your Desktop. Rename it to anything you like.

No GitHub account needed. You are just downloading a folder.

## Step 3: Open the template in Claude Code

1. Open Claude Code.
2. Open the folder you just unzipped. There is an "open folder" option when you start. If you prefer VS Code, download it and open the folder there.

Claude can now see every file in that folder. When you start chatting it reads \`CLAUDE.md\` first, which tells it everything else to look at. To check it is working, type:

> Read CLAUDE.md and the files in the context folder, then tell me in one sentence what you understand about me so far.

It will mention placeholders, because you have not filled anything in yet. That is the next step.

## Recommended: run it inside VS Code

The desktop app is the easy on-ramp. But the way I actually run this, and the way most serious Claude users I know run it, is inside VS Code. VS Code is a free, open-source editor from Microsoft. Do not let the word "editor" scare you. You are not writing code. You are using it as the window your assistant lives in, and it is the same tool whether you touch code or not.

Two reasons it is worth it. You can see everything: every file in your second brain sits in a sidebar, so nothing is hidden. And you can watch it work: when your assistant creates a skill or updates a file, you see it happen live. That visibility is the difference between a demo and a workbench.

Here is the setup:

1. Download VS Code from [code.visualstudio.com](https://code.visualstudio.com) and install it.
2. Open your template folder: **File → Open Folder**, then pick your \`execassistant-template\` folder. The files appear in the sidebar on the left.
3. Open the built-in terminal: **View → Terminal**. A panel opens at the bottom.
4. Type \`claude\` and press enter. Claude Code starts right there, already pointed at your second brain.

From then on you talk to your assistant in the terminal on one side and watch your files change on the other. That is the whole setup, and it is the one I use every day.

## Step 4: Make it yours

This is where the value comes from. The assistant is only as good as what it knows about you. Two ways to do it. Pick one.

**Let Claude interview you (easiest).** You do not have to edit files by hand. Paste this in:

> I want to set up my second brain. Read CLAUDE.md and every file in the context folder. Then interview me one question at a time to fill them in with my real details. Ask about who I am, what my business does, my team, my current priorities, and my goals. After each answer, update the right file. Keep going until the context folder reflects my real life.

Then answer its questions in plain language. It writes the files for you. This is the fastest way, and honestly the best, because it asks about things you would not think to include.

**Or edit the files yourself.** Open these and replace the bracketed placeholders with your real information, in order of importance:

1. \`context/me.md\` — who you are, your role, how you work.
2. \`context/work.md\` — what your business does, your offers, your clients.
3. \`context/team.md\` — who is on your team and what to loop them in for.
4. \`context/current-priorities.md\` — what matters in the next 30 days.
5. \`context/goals.md\` — your targets for the quarter.
6. \`CLAUDE.md\` — change the name and top description so it is working for you.
7. \`.claude/rules/communication-style.md\` — set the tone so it sounds like you, not generic AI.

Be specific. "I run a business" is useless. "I run a 4-person marketing agency in Austin, most revenue from retainer clients, trying to land bigger accounts" is gold. The detail is the whole point.

One rule: do not put anything in here you would not want a stranger reading, unless you keep the folder private. By default it lives only on your computer and stays yours.

## Step 5: Use it

Now it is an assistant. Talk to it like one:

- "Draft an email to a client who went quiet, in my voice."
- "What are my top priorities this week, and what should I ignore?"
- "I am thinking about hiring a salesperson. Talk it through with me using what you know about my business."
- "Summarize this messy note into three clear next steps." (paste the note)

**Tell it to remember things.** When you correct it or state a preference, say "remember that." For example: "Remember that I never want emojis in client emails." It saves that and applies it next time.

**Log decisions.** When you make a real call, say "log this decision." It writes it down with the reasoning, so future-you knows why.

**Build skills as you go.** The first time you do a repeatable task, do it once. The second time, say "turn this into a skill so we do it the same way every time." Now it is a reusable recipe.

## What "gets smarter over time" actually means

Nothing here is automatic magic. It compounds because of you. Every time you correct it, add context, log a decision, or save a skill, the next conversation starts from a higher floor. After a few months it knows your business the way a good employee would, except it never forgets and it is there at midnight.

The hardest step is the first one: filling in the context honestly. Do that, and the rest takes care of itself.

## Where this stops working

I will be honest about the ceiling. A personal second brain runs on your own discipline and lives in one folder, for one person. That is plenty for running your own work.

It is not enough to run a company. When your whole team needs the same context, when it has to pull live from your CRM, your inbox, and your project tool, and stay current without anyone maintaining it by hand, a folder of files hits a wall.

That is the line between a second brain and what we build at Whitehorse: a company brain. Same idea, industrial version. Trained on everything the business knows, connected to the tools you already use, kept current automatically so the whole team works from one source of truth. If you hit that wall, that is a good problem. It means the system is working and you have outgrown the DIY version. That is where we come in.

## Stuck?

Ask Claude Code directly. It can see your files and your setup, so "I followed the guide and X is not working, help me debug it" usually sorts it out. That is the nice thing about an assistant that lives inside the tool: it can help you fix the tool.

Built by Alex Sidhu, Whitehorse AI.`,
  },
  {
    slug: "the-ai-ops-squad",
    title: "The AI Ops Squad",
    date: "2026-07-03",
    excerpt:
      "The three AI agents I run inside Slack, the same three you saw fight over a customer bug and fix it. What each one is, and how to set them up. All three you can set up yourself.",
    highlights: [
      "The three agents that live in my Slack, and what each is best at",
      "Set up all three yourself, step by step",
      "Why a bug hits a channel and gets triaged, argued over, and solved",
      "How AxleClaw acts on its own across WhatsApp, iMessage, Slack and more",
    ],
    content: `A customer flagged a bug, and it landed in a Slack channel. Three AI agents were already sitting there, and they went at it. One traced where the error came from, one argued about the fix, and one checked it wouldn't break anything else. A few minutes later there was a working fix and a reply drafted to the customer. I approved it and moved on.

That wasn't a stunt, and it's a setup you can build yourself. Honestly, the trick is just pulling the agents into where the work already happens, which for most teams is Slack, and then letting each one do what it's best at.

So here are the three. What each one actually is, and how to set it up. All three you can have running this week.

## Why Slack

Most people run one AI in a browser tab and copy-paste between it and their real tools all day long. The agents in this guide live inside Slack instead. A message lands, you @mention the right one, and it reads the thread, does the work, and posts the result back where everyone can see it. There's no new app to check and nothing gets lost between tabs. The channel becomes the workbench.

## Agent 1: Viktor, the AI employee

**What it is.** Viktor ([viktor.com](https://viktor.com)) is an AI employee that lives in Slack. It's not a chatbot that answers questions, it's an operator that does tasks. You give it a job in plain English and it comes back with the finished thing: a report, a reconciled invoice list, a drafted follow-up, a small dashboard. It connects to your real tools (Stripe, HubSpot, Google, Meta Ads, GitHub and a few thousand others) and can run any task on a schedule.

**What it's good at.** The unglamorous operational work. Weekly revenue digests posted to a channel. Reconciling invoices against Stripe. Auditing ad spend and pausing the losers. Drafting CRM follow-ups. Triaging a support or bug queue. If it's a repeatable ops task that touches a few tools, Viktor is the workhorse.

**How to set it up (about 10 minutes):**

1. Sign up at [app.viktor.com/signup](https://app.viktor.com/signup). No credit card, and you start with about $100 in free credits.
2. Install Viktor to your Slack workspace from the Slack app directory. It takes a couple of minutes.
3. Connect your tools. Most are one-click sign-in, a few need an API key. Viktor handles the connection, so there's no Zapier in the middle.
4. Invite Viktor to a channel and give it a task: \`@Viktor pull last week's Stripe revenue and post a summary here every Monday at 9am.\`

**Worth knowing.** Pricing after the trial is $50/month for the Team plan (20,000 credits, enough for roughly 10 to 15 complex jobs a month). Credits burn per task, and daily automations burn faster than weekly ones, so start weekly and turn up the frequency once you see the value. It's a young product, so treat the first week as a trial with real work rather than a leap of faith.

## Agent 2: Claude Tag, the one that reasons through hard problems

**What it is.** Claude Tag is Anthropic's own agent that lives in your Slack channels. You @mention \`@Claude\` and it takes on the task in the open: it posts a live checklist in the thread and works through it where the whole channel can watch. This is the one that shines on the genuinely hard problems, the bug in the video being the obvious example. It can investigate a bug, open a pull request, turn a messy decision thread into a clean doc, or run a data query, and it builds context on the channels it sits in over time.

**The catch: it's Team or Enterprise only.** The full channel agent (Claude Tag) needs a Claude **Team or Enterprise** plan and is in public beta right now. If you're on a personal Claude plan you can still DM Claude inside Slack, but the in-channel agent that does real work is the paid-team tier. It's worth it if your team already runs on Slack.

**How to set it up (an Owner does this once):**

1. Install the Claude app from the [Slack Marketplace](https://slack.com/marketplace/A08SF47R6P4). Any admin can add it, but the next step needs an Owner.
2. A Slack/Claude **Owner** (not just an Admin) goes to \`claude.ai/admin-settings/claude-tag\` and provisions Claude Tag. Claude gets its own identity in the workspace, separate from any one person's account.
3. Connect the tools and repositories Claude should reach, and choose which channels it operates in. Access is set per channel, so you decide exactly what it can touch where.
4. That's it. From then on anyone in those channels just types \`@Claude investigate this error and open a fix\` and watches it work.

**Worth knowing.** Channel work is billed on usage against an org balance the Owner funds (not per-seat), with spend limits you set. When you @mention it in a channel it only sees the recent messages, so give it the context in your message or forward the thread. Ask \`@Claude what can you access from this channel?\` to see what's wired up. (One housekeeping note: Anthropic is retiring the older "Claude in Slack" name and folding everything into Claude Tag in August 2026, so Claude Tag is the thing to set up.)

## Agent 3: AxleClaw, the one that goes everywhere

**What it is.** AxleClaw ([axleclaw.ai](https://axleclaw.ai)) is our own founder operating system. Like the other two it runs your work from inside the tools you already use, but it's built to act more on its own and to live wherever you do, not just in Slack.

**Why it's different from the first two.** Two things set it apart. First, it's built to be more autonomous. It doesn't just draft and wait, it takes more of the action end to end, so more of the loop closes without you in it. Second, it isn't stuck in one place. The same agent drops into WhatsApp, iMessage, Slack, and more, so it reaches you and acts wherever the work is actually happening. And it plugs into far more of your stack, so there's less it can't touch. That reach is the biggest difference between AxleClaw and a Slack-only assistant.

**How to set it up.** Sign up at [axleclaw.ai](https://axleclaw.ai), connect the platforms and tools you want it in, and point it at the work. That's it.

## How the three work together

Back to the bug. Here's who did what, and why three beats one.

- The customer message hits the channel, and **Viktor** triages it: it pulls the customer record, checks recent tickets, and flags how urgent this is.
- **Claude Tag** takes the hard part. It traces the error, reasons through the fix, and opens a pull request with the change.
- They disagree on the fix, which is the good part, because two agents checking each other catches the mistake a single one would have shipped.
- **AxleClaw** carries it out of the channel. It pings the on-call engineer on WhatsApp and updates the customer's record, so the loop closes wherever people actually are, not just in Slack.
- The customer reply gets drafted, and a human (you) approves before anything goes out.

Nothing important auto-sends. The squad does the work, and you keep the judgment.

## Start here

Don't overthink it. Sign up for Viktor's free trial today and give it one real task. If your team is on a Claude Team plan, have your Owner switch on Claude Tag and point it at one channel. And grab AxleClaw at [axleclaw.ai](https://axleclaw.ai) if you want an agent that acts on its own across every app you use, not just Slack. You'll know inside an afternoon whether this changes how you work. For most people, it does.

Built by Alex Sidhu, Whitehorse AI.`,
  },
  {
    slug: "the-ai-accountability-check-in",
    title: "The AI Accountability Check-In",
    date: "2026-07-07",
    excerpt:
      "How to build a Claude Code routine that pulls your calendar and Slack DMs you a midday check-in every weekday, automatically, even when your laptop is closed. About ten minutes to set up.",
    highlights: [
      "What a cloud routine is and how it runs without your computer",
      "Connect Google Calendar and Slack in under five minutes",
      "The exact prompt I use, ready to copy and adapt",
      "Where DIY stops and a built-for-you workflow system begins",
    ],
    content: `At noon today my phone buzzed with a Slack message from Claude. My laptop was closed. The agent had already pulled my afternoon meetings, found my Slack handle, and sent the DM itself. I built it in about ten minutes, and it runs every weekday whether I'm at my desk or not.

That's a cloud routine in Claude Code. Here's how to build yours.

## What a cloud routine actually is

Claude Code has a feature called Routines. You write a prompt, connect your tools, set a schedule, and a Claude agent runs that prompt in Anthropic's cloud on repeat. Every weekday at noon in my case, but you can set it to 9am, daily, weekly, whatever fits.

The key thing: it doesn't run on your machine. It runs on Anthropic's servers. Close your laptop, go to a meeting, leave the house — the routine fires anyway. The agent has no idea where you are, and it doesn't need to.

## What you need

- A paid Claude plan (Pro, Max, Team, or Enterprise). Routines are not on the free tier.
- The tools you want to use, connected at [claude.ai/customize/connectors](https://claude.ai/customize/connectors). For a calendar check-in you need Google Calendar and Slack.

## How to build it (about 10 minutes)

### Step 1: Connect your tools

Go to [claude.ai/customize/connectors](https://claude.ai/customize/connectors) and connect Google Calendar and Slack if they aren't already there. One-time setup. Once connected, those tools are available to any routine you create.

### Step 2: Write the prompt

This is the most important step. The cloud agent runs with zero context, so the prompt has to be completely self-contained. It needs to know who it is, what it's doing, and exactly how to do it.

Here's the prompt I use. Copy it and swap in your name, timezone, and Slack handle:

> You are a scheduled accountability agent. Your job is to send [YOUR NAME] a midday Slack DM that includes their remaining calendar events for today.
>
> Steps:
> 1. Use Google Calendar to list today's events. Filter to only events starting at or after 12pm [YOUR TIMEZONE].
> 2. Use Slack to find [YOUR SLACK NAME]'s user ID and send them a direct message.
> 3. Format the message like this:
>
> Hey [NAME] - midday check-in.
>
> Your afternoon: [list each remaining event as time - title. If none, write "No meetings this afternoon."]
>
> What are your top 3 priorities right now, and are you on track?
>
> 4. Confirm the message was sent and stop.

The specificity matters. Vague prompts produce inconsistent agents. Tell it what to do, in what order, and what the output should look like.

### Step 3: Create the routine

Three ways to do this, all writing to the same cloud account:

**Web UI (easiest).** Go to [claude.ai/code/routines](https://claude.ai/code/routines) and click New routine. Name it, paste your prompt, attach Google Calendar and Slack as connectors, set the schedule, and save.

**Claude Code (any session).** Type \`/schedule\` in chat. It walks you through the same fields interactively, in plain English.

**Desktop app.** Click Routines in the sidebar, then New routine, then choose Remote. (Local would run it on your machine, not the cloud.)

### Step 4: Set the schedule

Two things to know before you pick a time:

Schedules run in UTC. If you're in Sydney, noon is 2am UTC during AEST. The web and desktop interfaces convert the time for you. If you're using the CLI you'll need to convert it manually.

The minimum interval is one hour. Sub-hourly routines are rejected.

Pick your frequency, hit save. The routine is live.

## What it looks like when it runs

Every weekday at noon, Claude spins up a fresh cloud session on Anthropic's servers. It calls the Calendar API to read your afternoon, finds you on Slack, and sends the DM. Your laptop can be closed. The message arrives either way.

You can trigger it manually from [claude.ai/code/routines](https://claude.ai/code/routines) any time to test it before the scheduled run fires.

## What else you can build on this

A noon check-in is the simplest version of this pattern. Once you see it working, the same setup generalises:

- A 9am routine that reads your inbox and surfaces the three emails that need a reply today
- A weekly routine that pulls your ad spend and flags the campaigns that are underperforming
- A Friday routine that scans your CRM for leads that have gone quiet and drafts follow-ups

## Start here

Build the noon check-in. It takes ten minutes, and the return is immediate. Once it's running every weekday you'll have a real sense of what routines can do, and you'll start seeing the other places in your work where they belong.

Built by Alex Sidhu, Whitehorse AI.`,
  },
  {
    slug: "emails-that-sound-like-you",
    title: "Emails That Sound Like You",
    date: "2026-07-07",
    excerpt:
      "One file, five minutes. Set your tone, your banned words, and your sentence rhythm in Claude Code, and every email it drafts from then on sounds like you wrote it.",
    highlights: [
      "The four sections every communication style file needs",
      "The exact banned phrases that make AI emails obvious — and how to kill them",
      "How to wire it into Claude Code so it reads your rules automatically",
      "Where one-person voice rules stop and a company-wide AI standard begins",
    ],
    content: `Someone replied to an email last week saying it was one of the clearest I'd sent. I'd written maybe ten words of it. Claude wrote the rest. The thing that made it sound like me wasn't prompting skill or a special model. It was a rules file I set up once and haven't thought about since.

Here's what it is and how to build yours.

## What a communication style file actually does

When Claude drafts something, it defaults to generic professional language. Clear, technically correct, nobody's voice. A \`communication-style.md\` file is a set of rules Claude reads before writing anything: your tone, your banned words, your sentence rhythm. Once it's in place, every draft starts from your voice instead of from scratch.

## What to put in it

The file is plain English. No code. Four sections are worth having:

**Tone.** How you write in different contexts. "Internal messages: casual and direct. Client emails: professional but plain-spoken, never corporate." The more specific, the better.

**What to avoid.** This is the most important section. List the words and patterns you hate seeing in your own writing. Em dashes. Emojis. Phrases like "circle back", "touch base", "moving forward". The AI-tell lines that make it obvious a machine wrote it: "I hope this finds you well", "please don't hesitate to reach out", "as per our conversation". Kill them all by name.

**Sentence rhythm.** How your sentences should feel. Contractions? Short sentences or longer ones? How much variety? "Contractions are good. Vary sentence length. Avoid strings of three-word fragments back to back."

**Default.** What's your baseline? "When in doubt: shorter, sharper, more concrete. Strip filler. Trust the reader."

## How to set it up (5 minutes)

1. Open your Claude Code project folder. If you haven't set one up yet, the free template at [github.com/alexsidhu1/execassistant-template](https://github.com/alexsidhu1/execassistant-template) gives you the full structure including this file.
2. Create the \`.claude/rules/\` folder inside your project if it doesn't exist.
3. Create a new file: \`communication-style.md\`.
4. Fill it in. Copy the structure above and replace every section with your actual rules. Don't be vague: "professional" tells Claude nothing. "No em dashes, no emojis, never open with I hope this email finds you well" tells it exactly what to cut.
5. Add one line near the top of your \`CLAUDE.md\`: \`@.claude/rules/communication-style.md\`. This tells Claude to read your rules at the start of every session. If you're using the execassistant template, this line is already wired in.

That's it. From now on, every time you ask Claude to draft a reply, it reads your rules before it writes a word.

## Using it to draft an email

The prompt is simple. Paste the email you're replying to and say:

> Draft a reply. Keep it short. [Add any specific points you want to hit.]

Claude reads your style rules first, so it knows not to use em dashes, not to open with "I hope this finds you well," and to match your rhythm. Review the draft, tweak what needs tweaking, send.

You'll make fewer edits over time as the rules get sharper. When you see something wrong in a draft, add it to the file. "Never say 'as discussed'." "Don't use bullet points in client emails." Each addition compounds.

## The honest ceiling

This setup is powerful for one person. Your voice, your rules, your project. The limitation: it lives in a folder on your computer. Everyone on your team has their own setup, or no setup at all. Company emails still sound different depending on who sent them.

The next level is a team-wide voice standard baked into a shared system, so every person drafting a client email starts from the same baseline. Same tone, same banned phrases, same rules enforced automatically. That's what we build into the AI operating systems at Whitehorse. If you want that for your business, an audit is where it starts.

## Start here

Open a blank file and write your ten most-hated phrases. The words that make you wince when you see them in an email draft. Get those in the file today, and the next email Claude writes for you won't have a single one of them.

Built by Alex Sidhu, Whitehorse AI.`,
  },
];

export function getResource(slug: string): Resource | undefined {
  return resources.find((r) => r.slug === slug);
}
