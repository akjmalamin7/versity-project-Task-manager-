import { ChangeEvent, FocusEvent, KeyboardEvent } from "react";

export interface InputProps {
  label?: string;
  name?: string;
  value?: string;
  radius?:"sm"|"md"|"lg";
  color?:"dark"|"light";
  bgColor?:"dark"|"light" |"transparent";
  placeholder?: string;
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  className?: string;
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onInput?: (event: React.FormEvent<HTMLTextAreaElement>) => void;
  onBlur?: (event: FocusEvent<HTMLTextAreaElement>) => void;
  onFocus?: (event: FocusEvent<HTMLTextAreaElement>) => void;
  onClear?: () => void;
  onKeyDown?: (event: KeyboardEvent<HTMLTextAreaElement>) => void;
}
