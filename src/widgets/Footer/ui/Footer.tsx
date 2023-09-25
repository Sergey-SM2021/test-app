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
    <div className="bg-gray-500 pt-10 pb-10">
      <Container>
        <div className="grid grid-cols-footer">
          <Flex direction="col" justify="space-between">
            <Logo size="xl" theme="light" />
            <Text theme="white" className="text-xs">
              © НАЗВАНИЕ 2023. Все права защищены
            </Text>
          </Flex>
          <Flex direction="col" gap={12}>
            <Text theme="white" className="text-sm">
              Контакты
            </Text>
            <Text theme="white" className="text-sm">
              Редакция
            </Text>
          </Flex>
          <Flex direction="col" justify="space-between">
            <Text theme="white" className="text-sm">
              Политика конфиденциальности
            </Text>
            <Text theme="white" className="text-sm">
              Условия использования
            </Text>
            <Text theme="white" className="text-sm">
              Реклама
            </Text>
          </Flex>
          <Flex direction="col" justify="space-between">
            <Text theme="white" className="text-sm">
              По любым вопросам <br />
              пишите на{" "}
              <span className="text-orange-500 underline">
                privet@yandex.com
              </span>
            </Text>
            <Flex gap={8} align="center">
              <Tg />
              <Text theme="white" className="text-xs">
                Подписаться
              </Text>
            </Flex>
          </Flex>
          <Flex className="h-full text-sm w-full" justify="end" align="end">
            <Button>Предложить новость</Button>
          </Flex>
        </div>
      </Container>
    </div>
  );
});

Footer.displayName = "Footer";
