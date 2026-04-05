const phases = [
  {
    num: 1,
    title: "Launch & Meme Campaign",
    desc: "Let the madness begin. Viral memes, degen vibes, and strategic hype to build unstoppable momentum.",
  },
  {
    num: 2,
    title: "Community Growth & CEX Listings",
    desc: "Expand the army of holders, drop alpha daily, and secure listings on major exchanges.",
  },
  {
    num: 3,
    title: "Ecosystem Tools & Rewards",
    desc: "From real-time rewards to degen-friendly tools — $HEHE holders get more ways to earn and win.",
  },
  {
    num: 4,
    title: "Merch, NFTs & IRL Events",
    desc: "From memes to merch, and screens to the streets. Limited drops, collectible NFTs, and real-world events.",
  },
];

const RoadmapSection = () => {
  return (
    <section id="roadmap" className="px-4 py-16">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="mb-12 font-heading text-4xl font-black md:text-5xl">
          <span className="text-gold">Road</span>map 🗺️
        </h2>

        {/* Desktop timeline */}
        <div className="hidden md:block">
          <div className="relative mx-auto flex max-w-4xl items-start justify-between">
            <div className="absolute left-0 right-0 top-6 h-0.5 bg-border" />
            {phases.map((p) => (
              <div key={p.num} className="relative z-10 w-1/4 px-3">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border-2 border-gold bg-background font-heading text-lg font-bold text-gold">
                  {p.num}
                </div>
                <h3 className="mb-2 font-heading text-sm font-bold">{p.title}</h3>
                <p className="text-xs text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile */}
        <div className="space-y-6 md:hidden">
          {phases.map((p) => (
            <div key={p.num} className="flex gap-4 text-left">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-gold bg-background font-heading font-bold text-gold">
                {p.num}
              </div>
              <div>
                <h3 className="font-heading text-sm font-bold">{p.title}</h3>
                <p className="text-xs text-muted-foreground">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
