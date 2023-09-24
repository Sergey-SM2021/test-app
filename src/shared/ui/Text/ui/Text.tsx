import { PropsWithChildren, memo } from "react";
import cn from "classnames";

interface TextProps extends PropsWithChildren {
  theme?: "white" | "black" | "gray";
  className?: string;
}

export const Text = memo((props: TextProps) => {
  const { theme = "black", className } = props;
  let classNames = "";
  if (theme === "white") classNames = "text-white-500";
  if (theme === "gray") classNames = "text-gray-600";
  if (theme === "black") classNames = "text-black-500";
  return <p className={cn([classNames, className])}>{props.children}</p>;
});

Text.displayName = "Text";
