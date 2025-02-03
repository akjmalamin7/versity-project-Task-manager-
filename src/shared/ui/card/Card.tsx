interface CardProps {
  children?: React.ReactNode;
  padding?: "xs" | "sm" | "md" | "lg" | "xlg"|"2xl" |"none";
  bgColor?: "primary" | "white";
  radius?: "sm" | "md";
  className?:string;
  cardStyle?:"border"|"shadow"
}

const cardStyles:Record<string, string> ={
  border:"border border-[#E5E5F0]",
  shadow:"shadow-custom-1"
}
const paddings: Record<string, string> = {
  none: "px-0 py-0",
  xs: "px-[20px] py-[12px]",
  sm: "px-[24px] py-[24px]",
  md: "px-[20px] py-[20px] lg:px-[53px] lg:py-[46px]",
  lg: "px-[48px] py-[48px]",
  xlg: "px-[25px] lg:px-[76px] py-[25px] md:py-[68px]",
  "2xl": "px-[48px] py-[48px]",
};
const bgColors: Record<string, string> = {
  primary: "bg-blue-600",
  white: "bg-blue-100",
};
const radiuses: Record<string, string> = {
  sm: "rounded-[8px]",
  md: "rounded-[24px]",
};
const Card = ({ cardStyle="shadow",padding="none", bgColor = "white", radius = "md",className, children }: CardProps) => {
  const cardPaddings = paddings[padding] || "";
  const cardBgColors = bgColors[bgColor] || "";
  const cardRadius = radiuses[radius] || "";
  const customCardStyles = cardStyles[cardStyle] || ""
  const finalClassName = `${customCardStyles} ${cardPaddings} ${cardBgColors} ${cardRadius} ${className} `;
  return (
    <div className={finalClassName}>
      <div className="h-[100%]">{children}</div>
    </div>
  );
};

export default Card;
