import { Tag } from "@/shared/const/common";
import { Article } from "@/shared/type/Article";
import { ReactNode } from "react";

export interface SameArticle extends Article {
  tag: Tag;
  imoji: [
    {
      imoji: ReactNode;
      count: number;
    }
  ];
}