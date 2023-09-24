import { memo } from "react";
import Select from "@/shared/assets/selected.svg";
import Comment from "@/shared/assets/comment.svg";
import { Flex } from "@/shared/ui/Flex";
import { EmojiType } from "../model/type/Emoji";

interface EmojiProps {
  className?: string;
  emojies: EmojiType;
}

export const Emoji = memo((props: EmojiProps) => {
  const { className, emojies } = props;
  return (
    <Flex className={className} align="center" gap={8}>
      {emojies.Emojies.map((el, index) => (
        <Flex align="center" key={index}>
          {el.icon}
          {el.count}
        </Flex>
      ))}
      <Flex align="center">
        <Comment />
        {emojies.comments}
      </Flex>
      <Flex align="center">
        <Select />
        {emojies.selected}
      </Flex>
    </Flex>
  );
});

Emoji.displayName = "Emoji";
