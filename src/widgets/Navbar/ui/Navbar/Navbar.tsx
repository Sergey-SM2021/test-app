import { memo } from "react";
import { Badge } from "@/shared/ui/Badge";
import User from "@/shared/assets/user.svg";
import Search from "@/shared/assets/search.svg";
import { badges } from "../../model/Navbar";
import { Icon } from "../Icon/Icon";
import { Flex } from "@/shared/ui/Flex";
import { Logo } from "@/shared/ui/Logo";
import { Text } from "@/shared/ui/Text";
import { Container } from "@/shared/ui/Container";

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
