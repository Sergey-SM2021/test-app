import { PropsWithChildren } from "react";

interface FlexProps extends PropsWithChildren {
  direction?: "col" | "row";
  align?: "center" | "start" | "end";
  justify?: "space-between" | "space-around" | "center" | "start" | "end";
  gap?: string | number;
  className?: string;
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
    gap,
    className = "",
  } = props;
  return (
    <div
      style={{
        gap: gap,
      }}
      className={`flex ${justifyMapper[justify]} ${alignMapper[align]} ${directionMapper[direction]} ${className}`}
    >
      {children}
    </div>
  );
};
