import { useState, useEffect } from "react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const FAKE_COUNT = 148;

const WaitlistSection = () => {
  const [email, setEmail] = useState("");
  const [count, setCount] = useState(FAKE_COUNT);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const fetchCount = async () => {
      const { count: realCount } = await supabase
        .from("waitlist")
        .select("*", { count: "exact", head: true });
      if (realCount !== null) {
        setCount(FAKE_COUNT + realCount);
      }
    };
    fetchCount();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email address");
      return;
    }
    setSubmitting(true);
    const { error } = await supabase.from("waitlist").insert({ email: email.trim().toLowerCase() });
    setSubmitting(false);
    if (error) {
      if (error.code === "23505") {
        toast.error("This email is already on the waitlist!");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
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
