import { Button } from "@/shared/ui/Button";
import { Container } from "@/shared/ui/Container";
import { Logo } from "@/shared/ui/Logo";
import { Text } from "@/shared/ui/Text";
import { memo } from "react";
import Tg from "@/shared/assets/telegram.svg";
import { Flex } from "@/shared/ui/Flex";

interface FooterProps {}

export const Footer = memo((props: FooterProps) => {
  return (
    <div className="bg-gray-500 pt-10 px-36 pb-10">
      <Container>
        <div className="grid grid-cols-5">
          <Flex direction="col" justify="space-between">
            <Logo size="xl" theme="light" />
            <Text theme="white">© НАЗВАНИЕ 2023. Все права защищены</Text>
          </Flex>
          <Flex direction="col" gap={12}>
            <Text theme="white">Контакты</Text>
            <Text theme="white">Рдакция</Text>
          </Flex>
          <Flex direction="col" justify="space-between">
            <Text theme="white">Политика конфиденциальности</Text>
            <Text theme="white">Условия использования</Text>
            <Text theme="white">Реклама</Text>
          </Flex>
          <Flex direction="col" justify="space-between">
            <Text theme="white">
              По любым вопросам пишите на{" "}
              <span className="text-orange-500 underline">
                privet@yandex.com
              </span>
            </Text>
            <Flex gap={8}>
              <Tg />
              <Text theme="white">Подписаться</Text>
            </Flex>
          </Flex>
          <div>
            <Flex className="h-full" align="end">
              <Button>Предложить новость</Button>
            </Flex>
          </div>
        </div>
      </Container>
    </div>
  );
});

Footer.displayName = "Footer";
