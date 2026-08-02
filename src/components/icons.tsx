/* ============================================================
   Inline SVG icon library — no external dependency
   ============================================================ */

interface IconProps {
  className?: string;
  style?: React.CSSProperties;
}

export const DropletIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2.5C12 2.5 5 10 5 14.5C5 18.6 8.1 22 12 22C15.9 22 19 18.6 19 14.5C19 10 12 2.5 12 2.5Z" />
  </svg>
);

export const RecycleIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.5 5L10 9H6L4.5 6.5C4.2 6 4.3 5.4 4.8 5.1L7.5 5ZM17.5 5L20 9H16L14.5 6.5C14.2 6 14.3 5.4 14.8 5.1L17.5 5Z" />
    <path d="M12 4L9.5 8L12 12L14.5 8L12 4Z" />
    <path d="M6 11H10L8 14.5L6 11Z" opacity="0.7" />
    <path d="M14 11H18L16 14.5L14 11Z" opacity="0.7" />
    <path d="M9 17L12 21L15 17L12 18.5L9 17Z" opacity="0.5" />
  </svg>
);

export const WrenchIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.7 19l-9.6-9.6c1.5-2.5 1.1-5.8-1.2-7.9C10.4 0.3 8.4 0 6.5 0.7l3.7 3.7L7.4 7.2 3.7 3.5C3 5.4 3.3 7.4 4.9 9c2.1 2.1 5.3 2.5 7.9 1.2l9.6 9.6c.3.3.8.3 1.1 0l1.3-1.3c.3-.3.3-.8-.1-1z" />
  </svg>
);

export const ArrowLeftIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 11H7.8l5.6-5.6L12 4l-8 8 8 8 1.4-1.4L7.8 13H20v-2z" />
  </svg>
);

export const ArrowRightIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 11h12.2l-5.6-5.6L12 4l8 8-8 8-1.4-1.4 5.6-5.6H4z" />
  </svg>
);

export const ArrowDownIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 16l-6-6h12z" />
  </svg>
);

export const BeakerIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 2v6L4 19c-.5 1.5.6 3 2.2 3h11.6c1.6 0 2.7-1.5 2.2-3L15 8V2H9zm2 2h2v5h-2V4zM7 20l3-7h4l3 7H7z" />
  </svg>
);

export const FilterIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 4h18l-7 8v6l-4 2v-8L3 4z" />
  </svg>
);

export const TankIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 3h14v18H5V3zm2 2v14h10V5H7zm2 2h6v2H9V7zm0 4h6v2H9v-2z" />
  </svg>
);

export const GearIcon = ({ className }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 8c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm9-2l-2-1v-2l2-1-1-2-2 1-1.5-1.5 1-2-2-1-1 2H11l-1-2-2 1 1 2L7.5 7l-2-1-1 2 2 1v2l-2 1 1 2 2-1 1.5 1.5-1 2 2 1 1-2h2l1 2 2-1-1-2L17 13l2 1 1-2z" />
  </svg>
);

export const PhoneIcon = ({ className, style }: IconProps) => (
  <svg className={className} style={style} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.4 0 .8-.2 1l-2.3 2.2z" />
  </svg>
);

export const MailIcon = ({ className, style }: IconProps) => (
  <svg className={className} style={style} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
  </svg>
);

export const MapPinIcon = ({ className, style }: IconProps) => (
  <svg className={className} style={style} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5z" />
  </svg>
);

/* Map a category icon key to its component */
export const categoryIcons = {
  droplet: DropletIcon,
  recycle: RecycleIcon,
  wrench: WrenchIcon,
};

/* Map product sub-item icons by keyword */
export function getProductIcon(title: string) {
  const t = title.toLowerCase();
  if (t.includes("chemical") || t.includes("cleaning")) return BeakerIcon;
  if (t.includes("softener") || t.includes("demineralizer") || t.includes("osmosis") || t.includes("recycling")) return GearIcon;
  if (t.includes("filter") || t.includes("sand") || t.includes("carbon") || t.includes("manganese") || t.includes("media")) return FilterIcon;
  if (t.includes("frp") || t.includes("tank") || t.includes("panel")) return TankIcon;
  return DropletIcon;
}
