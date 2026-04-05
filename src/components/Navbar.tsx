import heheLogo from "@/assets/hehe-logo.jpeg";

const navLinks = ["Home", "About", "Tokenomics", "Roadmap"];

const Navbar = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <img src={heheLogo} alt="HEHE Logo" className="h-10 w-10 rounded-full" />
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
        <a href="#waitlist" className="btn-glow rounded-full bg-gold px-5 py-2 font-heading text-sm font-bold text-foreground">
          Join Early 🚀
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
