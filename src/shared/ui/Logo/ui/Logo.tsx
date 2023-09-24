import { memo } from "react";

interface LogoProps {
  size?: "xs" | "xl";
  theme?: "light" | "dark";
}

export const Logo = memo((props: LogoProps) => {
  const { size = "xs", theme = "dark" } = props;
  let classNames = "";
  if (size === "xl") classNames += "text-[44px] ";
  if (size === "xs") classNames += "text-[28px] ";
  if (theme === "dark") classNames += "text-black-900 ";
  if (theme === "light") classNames += "text-white-500 ";
  return <div className={classNames}>ЛОГО</div>;
});

Logo.displayName = "Logo";
