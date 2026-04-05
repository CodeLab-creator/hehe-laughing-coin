const MarqueeBanner = () => {
  const items = Array(6).fill("$HEHE — The Laughing Memecoin 😂");
  return (
    <div className="w-full overflow-hidden bg-gold py-2.5">
      <div className="marquee-track">
        {items.map((text, i) => (
          <span key={i} className="mx-8 whitespace-nowrap font-heading text-sm font-bold tracking-wide text-foreground md:text-base">
            {text} 🪙
          </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeBanner;
