import heheLogo from "@/assets/hehe-logo.jpeg";

const AboutSection = () => {
  return (
    <section id="about" className="px-4 py-16">
      <div className="mx-auto max-w-5xl rounded-3xl bg-soft-blue p-8 md:p-16">
        <div className="flex flex-col items-center gap-10 md:flex-row">
          <div className="flex-1 text-center md:text-left">
            <h2 className="mb-4 font-heading text-4xl font-black md:text-5xl">
              About <span className="text-gold">$HEHE</span>
            </h2>
            <p className="mb-4 text-muted-foreground">
              Meet the coin that left the joke pile and bought the whole internet.
            </p>
            <div className="rounded-2xl border border-border bg-background/60 p-6">
              <h3 className="mb-2 font-heading text-lg font-bold">FROM MEME TO MOVEMENT</h3>
              <p className="text-sm text-muted-foreground">
                $HEHE isn't just a memecoin — it's a movement. Born from internet
                humor, raised on degen dreams, and now building a community of
                believers. Fueled by pure vibes and the power of laughter, $HEHE
                is here to turn every holder into a legend.
              </p>
            </div>
          </div>
          <div className="float-animation w-48 shrink-0 md:w-64">
            <img
              src={heheLogo}
              alt="HEHE Mascot"
              className="w-full rounded-full shadow-xl ring-4 ring-gold/20"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
