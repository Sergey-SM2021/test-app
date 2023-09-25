import { Flex } from "@/shared/ui/Flex";
import { Text } from "@/shared/ui/Text";
import { memo } from "react";

interface AdProps {}

export const Ad = memo((props: AdProps) => {
  return (
    <Flex
      direction="col"
      gap={8}
      className="w-[264px] p-3 rounded-xl bg-white-500"
    >
      <Text className="text-black-900">Ссылка на сайтРЕКЛАМА</Text>
      <Flex direction="col" gap={12}>
        <Flex
          justify="center"
          align="center"
          className="bg-gray-600 w-[240px] h-[276px] rounded-xl"
        >
          <Text className="text-black-900">Реклама</Text>
        </Flex>
        <Text>Текст длинного рекламного объявления</Text>
      </Flex>
    </Flex>
  );
});

Ad.displayName = "Ad";
