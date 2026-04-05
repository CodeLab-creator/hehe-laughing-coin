import { useState, useEffect } from "react";

const TARGET = new Date("2026-05-06T00:00:00Z").getTime();

const CountdownSection = () => {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const tick = () => {
      const diff = Math.max(0, TARGET - Date.now());
      setTime({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const boxes = [
    { label: "Days", value: time.days },
    { label: "Hours", value: time.hours },
    { label: "Minutes", value: time.minutes },
    { label: "Seconds", value: time.seconds },
  ];

  return (
    <section className="px-4 py-16">
      <div className="glass-card mx-auto max-w-2xl p-8 text-center md:p-12">
        <h2 className="mb-8 font-heading text-3xl font-bold md:text-4xl">
          Launching In 🚀
        </h2>
        <div className="grid grid-cols-4 gap-3 md:gap-6">
          {boxes.map((b) => (
            <div key={b.label} className="rounded-2xl bg-foreground/5 p-4 md:p-6">
              <div className="font-heading text-3xl font-black text-gold md:text-5xl">
                {String(b.value).padStart(2, "0")}
              </div>
              <div className="mt-1 text-xs font-medium text-muted-foreground md:text-sm">
                {b.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CountdownSection;
