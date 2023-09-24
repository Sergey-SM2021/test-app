import { PropsWithChildren } from "react";
import cn from "classnames";

interface BadgeProps extends PropsWithChildren {
  theme?: "orange" | "gray";
  size?: "md" | "xs";
}

export const Badge = (props: BadgeProps) => {
  const { children, theme = "orange", size = "md" } = props;
  let classes = "";
  if (theme === "orange") classes += "bg-orange-500 text-white ";
  if (theme === "gray") classes += "bg-gray-500 text-black ";
  if (size === "md") classes += "p-3 ";
  if (size === "xs") classes += "py-1 px-2 ";
  return (
    <div className={cn(["inline-block rounded-3xl", classes])}>{children}</div>
  );
};
