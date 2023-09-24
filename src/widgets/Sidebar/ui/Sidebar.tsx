import { memo } from "react";
import Power from "@/shared/assets/power.svg";
import { items } from "../model/Sidebar";
import { Flex } from "@/shared/ui/Flex";
import { Text } from "@/shared/ui/Text";

interface SidebarProps {}

export const Sidebar = memo((props: SidebarProps) => {
  return (
    <div className="bg-gray-500 w-[264px]">
      <Flex gap={12} className="bg-black px-5 py-3 rounded-xl">
        <Power className="text-white" />
        <Text theme="white">Лента</Text>
      </Flex>
      {items.map((el, index) => (
        <Flex key={index} className="px-5 py-3" gap={12}>
          {el.icon}
          <Text>{el.text}</Text>
        </Flex>
      ))}
    </div>
  );
});

Sidebar.displayName = "Sidebar";
