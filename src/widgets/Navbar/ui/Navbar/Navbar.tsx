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
    <div className="bg-white-500">
      <Container className="h-[76px] flex items-center w-full">
        <Flex gap={105} align="center" className="w-full">
          <Logo />
          <Flex className="flex-auto" align="center">
            <Flex gap={20} className="flex-auto">
              {badges.map(({ icon, text }, index) => (
                <Badge key={index} theme="gray">
                  <Flex gap={4} align="center">
                    {icon}
                    <Text className="text-sm">{text}</Text>
                  </Flex>
                </Badge>
              ))}
            </Flex>
            <Flex gap={12} align="center">
              <Icon icon={<Search />} />
              <Icon icon={<User />} />
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </div>
  );
});

Navbar.displayName = "Navbar";
