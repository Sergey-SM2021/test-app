import { Flex } from "@/shared/ui/Flex";
import { Heading } from "@/shared/ui/Heading";
import { Text } from "@/shared/ui/Text";
import Image from "next/image";
import { memo } from "react";
import { ArticleIncidents } from "../model/type/IncidentsArticle";
import { Emoji } from "@/entity/Emoji";
import cn from "classnames";

interface IncidentsProps {
  list: ArticleIncidents[];
  className?: string;
}

export const Incidents = memo((props: IncidentsProps) => {
  const { list, className = "" } = props;
  return (
    <Flex direction="col" gap={16} className={cn(["pt-4", className])}>
      <Heading className="pl-8 font-bold">{"Происшествия >"}</Heading>
      <Flex gap={"12px"}>
        {list.map((el, index) => (
          <Flex
            key={index}
            direction="col"
            className="bg-white-500 w-[264px] rounded-xl"
            gap={16}
          >
            <Flex direction="col" gap={8}>
              <Image src={el.media} alt="Изображение не найдено" />
              <Text className="font-light px-3 text-xs" theme="gray">
                {el.date}
              </Text>
              <Text className="font-medium px-3">{el.text}</Text>
            </Flex>
            <Emoji className="px-4 pb-3" emojies={el.imoji} />
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
});

Incidents.displayName = "Incidents";
