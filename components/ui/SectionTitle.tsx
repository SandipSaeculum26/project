type Props = {
  line1: string;
  line2?: string;
  accent?: string;
};

export function SectionTitle({ line1, line2, accent }: Props) {
  return (
    <div className="text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] text-white">
      <div>{line1}</div>
      {line2 && (
        <div>
          {accent ? (
            <>
              <span>{line2.replace(accent, "")}</span>
              <span className="text-violet-400">{accent}</span>
            </>
          ) : (
            line2
          )}
        </div>
      )}
    </div>
  );
}
