import { forwardRef } from "react";
import Text from "../text";
import { InputProps } from "./textarea.model";

const TextArea = forwardRef<HTMLTextAreaElement, InputProps>(
  (
    {
      label,
      name,
      value,
      size = "lg",
      radius="sm",
      color="dark",
      bgColor="transparent",
      placeholder = "",
      isLoading = false,
      className = "",
      onChange,
      onInput,
      onBlur,
      onFocus,
      onClear,
      onKeyDown,
    },
    ref
  ) => {
    const colorClasses = {
      dark: "text-gray-900",
      light: "h-[30px] xl:h-[38px] text-[14px]",
    }[color];
    const sizeClasses = {
      sm: "h-[80px] xl:h-[100px] text-[14px]",
      md: "h-[100px] xl:h-[120px] text-[14px]",
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
    const finalInputClasses = `border border-gray-500  w-full p-[15px] text-gray-100  outline-none ${roundClasses} ${sizeClasses} ${bgClasses} ${colorClasses} ${className}`;
    return (
      <div className="w-full">
        {label && (
          <Text className="mb-[14px]">
            <label htmlFor={name}>{label}</label>
          </Text>
        )}
        <div className="relative w-full">
          <textarea
            id={name}
            name={name}
            value={value}
            placeholder={placeholder}
            disabled={isLoading}
            onChange={onChange}
            onInput={onInput}
            onBlur={onBlur}
            onFocus={onFocus}
            onKeyDown={onKeyDown}
            ref={ref}
            className={finalInputClasses}
          />
          {onClear && (
            <button
              type="button"
              className="absolute top-1/2 right-[10px] transform -translate-y-1/2 text-[#74788D] hover:text-red-500"
              onClick={onClear}
            >
              ✕
            </button>
          )}
        </div>
        {isLoading && <p className="mt-2 text-sm text-gray-500">Loading...</p>}
      </div>
    );
  }
);

TextArea.displayName = "TextArea";

export default TextArea;
