import { ChangeEvent, FocusEvent, KeyboardEvent, forwardRef } from "react";
import Text from "../text";

// InputProps টাইপ গুলি এখানে রাখা হলো
export interface InputProps {
  label?: string;
  name?: string;
  value?: string;
  type?: "text" | "email" | "password" | "number" | "file";
  placeholder?: string;
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  className?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onInput?: (event: React.FormEvent<HTMLInputElement>) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
  onClear?: () => void;
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
}

const InputFile = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      name,
      value,
      placeholder = "Choose file",
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
    return (
      <div className="w-full">
        {label && (
          <Text className="mb-[14px]">
            <label htmlFor={name}>{label}</label>
          </Text>
        )}
        <div className="relative w-full">
          <input
            id={name}
            name={name}
            type="file"
            value={value}
            placeholder={placeholder}
            disabled={isLoading}
            onChange={onChange}
            onInput={onInput}
            onBlur={onBlur}
            onFocus={onFocus}
            onKeyDown={onKeyDown}
            ref={ref}
            className={`h-[40px] xl:h-[50px] border border-[#74788D] rounded-[4px] w-full px-[15px] text-[#74788D] text-14 outline-none ${className}`}
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

InputFile.displayName = "InputFile";

export default InputFile;
