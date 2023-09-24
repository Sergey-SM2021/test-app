import { Flex } from "@/shared/ui/Flex";
import { Heading } from "@/shared/ui/Heading";
import { Text } from "@/shared/ui/Text";
import { memo } from "react";
import { news } from "../model/Tape";
import { Badge } from "@/shared/ui/Badge";

interface TapeProps {}

export const Tape = memo((props: TapeProps) => {
  return (
    <div className="pt-8 w-full">
      <Flex direction="col" gap={24}>
        <Flex direction="col" className="px-8" gap={24}>
          <Heading>Лента</Heading>
          <Flex direction="col" gap={12}>
            {news.map((el, index) => (
              <Flex key={index} gap={8}>
                {el.icon}
                <Flex direction="col">
                  <Text>{el.text}</Text>
                  <Flex gap={4} align="center">
                    <Text>{el.date}</Text>
                    <Badge size="xs" theme="orange">
                      <Text className="text-xs" theme="white">
                        {el.tag}
                      </Text>
                    </Badge>
                  </Flex>
                </Flex>
              </Flex>
            ))}
          </Flex>
        </Flex>
        <marquee className={"bg-black text-white h-10 rounded-b-lg"}>
          🔥 ОЧЕНЬ ВАЖНАЯ НОВОСТЬ 🔥 ОЧЕНЬ ВАЖНАЯ НОВОСТЬ 🔥 ОЧЕНЬ ВАЖНАЯ
          НОВОСТЬ 🔥 ОЧЕНЬ ВАЖНАЯ НОВОСТЬ 🔥ОЧЕНЬ ВАЖНАЯ НОВОСТЬ 🔥 ОЧЕНЬ ВАЖНАЯ
          НОВОСТЬ 🔥 ОЧЕНЬ ВАЖНАЯ НОВОСТЬ 🔥 ОЧЕНЬ ВАЖНАЯ НОВОСТЬ 🔥 ОЧЕНЬ
          ВАЖНАЯ НОВОСТЬ 🔥 ОЧЕНЬ ВАЖНАЯ НОВОСТЬ 🔥 ОЧЕНЬ ВАЖНАЯ НОВОСТЬ 🔥
          ОЧЕНЬ ВАЖНАЯ НОВОСТЬ 🔥 ОЧЕНЬ ВАЖНАЯ НОВОСТЬ 🔥 ОЧЕНЬ ВАЖНАЯ НОВОСТЬ
          🔥 ОЧЕНЬ ВАЖНАЯ НОВОСТЬ 🔥
        </marquee>
      </Flex>
    </div>
  );
});

Tape.displayName = "Tape";
