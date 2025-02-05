import React, { ChangeEvent, FocusEvent } from "react";
import Text from "../text";

export interface SelectProps {
  label?: string;
  name?: string;
  value?: string;
  radius?: "sm" | "md" | "lg";
  color?: "dark" | "light";
  bgColor?: "dark" | "light" | "transparent";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  children?: React.ReactNode;
  className?: string;
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
  onFocus?: (event: FocusEvent<HTMLSelectElement>) => void;
}

const Select = (
  {
    bgColor = "transparent",
    className,
    color = "dark",
    isLoading,
    label,
    name,
    children,
    onChange,
    onFocus,
    radius = "sm",
    size = "lg",
    value,
  }: SelectProps,
  ref: React.Ref<HTMLSelectElement>
) => {
  const colorClasses = {
    dark: "text-gray-900",
    light: "h-[30px] xl:h-[38px] text-[14px]",
  }[color];

  const sizeClasses = {
    sm: "h-[30px] xl:h-[38px] text-[14px]",
    md: "h-[36px] xl:h-[44px] text-[14px]",
    lg: "h-[40px] xl:h-[50px] text-[14px]",
  }[size];

  const roundClasses = {
    sm: "rounded-[8px]",
    md: "rounded-[10px]",
    lg: "rounded-[12px]",
  }[radius];

  const bgClasses = {
    dark: "bg-gray-500",
    light: "bg-[#f7f7f708]",
    transparent: "",
  }[bgColor];

  const finalSelectClasses = `border border-gray-500  w-full px-[15px] text-white  outline-none ${roundClasses} ${sizeClasses} ${bgClasses} ${colorClasses} ${className}c`;

  return (
    <div className="w-full">
      {label && (
        <Text className="mb-[14px]">
          <label htmlFor={name}>{label}</label>
        </Text>
      )}
      <div className="relative w-full">
        <select
          id={name}
          name={name}
          value={value}
          disabled={isLoading}
          onChange={onChange}
          onFocus={onFocus}
          ref={ref}
          className={finalSelectClasses}
        >
         {children}
        </select>
        
      </div>
    </div>
  );
};

Select.displayName = "Select";

// Forward ref to make it usable in parent components
export default React.forwardRef(Select);
