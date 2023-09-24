import { PropsWithChildren, memo } from "react";

interface TextProps extends PropsWithChildren {
  theme?: "white" | "black";
}

export const Text = memo((props: TextProps) => {
  const { theme = "black" } = props;
  let className = "";
  if (theme === "white") className = "text-white";
  if (theme === "black") className = "text-black";
  return <p className={className}>{props.children}</p>;
});

Text.displayName = "Text";
