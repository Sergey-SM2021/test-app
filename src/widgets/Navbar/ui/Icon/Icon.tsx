import { Flex } from "@/shared/ui/Flex";
import { ReactNode, memo } from "react";

interface IconProps {
  icon: ReactNode;
}

export const Icon = memo((props: IconProps) => {
  const { icon } = props;
  return (
    <Flex
      align="center"
      justify="center"
      className="rounded-full bg-black-500 text-white-500 w-9 h-9"
    >
      {icon}
    </Flex>
  );
});

Icon.displayName = "Icon";
