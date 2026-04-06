import heheMascot from "@/assets/hehe-mascot.png";

const particles = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  delay: `${Math.random() * 8}s`,
  duration: `${6 + Math.random() * 6}s`,
  char: ["✨", "⭐", "🪙", "💫"][i % 4],
  isMascot: i % 5 === 0,
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
        {p.isMascot ? (
          <img src={heheMascot} alt="" className="w-5 h-5 rounded-full" />
        ) : (
          p.char
        )}
      </div>
    ))}
  </>
);

export default Particles;
