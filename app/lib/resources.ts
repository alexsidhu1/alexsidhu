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
      "The three AI agents I run inside Slack, the same three you saw fight over a customer bug and fix it. What each one is, and how to set them up. Two you can have running this week.",
    highlights: [
      "The three agents that live in my Slack, and what each is best at",
      "Set up Viktor and Claude yourself, step by step",
      "Why a bug hits a channel and gets triaged, argued over, and solved",
      "Where the rented agents stop, and what a built-for-you one does",
    ],
    content: `## The video you probably came from

A customer flagged a bug. It landed in a Slack channel. Three AI agents were already sitting in that channel, and they went at it: one traced where the error came from, one argued about the fix, one checked it would not break anything else. A few minutes later there was a working fix and a reply drafted to the customer. I approved it and moved on.

That was not a stunt. That is a normal setup you can build. The trick is putting the agents where the work already happens, which for most teams is Slack, and letting them each do what they are best at.

Here are the three, what each one actually is, and how to set them up. Two of them you can have running this week. The third is the one we build.

## Why Slack

Most people run one AI in a browser tab and copy-paste between it and their real tools all day. The agents in this guide live inside Slack instead. A message lands, you @mention the right one, it reads the thread, does the work, and posts the result back where everyone can see it. No new app to check. No context lost. The channel becomes the workbench.

## Agent 1: Viktor, the AI employee

**What it is.** Viktor ([viktor.com](https://viktor.com)) is an AI employee that lives in Slack. Not a chatbot that answers questions, an operator that does tasks. You give it a job in plain English and it comes back with the finished thing: a report, a reconciled invoice list, a drafted follow-up, a small dashboard. It connects to your real tools (Stripe, HubSpot, Google, Meta Ads, GitHub and a few thousand others) and can run any task on a schedule.

**What it is good at.** The unglamorous operational work. Weekly revenue digests posted to a channel. Reconciling invoices against Stripe. Auditing ad spend and pausing the losers. Drafting CRM follow-ups. Triaging a support or bug queue. If it is a repeatable ops task that touches a few tools, Viktor is the workhorse.

**How to set it up (about 10 minutes):**

1. Sign up at [app.viktor.com/signup](https://app.viktor.com/signup). No credit card, you start with about $100 in free credits.
2. Install Viktor to your Slack workspace from the Slack app directory. Takes a couple of minutes.
3. Connect your tools. Most are one-click sign-in, a few need an API key. Viktor handles the connection, no Zapier in the middle.
4. Invite Viktor to a channel and give it a task: \`@Viktor pull last week's Stripe revenue and post a summary here every Monday at 9am.\`

**Worth knowing.** Pricing after the trial is $50/month for the Team plan (20,000 credits, enough for roughly 10 to 15 complex jobs a month). Credits burn per task, and daily automations burn faster than weekly ones, so start weekly and turn up frequency once you see the value. It is a young product, so treat the first week as a trial with real work, not a leap of faith.

## Agent 2: Claude Tag, the one that reasons through hard problems

**What it is.** Claude Tag is Anthropic's own agent that lives in your Slack channels. You @mention \`@Claude\` and it takes on the task in the open: it posts a live checklist in the thread and works through it where the whole channel can watch. This is the one that shines on the genuinely hard problems, the bug in the video being the obvious example. It can investigate a bug, open a pull request, turn a messy decision thread into a clean doc, or run a data query, and it builds context on the channels it sits in over time.

**The catch: it is Team or Enterprise only.** The full channel agent (Claude Tag) needs a Claude **Team or Enterprise** plan and is in public beta right now. If you are on a personal Claude plan you can still DM Claude inside Slack, but the in-channel agent that does real work is the paid-team tier. Worth it if your team already runs on Slack.

**How to set it up (an Owner does this once):**

1. Install the Claude app from the [Slack Marketplace](https://slack.com/marketplace/A08SF47R6P4). Any admin can add it, but the next step needs an Owner.
2. A Slack/Claude **Owner** (not just an Admin) goes to \`claude.ai/admin-settings/claude-tag\` and provisions Claude Tag. Claude gets its own identity in the workspace, separate from any one person's account.
3. Connect the tools and repositories Claude should reach, and choose which channels it operates in. Access is set per channel, so you decide exactly what it can touch where.
4. That is it. From then on anyone in those channels just types \`@Claude investigate this error and open a fix\` and watches it work.

**Worth knowing.** Channel work is billed on usage against an org balance the Owner funds (not per-seat), with spend limits you set. When you @mention it in a channel it only sees the recent messages, so give it the context in your message or forward the thread. Ask \`@Claude what can you access from this channel?\` to see what is wired up. (One housekeeping note: Anthropic is retiring the older "Claude in Slack" name and folding everything into Claude Tag in August 2026, so Claude Tag is the thing to set up.)

## Agent 3: AxleClaw, the one built for you

**What it is.** AxleClaw is our productized founder operating system. Same idea as the other two, an agent that runs your operation from inside the tools you already use, but built and tuned for you instead of signed up for. It is trained on how your business actually runs and wired into your stack, so it does not just answer, it operates.

**Why it is different from the first two.** Viktor and Claude Tag are brilliant and you should use them. But they are rented and general. They know what you tell them in the moment. AxleClaw is owned and specific: it knows your workflows, your clients, your way of doing things, and it does the same job the same way every time without you re-explaining it. That is the difference between hiring a sharp temp and building a team member who has been there a year.

**How to "set it up."** You do not, we do. That is the point. If your operation has outgrown copy-pasting between tabs and you want the built-for-you version, that is a conversation, not a signup. It starts with an audit of where your time actually goes.

## How the three work together

Back to the bug. Here is who did what, and why three beats one:

- The customer message hits the channel. **Viktor** triages it: pulls the customer record, checks recent tickets, flags severity.
- **Claude Tag** takes the hard part: traces the error, reasons through the fix, opens a pull request with the change.
- They disagree on the fix, which is the good part. Seeing two agents check each other catches the mistake a single one would have shipped.
- Once the fix is agreed, the customer reply gets drafted, and a human (you) approves before anything sends.

No agent auto-sends. Every one of them drafts and waits for a person. The squad does the work, you keep the judgment.

## Where the DIY version stops

I will be honest about the ceiling, same as I am with everyone. Viktor and Claude Tag will take you a long way, and for a lot of founders they are enough. Set them up this week and you will feel it.

The wall shows up when the agents need to know your business the way a good employee does: your processes, your edge cases, your history, kept current without you managing it by hand. Rented general agents do not hold that. A built-for-you system does. That is the line between an ops squad you assemble and a company brain we build, and hitting that wall is a good sign. It means the system is working and you have outgrown the starter version.

If you are there, reply to the email that sent you this guide, or book an audit. We will map where your time goes and show you what the built version does that the DIY one cannot.

## Start here

Do not overthink it. Sign up for Viktor's free trial today and give it one real task. If your team is on a Claude Team plan, have your Owner switch on Claude Tag and point it at one channel. You will know inside an afternoon whether this changes how you work. Most people, it does.

Built by Alex Sidhu, Whitehorse AI.`,
  },
];

export function getResource(slug: string): Resource | undefined {
  return resources.find((r) => r.slug === slug);
}
