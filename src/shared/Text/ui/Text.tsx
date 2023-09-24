import { PropsWithChildren, memo } from "react";

interface TextProps extends PropsWithChildren {}

export const Text = memo((props: TextProps) => {
  return <p>{props.children}</p>;
});

Text.displayName = "Text";
