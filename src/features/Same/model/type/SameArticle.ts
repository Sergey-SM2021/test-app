import { EmojiType } from "@/entity/Emoji/model/type/Emoji";
import { Tag } from "@/shared/const/common";
import { Article } from "@/shared/type/Article";

export interface SameArticle extends Article {
  tag: Tag;
  imoji: EmojiType
}