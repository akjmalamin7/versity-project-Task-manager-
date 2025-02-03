import React from "react";
interface Props {
  width?: "sm" | "md" | "lg" | "xlg";
  className?: string;
  children?: React.ReactNode;
}
const widths: Record<string, string> = {
  sm: "max-w-[720px]",
  md: "max-w-[1180px]",
  lg: "max-w-[1360px]",
  xlg: "max-w-[1440px]",
};

const Container: React.FC<Props> = ({ width = "lg", className, children }) => {
  const containerWidth = widths[width] || "w-full";
  const finalClasses = `${containerWidth} w-full mx-auto p-[20px] ${className}`;
  return <div className={finalClasses}>{children}</div>;
};

export default Container;
