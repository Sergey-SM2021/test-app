import { PropsWithChildren, memo } from "react";

interface HeadingProps extends PropsWithChildren {
  className?: string;
}

export const Heading = memo((props: HeadingProps) => {
  const {className = ""} = props
  return <h2 className={`text-3xl ${className}`}>{props.children}</h2>;
});

Heading.displayName = "Heading";
