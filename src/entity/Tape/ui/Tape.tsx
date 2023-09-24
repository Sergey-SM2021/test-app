import { Flex } from "@/shared/ui/Flex";
import { Heading } from "@/shared/ui/Heading";
import { Text } from "@/shared/ui/Text";
import { memo } from "react";
import { news } from "../model/Tape";

interface TapeProps {}

export const Tape = memo((props: TapeProps) => {
  return (
    <div className="pt-8 w-full">
      <Flex direction="col">
        <Heading>Лента</Heading>
        <Flex direction="col" gap={12}>
          {news.map((el, index) => (
            <Flex key={index}>
              {el.icon}
              <Text>{el.text}</Text>
              <Text>{el.text}</Text>
            </Flex>
          ))}
        </Flex>
        <marquee className={"bg-black text-white"}>
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
