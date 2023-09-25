import { Emoji } from "@/entity/Emoji";
import { Tag } from "@/shared/const/common";
import { Badge } from "@/shared/ui/Badge";
import { Flex } from "@/shared/ui/Flex";
import { Heading } from "@/shared/ui/Heading";
import { Text } from "@/shared/ui/Text";
import { memo } from "react";
import { SameArticle } from "../model/SameArticle";
import EmojiIcon from "@/shared/assets/emoji2.svg";

interface SameProps {
  list: SameArticle[];
}

export const Same = memo((props: SameProps) => {
  const { list } = props;
  return (
    <Flex direction="col" className="p-8 bg-white-500 rounded-xl" gap={24}>
      <Heading className="font-bold">{"Читайте также >"}</Heading>
      <Flex gap={16}>
        {list.map((el, index) => (
          <Flex
            direction="col"
            gap={24}
            key={index}
            className="bg-gray-400 rounded-xl px-4 py-3 w-[245px]"
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
            <Emoji
              className="px-4 pb-3"
              emojies={{
                comments: 1,
                Emojies: [{ count: 6, icon: <EmojiIcon /> }],
                selected: 7,
              }}
            />
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
});

Same.displayName = "Same";
