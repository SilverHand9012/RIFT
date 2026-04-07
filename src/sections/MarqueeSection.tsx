import logoIconBlack from "@/assets/logo/alt_R_black.png";

export interface MarqueeItem {
  type: "text" | "icon";
  label?: string;
  src?: string;
}

const DEFAULT_ITEMS: MarqueeItem[] = [
  { type: "text", label: "REVA RIFT 2026" },
  { type: "icon" },
  { type: "text", label: "4 DAYS OF INNOVATION" },
  { type: "icon" },
  { type: "text", label: "500+ PARTICIPANTS" },
  { type: "icon" },
  { type: "text", label: "BUILD • CREATE • DISRUPT" },
  { type: "icon" },
];

interface MarqueeSectionProps {
  items?: MarqueeItem[];
  invertColors?: boolean;
}

const MarqueeSection = ({ items = DEFAULT_ITEMS, invertColors = false }: MarqueeSectionProps) => {

  const renderItems = () =>
    items.map((item, i) =>
      item.type === "icon" ? (
        <img key={i} src={item.src || logoIconBlack} alt="REVA RIFT" className={`h-11 mx-8 opacity-80 ${invertColors ? "invert" : ""}`} />
      ) : (
        <span key={i} className={`mx-8 font-bold text-base md:text-lg tracking-widest whitespace-nowrap ${invertColors ? "text-white" : "text-foreground"}`}>
          {item.label}
        </span>
      )
    );

  return (
    <div className={`marquee-shell py-6 overflow-hidden ${invertColors ? "bg-black" : "bg-background border-y border-foreground/30"}`}>
      <div className="marquee-content">
        <div className="flex animate-marquee">
          <div className="flex items-center shrink-0">{renderItems()}</div>
          <div className="flex items-center shrink-0">{renderItems()}</div>
        </div>
      </div>
    </div>
  );
};

export default MarqueeSection;
