const segments = [
  { label: "Liquidity", pct: 40, color: "hsl(15, 80%, 60%)" },
  { label: "Marketing", pct: 25, color: "hsl(43, 100%, 50%)" },
  { label: "Community Rewards", pct: 20, color: "hsl(30, 70%, 50%)" },
  { label: "Dev & Ecosystem", pct: 15, color: "hsl(200, 60%, 50%)" },
];

const DonutChart = () => {
  const size = 220;
  const stroke = 36;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  let offset = 0;

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="mx-auto">
      {segments.map((seg, i) => {
        const dash = (seg.pct / 100) * circumference;
        const gap = circumference - dash;
        const currentOffset = offset;
        offset += dash;
        return (
          <circle
            key={i}
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={seg.color}
            strokeWidth={stroke}
            strokeDasharray={`${dash} ${gap}`}
            strokeDashoffset={-currentOffset}
            strokeLinecap="round"
            style={{ transform: "rotate(-90deg)", transformOrigin: "center" }}
          />
        );
      })}
      <text x="50%" y="45%" textAnchor="middle" className="fill-foreground font-heading text-xs font-bold">
        TOTAL SUPPLY
      </text>
      <text x="50%" y="58%" textAnchor="middle" className="fill-foreground font-heading text-sm font-black">
        1,000,000,000
      </text>
    </svg>
  );
};

const TokenomicsSection = () => {
  return (
    <section id="tokenomics" className="px-4 py-16">
      <div className="mx-auto max-w-4xl rounded-3xl bg-soft-blue p-8 text-center md:p-16">
        <h2 className="mb-10 font-heading text-4xl font-black md:text-5xl">
          <span className="text-gold">Token</span>omics
        </h2>

        <DonutChart />

        <p className="mt-6 text-sm text-muted-foreground">
          Dev — Real-time rewards system overview
        </p>

        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
          {segments.map((seg) => (
            <div key={seg.label} className="rounded-xl border border-border bg-background/60 p-4">
              <div
                className="mx-auto mb-2 h-3 w-3 rounded-full"
                style={{ backgroundColor: seg.color }}
              />
              <div className="font-heading text-sm font-bold">{seg.label}</div>
              <div className="text-xs text-muted-foreground">{seg.pct}%</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TokenomicsSection;
