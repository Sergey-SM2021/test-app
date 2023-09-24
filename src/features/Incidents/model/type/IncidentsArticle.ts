import { EmojiType } from "@/entity/Emoji/model/type/Emoji";
import { Article } from "@/shared/type/Article";
import { StaticImageData } from "next/image";

export interface ArticleIncidents extends Article {
  media: StaticImageData;
  imoji: EmojiType;
  comments: number;
  selected: number;
}
