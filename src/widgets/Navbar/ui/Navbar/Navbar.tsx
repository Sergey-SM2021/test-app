import { memo } from "react";
import { Badge } from "@/shared/Badge";
import { Flex } from "@/shared/Flex";
import { Logo } from "@/shared/Logo";
import { Text } from "@/shared/Text";
import User from "@/shared/assets/user.svg";
import Search from "@/shared/assets/search.svg";
import { Container } from "@/shared/Container";
import { badges } from "../../model/Navbar";
import { Icon } from "../Icon/Icon";

interface NavbarProps {}

export const Navbar = memo((props: NavbarProps) => {
  return (
    <Container className="h-[76px] bg-red-500 flex items-center w-full">
      <Flex gap={105} align="center" className="w-full">
        <Logo />
        <Flex className="flex-auto">
          <Flex gap={20} className="flex-auto">
            {badges.map(({ icon, text }, index) => (
              <Badge key={index} theme="gray">
                <Flex>
                  {icon}
                  <Text>{text}</Text>
                </Flex>
              </Badge>
            ))}
          </Flex>
          <Flex gap={12}>
            <Icon icon={<Search />} />
            <Icon icon={<User />} />
          </Flex>
        </Flex>
      </Flex>
    </Container>
  );
});

Navbar.displayName = "Navbar";
