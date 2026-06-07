export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
};

export const posts: Post[] = [
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
