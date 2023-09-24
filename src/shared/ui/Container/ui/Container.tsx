import { PropsWithChildren } from "react";

interface ContainerProps extends PropsWithChildren {
  className?: string;
}

export const Container = (props: ContainerProps) => {
  const { children, className } = props;
  return (
    <div className={`max-w-[1440px] my-0 mx-auto ${className}`}>{children}</div>
  );
};
