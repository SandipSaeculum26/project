type Props = { children: React.ReactNode };

export function Badge({ children }: Props) {
  return (
    <div className="inline-flex">
      <div className="px-4 py-1.5 flex items-center rounded-2xl border border-white/[0.12] bg-white/[0.03]">
        <span className="text-xs text-white/55 tracking-[0.18em] uppercase">
          {children}
        </span>
      </div>
    </div>
  );
}
