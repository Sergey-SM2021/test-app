import { PropsWithChildren } from "react";

interface ContainerProps extends PropsWithChildren {}

export const Container = (props: ContainerProps) => {
  const { children } = props;
  return <div className="max-w-[1440px] my-0 mx-auto">{children}</div>;
};
