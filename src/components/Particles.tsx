const particles = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  delay: `${Math.random() * 8}s`,
  duration: `${6 + Math.random() * 6}s`,
  char: ["✨", "⭐", "🪙", "💫"][i % 4],
}));

const Particles = () => (
  <>
    {particles.map((p) => (
      <div
        key={p.id}
        className="particle"
        style={{
          left: p.left,
          bottom: "-20px",
          animationDelay: p.delay,
          animationDuration: p.duration,
          fontSize: "16px",
        }}
      >
        {p.char}
      </div>
    ))}
  </>
);

export default Particles;
