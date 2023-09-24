import { Badge } from "@/shared/Badge";
import { Flex } from "@/shared/Flex";
import { Logo } from "@/shared/Logo";
import Calendar from "@/shared/assets/calendar.svg";
import Dolar from "@/shared/assets/dollar.svg";
import Euro from "@/shared/assets/euro.svg";
import Bitcoin from "@/shared/assets/bitcoin.svg";
import { memo } from "react";
import { Text } from "@/shared/Text";

interface NavbarProps {}

export const Navbar = memo((props: NavbarProps) => {
  return (
    <Flex gap={105} align="center">
      <Logo />
      <Flex gap="xl">
        <Badge theme="gray">
          <Flex>
            <Calendar />
            <Text>ПН, 4.08.2023</Text>
          </Flex>
        </Badge>
        <Badge theme="gray">
          <Flex>
            <Dolar />
            <Text>96.34</Text>
          </Flex>
        </Badge>
        <Badge theme="gray">
          <Flex>
            <Euro />
            <Text>104.61</Text>
          </Flex>
        </Badge>
        <Badge theme="gray">
          <Flex>
            <Bitcoin />
            <Text>25.725</Text>
          </Flex>
        </Badge>
      </Flex>
    </Flex>
  );
});

Navbar.displayName = "Navbar";
