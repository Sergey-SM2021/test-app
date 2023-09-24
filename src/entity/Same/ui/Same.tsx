import { Article } from "@/pages/Intro/model/type/article";
import { Tag } from "@/shared/const/common";
import { Badge } from "@/shared/ui/Badge";
import { Flex } from "@/shared/ui/Flex";
import { Heading } from "@/shared/ui/Heading";
import { Text } from "@/shared/ui/Text";
import { memo } from "react";

interface SameProps {
  list: Article[];
}

export const Same = memo((props: SameProps) => {
  const { list } = props;
  return (
    <Flex direction="col" className="p-8 bg-white-500" gap={24}>
      <Heading>{"Читайте также >"}</Heading>
      <Flex gap={16}>
        {list.map((el, index) => (
          <Flex
            direction="col"
            gap={24}
            key={index}
            className="bg-gray-500 rounded-xl px-4 py-3"
          >
            <Flex direction="col" gap={8}>
              <Flex align="center" gap={8}>
                <Badge size="xs" theme="orange">
                  <Text className="text-xs" theme="white">
                    {Tag.Politics}
                  </Text>
                </Badge>
                <Text>{el.date}</Text>
              </Flex>
              <Text className="font-medium">
                Синоптик спрогнозировал срок наступления бабьего лета
              </Text>
            </Flex>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
});

Same.displayName = "Same";
