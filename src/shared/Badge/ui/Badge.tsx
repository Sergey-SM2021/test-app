import { PropsWithChildren } from "react";

interface BadgeProps extends PropsWithChildren {
  theme?: "orange" | "gray";
  size?: "md" | "xs";
}

export const Badge = (props: BadgeProps) => {
  const { children, theme = "orange", size = "md" } = props;
  let classes = "";
  if (theme === "orange") classes += "bg-orange-500 text-white ";
  if (theme === "gray") classes += "bg-gray-500 text-black ";
  if (size === "md") classes += "px-2 py-1 ";
  if (size === "xs") classes += "p-3 ";
  return (
    <div className={`inline-block rounded-3xl  ${classes}`}>{children}</div>
  );
};
