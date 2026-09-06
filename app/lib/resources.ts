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
    slug: "making-videos-with-claude-code",
    title: "Making Short Videos with Claude Code",
    date: "2026-09-05",
    excerpt:
      "A practical guide to turning a simple idea into a polished animation by talking to Claude Code: the brief, the storyboard, the check-snapshot-draft loop, the prompts worth reusing, and the common problems.",
    highlights: [
      "The five-question brief template and why it beats a prompt",
      "A simple hook, action, result, close structure for short demos",
      "The seven-step loop: plan, build, check, snapshot, draft, notes, final",
      "Reusable prompts for interaction, typed text, variety and sound timing",
    ],
    content: `**Download the kit:** [client-demo-video.zip](/downloads/client-demo-video.zip). The skill and generator behind the demo in this guide. 42 KB, no audio files inside.

I recently made a short demo video almost entirely by talking to Claude Code.

The video itself was simple: a few interface moments, some typed text, cards moving on and off screen, and a clean closing line. The kind of thing you might normally build in After Effects or hand over to an editor.

Instead, I described what I wanted, reviewed still frames, watched rough renders, and gave notes in plain English:

> Slow the opening down.
>
> Make the click feel more deliberate.
>
> The icon is getting clipped in this shot.

That was most of the process.

This guide shows you how to do the same thing. It is not a recipe for one particular video. Think of it as a starting framework for making short product demos, explainers, launch clips, and simple motion pieces in Claude Code.

## The basic idea

A video is a sequence of frames. If you can build a frame with HTML and CSS, then animate it on a timeline, you can turn it into a video.

That is what HyperFrames is useful for. You create the visuals as a web page, animate them with GSAP, and HyperFrames renders the timeline frame by frame into an MP4.

Claude Code is good at writing both the layout and the animation. More importantly, it is good at changing them when you say things like:

- “Hold this frame for another second.”
- “Move the headline higher.”
- “Make the transition feel sharper.”
- “Show me the moment before and after the cut.”

You are still directing the video. You just do it through conversation instead of dragging layers around a timeline.

## What you need

Three free tools, each installed once:

- **Claude Code.** The AI assistant you will be talking to. Install it from claude.com/code.
- **Node.js** (version 20 or newer). This lets your computer run the video tool. Download it from nodejs.org and run the installer.
- **FFmpeg.** The program that turns the finished frames into a video file. On a Mac, open Terminal and type \`brew install ffmpeg\`.

If any of that feels unfamiliar, ask Claude Code to walk you through it. Installing tools is something it is good at.

Next, make an empty folder for your video. Open Terminal in that folder and paste this line:

\`\`\`bash
npx hyperframes init my-video --example blank --non-interactive
\`\`\`

That sets up a blank video project and, quietly, teaches Claude Code how the video tool works. Without that step, Claude would build a normal web animation, which looks fine in a browser but falls apart when it is turned into video.

Now open Claude Code inside that folder. You are ready to start.

If you would rather not do any of that by hand, there is a shortcut. Install Claude Code, open it in an empty folder, and paste this in (every box in this guide has a copy button):

\`\`\`text
I want to make short videos with Claude Code and HyperFrames. Please:

1. Check whether Node.js 20 or newer and FFmpeg are installed on this computer.
   If either is missing, tell me the simplest way to install it and wait for me.
2. Create a blank HyperFrames project here with
   npx hyperframes init my-video --example blank --non-interactive
   and work inside that folder from now on.
3. Make sure the HyperFrames skills are installed so you know the rules of the renderer.
4. Then ask me for a brief, one question at a time: who the video is for, the one
   thing they should understand, where it will be shown, what it should feel like,
   and what role sound should play.
5. Turn my answers into a beat-by-beat storyboard and show it to me before building anything.
\`\`\`

Claude does the setup, asks you the five questions, and stops at the storyboard so you can read it first.

There is one optional extra. If you sign in to HyperFrames, you get access to their hosted voices, music, stock images, and cloud rendering:

\`\`\`bash
npx hyperframes auth login
\`\`\`

You do not need this to begin. Everything in this guide works on your own computer without it.

## Start with a brief, not a prompt

You can open Claude Code and say “make me a video,” but you will usually get a better result if you give it a short creative brief first.

It does not need to be elaborate. You just need to answer five questions:

1. Who is the video for?
2. What is the one thing they should understand?
3. Where will the video be used?
4. What should it feel like?
5. What role should sound play?

Use this template:

\`\`\`text
Audience:
[Who is watching? What do they already know?]

Main message:
[The one sentence they should remember.]

Format:
[Approximate length, dimensions, and where it will be shown.]

Visual direction:
[Colours, typography, references, pace, and overall mood.]

Sound:
[Voiceover, music, sound effects, or silence.]

Structure:
[A rough beginning, middle, and end.]
\`\`\`

For example:

\`\`\`text
Audience: People seeing this product for the first time.

Main message: A complicated task can be completed with one simple request.

Format: Around 30 seconds, landscape, for a website and LinkedIn.

Visual direction: Warm neutral background, restrained colour, crisp interface cards,
and confident movement. Clean rather than futuristic.

Sound: No voiceover. Light interface sound effects only.

Structure: Show the problem, demonstrate the interaction, reveal the result,
and finish on one clear line.
\`\`\`

Ask Claude to turn the brief into a beat-by-beat storyboard before it builds anything. Read that first. Changing a line in a storyboard is much easier than rebuilding a finished scene.

## A simple structure for short demo videos

Most short demos do not need a complicated story. This structure is enough:

### 1. The hook

Give the viewer a reason to keep watching. This might be a question, a familiar problem, a bold result, or the product already in motion.

### 2. The action

Show the central interaction. Keep it focused. If the important moment is typing a request and pressing a button, let the viewer actually see it happen.

### 3. The result

Reveal the finished output clearly. Do not rush past the thing the audience came to see.

### 4. The close

End with one idea: a benefit, a product name, a next step, or a short call to action.

If you have several features to show, repeat the action-and-result section. Change the composition or entrance each time so the video does not feel like the same scene played three times.

## The workflow I use

The process is a loop, not a single prompt.

### 1. Plan the beats

Ask Claude for a short storyboard with timestamps, on-screen text, the main visual in each section, and the intended transition.

Do not worry about perfect timings yet. You are checking whether the story makes sense.

### 2. Build the first pass

Once the storyboard feels right, ask Claude to build the composition. Keep important timings in named constants so they can be adjusted without hunting through the code later.

### 3. Check the project

Run:

\`\`\`bash
npx hyperframes check
\`\`\`

This catches problems that are easy to miss in a browser preview: elements that disappear when the timeline is seeked, text with poor contrast, content outside the frame, and animations that do not render reliably.

Fix the errors before moving on.

### 4. Review still frames

Before rendering the whole video, take snapshots at the important moments:

\`\`\`bash
npx hyperframes snapshot --at 3,8,14,21
\`\`\`

Choose times that cover the hook, each major reveal, and the closing frame.

This is the fastest way to catch layout problems. Look for wrapped headlines, awkward spacing, clipped badges, weak hierarchy, or anything sitting too close to the edge.

### 5. Render a draft

When the frames look right, make a low-quality draft:

\`\`\`bash
npx hyperframes render --quality draft --output draft.mp4
\`\`\`

Watch it from beginning to end, preferably with sound on. Still frames tell you whether the design works. The draft tells you whether the timing works.

### 6. Give specific notes

Talk to Claude as if you were giving notes to an editor. Mention the time, the object, and the change you want.

Instead of:

> Make it better.

Try:

> At 12 seconds, hold the result card for one more second before the next transition.

Or:

> The cursor reaches the button too quickly. Slow the final part of its movement, then make the press more obvious.

Specific notes produce specific changes.

### 7. Render the final version

Only render at high quality once you are happy with the draft:

\`\`\`bash
npx hyperframes render --quality high --output final.mp4
\`\`\`

## Prompts worth reusing

These are useful because they describe how the video should behave, not what a particular video should contain.

### Before building

\`\`\`text
Turn this brief into a beat-by-beat storyboard before writing any animation code.
For each beat, include the approximate time, the main visual, the on-screen copy,
and how we enter and leave the scene.
\`\`\`

### Before rendering

\`\`\`text
Show me snapshots of the opening, every major reveal, and the closing frame
before you render the full video.
\`\`\`

### For better interaction

\`\`\`text
Make the interaction readable: move the cursor to the target, pause briefly,
show the press, then reveal the result. Do not let all four actions happen at once.
\`\`\`

### For typed text

\`\`\`text
Keep the camera focused on the part of the sentence being typed.
The movement should follow the caret smoothly without making the text hard to read.
\`\`\`

### For variety

\`\`\`text
Give each major result a different entrance, but keep the motion language consistent.
The scenes should feel related, not repeated.
\`\`\`

### For sound timing

\`\`\`text
Derive every sound cue from the same timing constants as the matching animation.
Do not place audio timings separately by hand.
\`\`\`

### Before a revision

\`\`\`text
Save the current working version before making this change so we can compare them.
\`\`\`

## Sound: use less than you think

Sound can make a basic animation feel finished, but it does not need to be complicated.

For a short interface demo, a small set of sounds is usually enough:

- typing
- a click or tap
- a soft pop when an item lands
- a whoosh for a larger movement
- a light confirmation sound

Use them to clarify what is happening, not to decorate every movement.

Music is optional. It can help a launch video feel energetic, but it can also make a straightforward demo feel like an advertisement. Decide based on where the video will be used.

The important technical rule is to keep sound and motion tied to the same timings. If the click moves, the click sound should move with it.

## Common problems

A few issues come up repeatedly:

- An element that starts hidden needs an explicit visible end state.
- Masks and clipping paths can accidentally cut off shadows, badges, or icons.
- Audio elements need clear IDs and durations.
- Avoid applying CSS transforms to elements that GSAP is also transforming.
- Check text contrast instead of trusting how it looks on your screen.
- Use fonts that will still be available when the video renders elsewhere.
- Use fictional names, addresses, and customer data in public demos.
- Keep text short enough to read at the speed of the final video.

The project checker will catch some of these. Snapshots and draft renders will catch the rest.

## The part that still needs you

Claude can build the scenes, write the animation, move timings around, and fix a surprising number of visual problems. What it cannot decide for you is what deserves attention.

You still need to choose the message, remove anything the viewer does not need, and decide when a moment feels rushed or flat.

That is the real job: not moving every layer yourself, but directing the viewer's attention.

## Start here

Pick one short video you genuinely need. Keep it under 30 seconds for your first attempt.

Write the brief using the template above. Ask Claude for the storyboard. Review a few frames before you render anything. Then make one rough version and give it concrete notes.

You do not need to understand every line of the animation code before you begin. You need a clear idea, a simple visual system, and the patience to make two or three passes.

That is usually enough to get from a blank folder to something worth showing.

— Alex Sidhu`,
  },
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
    title: "How to Have Claude Run Even When Your Laptop Is Shut",
    date: "2026-07-07",
    excerpt:
      "How to build a Claude Code routine that pulls your calendar and Slack DMs you a midday check-in every weekday, automatically, even when your laptop is closed. About ten minutes to set up.",
    highlights: [
      "What a cloud routine is and how it runs without your computer",
      "Connect Google Calendar and Slack in under five minutes",
      "The exact prompt I use, ready to copy and adapt",
      "Other routines you can build on the same pattern once it's running",
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
      "Connect Gmail, let Claude learn from your own sent emails, and turn it into a Skill that applies your voice automatically from then on. Ten minutes, nothing to install, no code.",
    highlights: [
      "The Gmail connector that lets Claude read your real sent emails, not a hypothetical version of your writing",
      "The exact prompt that turns your own emails into a communication-style profile",
      "How to package it as a Skill so Claude applies it automatically in every new chat",
      "Where one-person voice rules stop and a company-wide AI standard begins",
    ],
    content: `Someone replied to an email last week saying it was one of the clearest I'd sent. I'd written maybe ten words of it. Claude wrote the rest. The thing that made it sound like me wasn't a clever prompt. It was a file I built once, from my own sent emails, that Claude now checks every time I ask it to draft something.

You don't need Claude Code or a developer to set this up. It's three things inside claude.ai: connect Gmail, let Claude read your own sent emails and write your style profile, then turn that into a Skill so it applies itself. Here's exactly how.

## Why your emails still sound like a robot wrote them

Claude defaults to generic professional language because it has no idea how you actually write. Clear, correct, and completely un-you. The fix isn't a better prompt each time, it's giving Claude a permanent reference for your voice: your tone, the phrases you can't stand, your sentence rhythm. Once that reference exists and Claude checks it automatically, every draft starts from you instead of from a blank, corporate default.

## Step 1: Connect Gmail (about a minute)

In Claude, go to **Customize > Connectors** (or click the **+** in any chat and choose Connectors). Find Gmail, connect it, and authorize it. This is available on every plan, including Free.

Worth knowing going in: Claude can read and search your mail and create drafts, but it **can't send** on your behalf. That's a deliberate limit, not a bug, and it means the last step is always you hitting send.

## Step 2: Let Claude build your style profile from your real emails

Start a new chat and ask Claude to look at how you actually write, not how you think you write. Something like:

> Search my Gmail Sent folder for the last 20-30 emails I've written. Read through them and write me a communication-style.md file that covers: my tone in different contexts, phrases and patterns I overuse or should cut (including the generic AI-sounding lines, like "I hope this finds you well" or "please don't hesitate to reach out"), my sentence rhythm, and one default line for when in doubt. Be specific, not vague.

This is my own recommended prompt, not an official Claude script, but it's a straightforward use of what the Gmail connector actually does: it can search and read your Sent mail on request. Claude will hand back a first draft. Read it properly. Cut anything that doesn't sound like you, and add the phrases you personally can't stand that it missed. This is the file that matters most, so don't rubber-stamp the first pass.

Four things worth double-checking are in it:

**Tone.** How you write in different contexts. "Internal messages: casual and direct. Client emails: professional but plain-spoken, never corporate."

**What to avoid.** The most important section. Every word and pattern that makes an email sound machine-written: em dashes, emojis, "circle back", "touch base", "moving forward", "I hope this finds you well". Name them specifically.

**Sentence rhythm.** Contractions or not? Short sentences or longer ones? "Contractions are good. Vary sentence length. Avoid strings of three-word fragments back to back."

**Default.** Your baseline instinct. "When in doubt: shorter, sharper, more concrete. Strip filler."

## Step 3: Turn it into a Skill (this is the part that makes it stick)

A file sitting in a chat only helps that one conversation. A Skill is what makes Claude check your style automatically, every time, in any new chat.

1. Make sure **Code execution and file creation** is turned on: **Settings > Capabilities** for your own account. (If you're on a Team or Enterprise plan, your workspace owner turns this on once for everyone, under organization Skills settings.)
2. Ask Claude to save your finished style file as \`SKILL.md\`, with a short header at the top: a \`name\` and a \`description\`. The description matters more than anything else here, it's what Claude reads to decide when to use the skill, so make it specific and say plainly that this applies whenever you're drafting or rewriting an email.
3. Zip that file so it sits at the top level of the zip (Claude can talk you through this if you're not sure how).
4. Go to **Customize > Skills**, hit the **+**, choose **Create skill > Upload a skill**, and upload the zip.

## Step 4: Draft an email in your own voice

Open a new chat, paste in whatever you're replying to, and just say "draft a reply." Claude checks its available skills against your request, sees the description matches "drafting an email," and applies your voice rules without you asking twice.

It won't catch every single time. If a draft comes back sounding generic, name the skill directly: "use my email-voice skill for this." That forces it.

One more thing worth doing: ask Claude to drop the finished draft straight into your Gmail Drafts folder using the connector. It'll be sitting there waiting. Open Gmail, read it over, hit send yourself.

## The honest ceiling

This whole setup lives in your Claude account. It's genuinely useful for you, and it took maybe ten minutes to build. But it's still one person's voice, in one person's settings. Nobody else on your team gets it unless they build their own, and every tool they use for outbound comms needs its own version of the same fix.

The next level is a voice standard that's built once and enforced automatically, everywhere, for everyone on the team, not something each person sets up for themselves. That's what we build into the AI operating systems at Whitehorse. If you want that for your business, an audit is where it starts.

## Start here

Open Claude right now, connect Gmail, and ask it to pull your last 20 sent emails. That's the whole first step, and it takes about two minutes. You'll have a first draft of your style file before your coffee's cold.

Built by Alex Sidhu, Whitehorse AI.`,
  },
  {
    slug: "the-five-ai-essays",
    title: "The Five AI Essays Worth Reading",
    date: "2026-08-27",
    excerpt:
      "The five foundational articles I would read to understand the state of AI right now. Who wrote them, what each one argues, and the order to read them in.",
    highlights: [
      "The five essays, who wrote them, and what each one actually argues",
      "Why models not learning on the job is the argument to start with",
      "The intelligence curse, and what happens when capable people stop being needed",
      "The order to read them in, so the five build one argument instead of five",
    ],
    content: `## Start with Dwarkesh (most digestible)

[Why I don't think AGI is right around the corner](https://www.dwarkesh.com/p/timelines-june-2025). June 2025.

Patel interviews these people for a living. Long, technical, unhurried conversations with the researchers actually building this. So when he says he isn't convinced, it lands differently than a random sceptic saying it. (Would recommend listening to his podcast as well)

His whole argument is one idea. Models don't learn on the job (which is maybe less true now).

Someone you hire in January is better in June. They picked things up, sat in the meetings, got the context. A model doesn't do that. You can't hand it feedback that sticks, so you get roughly the same thing out of the box every time, forever.


## Then Aschenbrenner

[Situational Awareness](https://situational-awareness.ai/). June 2024. Around 165 pages, so give it an afternoon (but definitely worth the read)

Aschenbrenner was on OpenAI's superalignment team until April 2024. He left over an alleged leak he disputes, and wrote this not long after. Columbia valedictorian at 19, which tells you something about the register before you open it.

The method is extrapolation. Count the orders of magnitude coming from compute, from algorithmic efficiency, and from what he calls unhobbling. Draw the line forward. You land on AGI around 2027.

Then it turns geopolitical quickly. Trillion-dollar clusters, a race with China, and eventually the national security state taking the whole thing over.

## AI 2027

[AI 2027](https://ai-2027.com/). April 2025. Daniel Kokotajlo, who left OpenAI, Scott Alexander of Astral Codex Ten, and three others.

Month by month from mid-2025 to late 2027, following four generations of AI agents as each one builds the next. It ends twice on purpose. One branch where the race keeps running, one where it slows.

It paints a (caveated) picture of how AI may progress and the two paths we could turn down.

## The Intelligence Curse

[The Intelligence Curse](https://intelligence-curse.ai/). April 2025. Luke Drago and Rudolf Laine.

The title borrows from the resource curse, where countries sitting on oil somehow end up worse governed than countries without it. The money arrives whether or not anyone builds a decent school, so eventually nobody builds one.

Now swap oil for intelligence.

Every state and company currently needs capable people. It's what moves industries like education, healthcare - the whole ladder up. 

Take the need away and none of it gets cut out of malice. It just stops mattering to anyone with the power to fund it.

They aren't fatalists about it, which I appreciated. Their answers all point one way: get the tools into individual hands, augment people now, align models to users instead of institutions.

## The Last Invention is the odd one out

[The Last Invention](https://thelastinvention.ai/). May 2025. Alex Brogan. Twelve parts.

Actually written by an Australian. It goes into a nuanced dive over how AI may impact specific industries.

This one asks what you're doing about it while there's still room to do anything, which it calls the prep window. Work, then money, then meaning.


## Start here

Start with the Dwarkesh piece, work your way into it and give yourself enough time to go through them all.

Built by Alex Sidhu, Whitehorse AI.`,
  },
  {
    slug: "the-adhd-skill",
    title: "The ADHD Skill",
    date: "2026-08-28",
    excerpt:
      "The free skill that stops your AI burying the answer. Action first, numbered steps, no \"Great question!\" Two minutes to install, and it works on Claude Code, Cursor, Codex, Gemini and Zed.",
    highlights: [
      "The two commands that install it, plus the versions for Codex, Cursor, Gemini, Qwen, Zed and Pi",
      "Three ways to grab the file straight from GitHub if you would rather not install a plugin",
      "Exactly where the file has to sit for your tool to find it",
      "Why installing it changes nothing until you turn it on yourself",
    ],
    content: `"Great question! Let me take a look at that for you."

You've heard that before.

Then a paragraph of context you didn't ask for, a suggestion buried in the middle, and a closing line asking if you'd like it to dig deeper. You scroll back up to find the actual instruction. Somewhere in there you lose the thread of what you were doing.

That's not a model problem. It's a shape problem. The answer was in there, it was just wrapped in fifteen sentences of throat-clearing.

There's a fix, and it takes two minutes to install.

It's called \`i-have-adhd\`.

## What actually changes

Same question, same model, before and after.

**Before**

> Great question! Let me think about this. Your auth flow has a few moving pieces: the middleware, the token verification, and the cookie handling. Looking at \`src/auth.ts\`, the \`verifyToken\` function (around lines 42-58) seems to be using an older \`jsonwebtoken\` API. One approach would be to update the package and rewrite that function. After making the change, you'd want to run the auth tests to confirm nothing breaks. By the way, you might also want to look at your dependency versions overall. Hope this helps! Let me know if you want to dig deeper.

**After**

> Run \`npm install jsonwebtoken@latest\`, then edit \`src/auth.ts:42\`.
>
> 1. Open \`src/auth.ts\`
> 2. Replace \`verifyToken\` (lines 42 to 58) with the snippet below
> 3. Run \`npm test -- auth.spec.ts\`
>
> Next: paste the first failing line if any test fails.

Don't worry, it's just an example, you don't have to be super technical.

## Install it

Two minutes. Claude Code first, since that's what most people reading this are on.

\`\`\`bash
claude plugin marketplace add ayghri/i-have-adhd
claude plugin install i-have-adhd@i-have-adhd
\`\`\`

Restart Claude Code, then type \`/i-have-adhd\`. It stays on for that session. Say "stop adhd mode" or "normal mode" and it's off again.

Check it landed with \`claude plugin list\`. Update it later with \`claude plugin marketplace update i-have-adhd\`.

Not on Claude Code? It works on most of them.

| Tool | Install |
|---|---|
| Codex | \`codex plugin marketplace add ayghri/i-have-adhd --ref main\` then \`codex plugin add i-have-adhd@i-have-adhd\`. Invoke with \`$i-have-adhd\` |
| Cursor, Amp, Copilot | \`npx skills add ayghri/i-have-adhd\` (add \`-g\` for every project) |
| Gemini CLI | \`gemini extensions install https://github.com/ayghri/i-have-adhd\` |
| Qwen Code | \`qwen extensions install ayghri/i-have-adhd\` |
| Zed | Agent Panel, Skills manager, "Create skill from URL", paste the repo's \`SKILL.md\` link |
| Pi | \`pi install https://github.com/ayghri/i-have-adhd\` |

One thing worth knowing. In Claude Code, Codex and Qwen, installing it changes nothing on its own. The skill declares \`disable-model-invocation: true\`, which means the assistant can't switch it on by itself. You type the command or it stays off. Other tools read every skill's description at startup and may activate it themselves.

## Get the file yourself

You don't have to install a plugin. The skill is one markdown file, about 1,400 words, and you can drop it straight into your skills folder instead.

The repo is [github.com/ayghri/i-have-adhd](https://github.com/ayghri/i-have-adhd). The file you want is \`skills/i-have-adhd/SKILL.md\`.

Three ways to get it, easiest first.

**Read it in the browser.** Open [the file on GitHub](https://github.com/ayghri/i-have-adhd/blob/main/skills/i-have-adhd/SKILL.md). Click "Raw" at the top right and you get the plain text, ready to copy.

**Download the whole repo.** Green "Code" button on the repo homepage, then "Download ZIP". Unzip it and the skill is in \`skills/i-have-adhd/\`. This is probably the easiest way for most people.

**One command.** This pulls the file straight into the right folder for Claude Code:

\`\`\`bash
mkdir -p ~/.claude/skills/i-have-adhd
curl -fsSL https://raw.githubusercontent.com/ayghri/i-have-adhd/main/skills/i-have-adhd/SKILL.md \\
  -o ~/.claude/skills/i-have-adhd/SKILL.md
\`\`\`

Wherever the file lands, it needs to sit in a folder your tool scans:

| Tool | Folder |
|---|---|
| Claude Code | \`~/.claude/skills/i-have-adhd/\` |
| Cursor | \`~/.cursor/skills/i-have-adhd/\` |
| Copilot | \`~/.copilot/skills/i-have-adhd/\` |
| Zed | \`~/.config/zed/skills/i-have-adhd/\` |

Restart, type \`/i-have-adhd\`, and it behaves exactly like the plugin version.

Worth actually reading the file before you use it, by the way. It's ten rules with a bad example and a good example under each, and the reasoning is the useful part. Takes about six minutes.

MIT licensed, by Ayoub G. Fork it, edit it, ship it, no permission needed.

## Start here

Run the two install commands. Type \`/i-have-adhd\`. Ask it something you already asked it this week.

Two minutes, and you'll know within one reply whether you want it always-on.

Built by Alex Sidhu, Whitehorse AI.`,
  },
  {
    slug: "the-three-videos",
    title: "The Three Videos",
    date: "2026-08-31",
    excerpt:
      "The only three AI videos I would send someone starting from scratch. Chat, then cowork, then code, with an honest verdict on each and what the order is for.",
    highlights: [
      "The three videos, who made them, and what each one is actually for",
      "An honest verdict on each, not a neutral summary",
      "Why the order is chat, then cowork, then code",
      "The one I run a version of every single day",
    ],
    content: `Someone asked me what to watch to get up to speed on AI.

I've sat through a lot of bad AI content this year. Most of it is either a demo of something you can't use or a lecture on something you don't need yet. So here are the only three I'd actually send.

The order is chat, then cowork, then code. 

| # | Video | Who | Length |
|---|---|---|---|
| 1 | [Learn 80% of Claude Cowork in Under 20 Minutes](https://www.youtube.com/watch?v=z9rdrNrkvDY) | Jeff Su | 18:54 |
| 2 | [How AI agents & Claude skills work](https://www.youtube.com/watch?v=S_oN3vlzpMw) | Greg Isenberg with Ras Mic | 35:25 |
| 3 | [Turn Claude Code Into Your Executive Assistant in 27 Mins](https://www.youtube.com/watch?v=mi4hcipESKQ) | Nate Herk | 27:13 |

## 1. Jeff Su, Claude Cowork in under 20 minutes

**What it is.** A straight walkthrough of Anthropic's desktop app and its seven capabilities: local file access, persistent memory, connectors, skills, projects, the browser extension, and scheduled tasks.

**The verdict.** The best pure-usage video on this list and the only one I'd call genuinely beginner friendly. No theory, no setup pain, nothing to install before you can follow along. If you're still copying and pasting between a chat window and your actual work, this is the video that ends that habit.

It's also fully timestamped, so you can jump to the capability you care about instead of watching linearly.

## 2. Greg Isenberg with Ras Mic, how agents and skills work

**What it is.** A conversation rather than a tutorial. Context windows, what a skill actually is under the hood, how to build one, and how to keep sharpening it.

**The verdict.** This is the one that changes your mental model. The useful claim: skills load lazily. Only the name and description sit in context until the agent decides it needs the full file, which is why a folder of thirty skills costs you almost nothing until one gets used.

His framing is that the models are already good, and the differentiator is the context and harness you build around them. That's an unusual thing to hear from someone whose audience wants model news.

## 3. Nate Herk, Claude Code as your executive assistant

**What it is.** He builds a working AI executive assistant in four phases: set up the project, load it with context and rules, add your first skills and subagents, then grow it over time.

**The verdict.** Watch this third. It's the most in depth of the three and by far the most rewarding, and it will half make sense if you haven't done the other two. The demo he opens with is the honest sell: tasks that ran before he woke up.

I run a version of this setup every day. It knows my clients, my priorities, my writing voice, and it drafts off all three. It's the single highest-leverage thing I've built for myself, and it started with roughly this video.`,
  },
  {
    slug: "the-ai-operating-system-playbook",
    title: "The AI Operating System Playbook",
    date: "2026-09-06",
    excerpt:
      "A practical 4C audit and 30-day build plan for turning a second brain into an AI system that knows your world, reaches live information, performs repeatable work, and runs consistently.",
    highlights: [
      "The 4C scorecard: Context, Connections, Capabilities and Cadence",
      "The exact context pack that turns generic AI into an informed assistant",
      "A one-page template for turning a repeated process into an AI capability",
      "A safe 30-day path from one useful workflow to reliable routines",
    ],
    content: `## A second brain remembers. An operating system acts.

Most people now have some form of AI second brain: a folder of notes, project instructions, or a chatbot that remembers a few details.

That is useful, but memory is only the first layer.

A working AI system also needs access to current information, a reliable method for doing useful work, and a rhythm for running that work.

Nate Herk calls this [the Four Cs of an AIOS](https://github.com/nateherkai/AIS-OS):

1. **Context:** what the AI knows.
2. **Connections:** what information and tools it can reach.
3. **Capabilities:** what repeatable jobs it can perform.
4. **Cadence:** when those jobs run.

Context comes first. Connections and Capabilities can then develop together around a real workflow. Cadence comes last.

In Nate's shorthand, Context and Connections form the second brain. Capabilities and Cadence add the execution layer that turns it into an AI operating system.

## Score your current system

Give yourself 0 to 3 for each C:

| Score | Meaning |
|---|---|
| 0 | It does not exist |
| 1 | It works informally or occasionally |
| 2 | It is documented and usually reliable |
| 3 | It is maintained, tested and trusted |

Now score these four statements:

- **Context:** My AI understands my role, business, priorities, voice and important decisions.
- **Connections:** It can safely retrieve the current information required for at least one real workflow.
- **Capabilities:** It can perform at least one repeated process with a consistent, useful output.
- **Cadence:** A proven process runs on a deliberate trigger and brings uncertain cases to a human.

Your weakest C is normally your next constraint. This is a practical self-audit, not a scientific benchmark.

## C1: Context

Context is the information your AI needs to make a good decision in your world.

Do not dump every document you own into one folder. Good context is relevant, current and structured.

Start with six sections:

| Section | What belongs there |
|---|---|
| You | Your role, responsibilities and working style |
| Business | Customers, offers, model and constraints |
| Team | Who owns what and when to involve them |
| Priorities | What matters over the next 30 to 90 days |
| Voice and rules | How outputs should sound and what AI must not do |
| Decisions | Important calls, the reasoning and the date |

If you do not have this foundation, use my free [AI Second Brain guide](https://alexsidhu.com/resources/the-ai-second-brain). It includes the template and setup.

Information also has a half-life:

- **Stable:** your role, business model and communication preferences.
- **Changing:** your team, customers and quarterly goals.
- **Live:** your inbox, calendar, pipeline and project status.

Stable context can live in maintained files. Live information should usually remain in the system where it was created.

**Do this now:** ask your AI to review your saved context and explain what it understands, what remains unclear, and which facts may be stale. Fix those gaps before adding more tools.

## C2: Connections

Connections let AI reach live information and, when appropriate, act inside the tools where work happens.

The goal is not to connect everything. It is to provide the minimum access required for one valuable workflow.

For a weekly sales briefing, the system might need read access to your CRM, calendar and relevant email. It probably does not need permission to delete messages, rewrite every record or contact customers.

Map the connection before creating it:

| Question | Your answer |
|---|---|
| What outcome do I want? | |
| Where does the required information live? | |
| What must the AI read? | |
| What, if anything, must it change? | |
| Which actions require approval? | |
| Where should the result appear? | |

Three rules matter:

1. Start read-only.
2. Grant the minimum access.
3. Keep sending, spending, deleting, publishing and customer changes behind human approval until deeply trusted.

**Do this now:** connect the single information source that removes the biggest bottleneck in your chosen workflow. Test whether the AI retrieves the right information before letting it act.

## C3: Capabilities

A capability is a repeatable job the AI knows how to perform.

“Help with sales” is vague. “Review open opportunities, find deals with no activity for seven days, and draft the next action for each owner” is a capability.

Define one using this card:

| Field | Definition |
|---|---|
| Name | A verb and outcome, such as “Prepare the weekly pipeline brief” |
| Trigger | The request or event that starts the work |
| Inputs | The information and systems required |
| Steps | The process in the correct order |
| Rules | Boundaries, policies and judgment it must respect |
| Output | The exact format and destination |
| Approval | What a human must check |
| Exceptions | When it should stop and ask |
| Success | How you know the result is correct and useful |

After doing the process manually, ask:

> Turn the process we just completed into a reusable capability. Document its trigger, inputs, steps, rules, output, approval points, exceptions and definition of success. Identify any judgment calls I made that are not yet explicit.

Good first capabilities include meeting follow-ups, weekly reviews and inbox triage. Each has clear inputs, a visible output and a natural approval point.

**Do this now:** run one weekly process with the AI twice. Save your corrections, then test it on an unusual case. If it only works on the perfect example, it is still a demo.

## C4: Cadence

Cadence is when the system works without waiting for you to remember the perfect prompt.

It may be time-based, such as a Friday pipeline review, or event-based, such as preparing a follow-up when a meeting ends.

Cadence makes an assistant feel like infrastructure. It also repeats mistakes, which is why it comes last.

Move through autonomy gradually:

1. **Observe:** watch the process.
2. **Suggest:** recommend an action.
3. **Prepare:** create the finished output for approval.
4. **Act:** complete low-risk, reversible actions and report them.
5. **Escalate:** handle the routine and send uncertain cases to a person.

Before scheduling anything, decide:

- What triggers it?
- What happens if information is missing?
- Which outputs require approval?
- Where are failures reported?
- Who reviews quality?
- What result would cause you to pause it?

**Do this now:** schedule one proven, low-risk capability in Prepare mode. Review its first four outputs and save every correction inside the process.

## Build one complete loop

Here is a weekly-review example:

| Layer | What it contains |
|---|---|
| Context | Goals, priorities, team responsibilities and decisions |
| Connections | Calendar, project system and meeting notes |
| Capability | Compare planned and completed work, identify drift, propose next actions |
| Cadence | Prepare the review every Friday for approval |

That is the correct unit of AI adoption: one useful loop, not a collection of tools.

## Your 30-day plan

### Week 1: Context

Choose one workflow. Build the six context sections. Define the result the workflow should produce.

### Week 2: Connections

Map the required information. Connect the most important source with read-only access. Test retrieval on five real examples.

### Week 3: Capability

Perform the process twice. Complete the capability card. Add the judgment calls, exceptions and success criteria.

### Week 4: Cadence

Run the capability in Prepare mode. Review four outputs. Save every correction before considering more autonomy.

At the end of the month, you should have one reliable loop. Build the second using what the first taught you.

## Where the DIY version stops

A personal system can become extremely useful with a context folder, a few careful connections and several well-designed capabilities.

A company is harder. Context is spread across people and tools. Permissions differ by role. Processes change. Customer information needs protection. Someone must own failures, updates and quality.

That is the line between a second brain and the systems we build at Whitehorse AI.

We find the workflows where AI can create real value, then build the company context, connections, capabilities and operating rhythm around them. The goal is not maximum automation. It is a system the business can trust.

If this audit exposed that gap, reply to the email that delivered this guide with the word **audit**. I will show you how we would map it.

## Start here

Choose one repeated workflow that costs time, delays revenue or regularly drops the ball.

Build it through Context, Connections and Capabilities, then earn the Cadence.

One trusted loop is worth more than twenty AI experiments.

Built by Alex Sidhu, Whitehorse AI.`,
  },
];

export function getResource(slug: string): Resource | undefined {
  return resources.find((r) => r.slug === slug);
}
