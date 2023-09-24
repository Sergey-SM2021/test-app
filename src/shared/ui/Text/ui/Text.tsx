import { PropsWithChildren, memo } from "react";
import cn from "classnames";

interface TextProps extends PropsWithChildren {
  theme?: "white" | "black";
  className?: string;
}

export const Text = memo((props: TextProps) => {
  const { theme = "black", className } = props;
  let classNames = "";
  if (theme === "white") classNames = "text-white";
  if (theme === "black") classNames = "text-black";
  return <p className={cn([classNames, className])}>{props.children}</p>;
});

Text.displayName = "Text";
