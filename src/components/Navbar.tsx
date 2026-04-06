

const navLinks = ["Home", "About", "Tokenomics", "Roadmap"];

const Navbar = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center">
          <span className="font-heading text-lg font-bold">$HEHE</span>
        </div>
        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link.toLowerCase())}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <a href="https://x.com/HEHE440042" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-foreground">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
          <a href="#waitlist" className="btn-glow rounded-full bg-gold px-5 py-2 font-heading text-sm font-bold text-foreground">
            Join Early 🚀
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
