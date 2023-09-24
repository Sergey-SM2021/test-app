import { Tag } from "@/shared/const/common";
import { Article } from "@/shared/type/Article";

export interface ArticleTape extends Article {
  tag: Tag;
}