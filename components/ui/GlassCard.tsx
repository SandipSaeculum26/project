type Props = {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: string;
  glow?: boolean;
};

export function GlassCard({ children, className = "", hover = true, padding = "p-7", glow = false }: Props) {
  return (
    <div className={`relative ${className}`}>
      {glow && (
        <div
          className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
          style={{ background: "linear-gradient(135deg, rgba(124,58,237,0.3), rgba(59,130,246,0.15), rgba(124,58,237,0.3))", filter: "blur(0.5px)" }}
        />
      )}
      <div
        className={`relative card ${hover ? "card-hover" : ""} ${padding}`}
      >
        {children}
      </div>
    </div>
  );
}
