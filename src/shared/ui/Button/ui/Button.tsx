import { ButtonHTMLAttributes, memo } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = memo((props: ButtonProps) => {
  const { children } = props;
  return (
    <button className="bg-orange-500 text-white-500 flex items-center rounded-lg h-[36px] px-4 font-medium">
      {children}
    </button>
  );
});

Button.displayName = "Button";
