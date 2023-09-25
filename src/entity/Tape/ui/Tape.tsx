import { Flex } from "@/shared/ui/Flex";
import { Heading } from "@/shared/ui/Heading";
import { Text } from "@/shared/ui/Text";
import { memo } from "react";
import { Badge } from "@/shared/ui/Badge";
import Power from "@/shared/assets/power.svg";
import { ArticleTape } from "../model/type/TypeArticle";

interface TapeProps {
  list: ArticleTape[];
}

export const Tape = memo((props: TapeProps) => {
  const { list } = props;
  return (
    <div className="pt-8 bg-white-500 rounded-xl">
      <Flex direction="col" gap={24} className="flex-1">
        <Flex direction="col" className="px-8" gap={24}>
          <Heading className="font-bold">Лента</Heading>
          <Flex direction="col" gap={12}>
            {list.map((el, index) => (
              <Flex key={index} gap={8}>
                <Power />
                <Flex direction="col">
                  <Text className="font-medium">{el.text}</Text>
                  <Flex gap={4} align="center">
                    <Text theme="gray">{el.date}</Text>
                    <Badge size="xs" theme="orange">
                      <Text className="text-xs font-medium" theme="white">
                        {el.tag}
                      </Text>
                    </Badge>
                  </Flex>
                </Flex>
              </Flex>
            ))}
          </Flex>
        </Flex>
        {/* @ts-ignore */}
        <marquee
          className={
            "bg-black-500 text-white-500 h-10 rounded-b-lg flex items-center"
          }
        >
          {`🔥 ОЧЕНЬ ВАЖНАЯ НОВОСТЬ 🔥 ОЧЕНЬ ВАЖНАЯ НОВОСТЬ 🔥 ОЧЕНЬ ВАЖНАЯ
          НОВОСТЬ 🔥 ОЧЕНЬ ВАЖНАЯ НОВОСТЬ 🔥ОЧЕНЬ ВАЖНАЯ НОВОСТЬ 🔥 ОЧЕНЬ ВАЖНАЯ
          НОВОСТЬ 🔥 ОЧЕНЬ ВАЖНАЯ НОВОСТЬ 🔥 ОЧЕНЬ ВАЖНАЯ НОВОСТЬ 🔥 ОЧЕНЬ
          ВАЖНАЯ НОВОСТЬ 🔥 ОЧЕНЬ ВАЖНАЯ НОВОСТЬ 🔥 ОЧЕНЬ ВАЖНАЯ НОВОСТЬ 🔥
          ОЧЕНЬ ВАЖНАЯ НОВОСТЬ 🔥 ОЧЕНЬ ВАЖНАЯ НОВОСТЬ 🔥 ОЧЕНЬ ВАЖНАЯ НОВОСТЬ
          🔥 ОЧЕНЬ ВАЖНАЯ НОВОСТЬ 🔥`}
          {/* @ts-ignore */}
        </marquee>
      </Flex>
    </div>
  );
});

Tape.displayName = "Tape";
