import heheMascot from "@/assets/hehe-mascot.png";

const floatingEmojis = [
  { emoji: "😂", top: "10%", left: "5%", delay: "0s" },
  { emoji: "🚀", top: "20%", right: "8%", delay: "1s" },
  { type: "mascot", top: "60%", left: "3%", delay: "2s" },
  { emoji: "😂", top: "70%", right: "5%", delay: "0.5s" },
  { type: "mascot", top: "40%", left: "90%", delay: "1.5s" },
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
          {(e as any).type === "mascot" ? (
            <img src={heheMascot} alt="" className="w-8 h-8 rounded-full opacity-60" />
          ) : (
            e.emoji
          )}
        </span>
      ))}

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="flex flex-col-reverse items-center gap-8 md:flex-row md:text-left">
          {/* Text content */}
          <div className="flex-1">
            <div className="mb-4 inline-block rounded-full bg-primary/20 px-4 py-1.5 text-sm font-semibold text-foreground">
              If you're here… you're early 👀
            </div>

            <h1 className="mb-6 font-heading text-4xl font-black leading-tight md:text-6xl lg:text-7xl">
              <span className="text-primary">$HEHE</span> — The Laughing{" "}
              <span className="text-secondary">Memecoin</span> 😂
            </h1>

            <p className="mx-auto mb-10 max-w-xl text-lg text-muted-foreground md:mx-0">
              The internet's funniest token. Built on laughs, powered by community,
              destined for the moon.
            </p>

            <div className="mb-12 flex justify-center md:justify-start">
              <div className="relative inline-flex items-center gap-3">
                <a
                  href="#waitlist"
                  className="btn-glow rounded-full bg-primary px-8 py-4 font-heading text-lg font-bold text-foreground"
                >
                  Join Early 🚀
                </a>
                <img
                  src={heheMascot}
                  alt="HEHE Mascot"
                  className="hidden w-14 -rotate-12 drop-shadow-lg md:block"
                  style={{ filter: "drop-shadow(0 0 8px hsla(43, 100%, 50%, 0.4))" }}
                />
              </div>
            </div>
          </div>

          {/* Mascot */}
          <div className="hero-mascot relative w-48 shrink-0 md:w-72 lg:w-80">
            <div
              className="absolute inset-0 rounded-full blur-3xl"
              style={{ background: "hsla(43, 100%, 50%, 0.2)" }}
            />
            <img
              src={heheMascot}
              alt="HEHE Mascot Character"
              className="float-animation relative z-10 w-full drop-shadow-2xl"
              style={{
                transform: "rotate(5deg)",
                filter: "drop-shadow(0 0 30px hsla(43, 100%, 50%, 0.35))",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
