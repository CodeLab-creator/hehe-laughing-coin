import { useState, useEffect } from "react";
import { toast } from "sonner";

const BASE_COUNT = 137;

const WaitlistSection = () => {
  const [email, setEmail] = useState("");
  const [count, setCount] = useState(BASE_COUNT);

  useEffect(() => {
    const stored = localStorage.getItem("hehe_visits") || "0";
    const visits = parseInt(stored) + 1;
    localStorage.setItem("hehe_visits", String(visits));
    setCount(BASE_COUNT + visits * 3 + Math.floor(Math.random() * 5));
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email address");
      return;
    }
    toast.success("You're in! Welcome to the $HEHE family 😂🚀");
    setEmail("");
    setCount((c) => c + 1);
  };

  return (
    <section id="waitlist" className="px-4 py-16">
      <div className="glass-card mx-auto max-w-lg p-8 text-center md:p-12">
        <h2 className="mb-2 font-heading text-3xl font-bold md:text-4xl">
          Join the Inner Circle 🚀
        </h2>
        <p className="mb-8 text-muted-foreground">Be the first to know when $HEHE launches</p>

        <form onSubmit={handleSubmit} className="mb-6 flex flex-col gap-3 sm:flex-row">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="flex-1 rounded-full border border-border bg-background px-5 py-3 text-sm outline-none focus:ring-2 focus:ring-gold"
          />
          <button
            type="submit"
            className="btn-glow whitespace-nowrap rounded-full bg-gold px-6 py-3 font-heading text-sm font-bold text-foreground"
          >
            Join Early 🚀
          </button>
        </form>

        <p className="text-sm font-semibold text-muted-foreground">
          🔥 <span className="text-gold">{count}</span> people already joined
        </p>
      </div>
    </section>
  );
};

export default WaitlistSection;
