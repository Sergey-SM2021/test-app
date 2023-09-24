import { PropsWithChildren } from "react";

interface FlexProps extends PropsWithChildren {
  direction?: "col" | "row";
  align?: "center" | "start" | "end";
  justify?: "space-between" | "space-around" | "center" | "start" | "end";
  gap?: string | number;
}

const justifyMapper = {
  "space-between": "justify-between",
  "space-around": "justify-around",
  center: "justify-center",
  start: "justify-start",
  end: "justify-end",
};

const alignMapper = {
  center: "items-center",
  start: "items-start",
  end: "items-end",
};

const gapMapper = {
  xs: "gap-1",
  sm: "gap-2",
  md: "gap-3",
  lg: "gap-4",
  xl: "gap-5",
  none: "gap-0",
};

const directionMapper = {
  col: "flex-col",
  row: "flex-row",
};

export const Flex = (props: FlexProps) => {
  const {
    align = "start",
    direction = "row",
    justify = "start",
    children,
    gap = "none",
  } = props;
  return (
    <div
      style={{
        gap: gap,
      }}
      className={`flex ${justifyMapper[justify]} ${alignMapper[align]} ${directionMapper[direction]}`}
    >
      {children}
    </div>
  );
};
