import { ReactNode } from "react";

export interface EmojiType {
  comments: number;
  selected: number;
  Emojies: {
    icon: ReactNode;
    count: number;
  }[];
}
