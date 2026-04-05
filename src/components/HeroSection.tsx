import heheLogo from "@/assets/hehe-logo-nobg.png";

const floatingEmojis = [
  { emoji: "😂", top: "10%", left: "5%", delay: "0s" },
  { emoji: "🚀", top: "20%", right: "8%", delay: "1s" },
  { emoji: "💰", top: "60%", left: "3%", delay: "2s" },
  { emoji: "😂", top: "70%", right: "5%", delay: "0.5s" },
  { emoji: "🪙", top: "40%", left: "90%", delay: "1.5s" },
  { emoji: "🤣", top: "15%", left: "80%", delay: "3s" },
];

const HeroSection = () => {
  return (
    <section id="home" className="relative overflow-hidden px-4 py-20 text-center md:py-32">
      {floatingEmojis.map((e, i) => (
        <span
          key={i}
          className="float-emoji"
          style={{ top: e.top, left: e.left, right: (e as any).right, animationDelay: e.delay }}
        >
          {e.emoji}
        </span>
      ))}

      <div className="relative z-10 mx-auto max-w-3xl">
        <div className="mb-4 inline-block rounded-full bg-gold/20 px-4 py-1.5 text-sm font-semibold text-foreground">
          If you're here… you're early 👀
        </div>

        <h1 className="mb-6 font-heading text-4xl font-black leading-tight md:text-6xl lg:text-7xl">
          <span className="text-gold">$HEHE</span> — The Laughing{" "}
          <span className="text-cyan">Memecoin</span> 😂
        </h1>

        <p className="mx-auto mb-10 max-w-xl text-lg text-muted-foreground">
          The internet's funniest token. Built on laughs, powered by community,
          destined for the moon.
        </p>

        <div className="mb-12 flex justify-center">
          <a
            href="#waitlist"
            className="btn-glow rounded-full bg-gold px-8 py-4 font-heading text-lg font-bold text-foreground"
          >
            Join Early 🚀
          </a>
        </div>

        <div className="float-animation mx-auto w-48 md:w-64">
          <img
            src={heheLogo}
            alt="HEHE Coin Mascot"
            className="w-full rounded-full shadow-2xl ring-4 ring-gold/30"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
