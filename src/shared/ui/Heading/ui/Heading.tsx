import { PropsWithChildren, memo } from "react";

interface HeadingProps extends PropsWithChildren {}

export const Heading = memo((props: HeadingProps) => {
  return <h2 className="text-3xl">{props.children}</h2>;
});

Heading.displayName = "Heading";
