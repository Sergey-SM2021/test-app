import { ArticleIncidents } from "@/features/Incidents/model/type/IncidentsArticle";
import { Tag } from "@/shared/const/common";
import Lol from "@/shared/assets/emoji2.svg";
import Sheet from "@/shared/assets/emoji1.svg";
import Media from "@/shared/assets/Media.png";

export const news = [
  {
    text: "Сотни россиян застряли в Египте из-за отмен рейсов.",
    date: "14:59",
    tag: Tag.Politics,
  },
  {
    text: "На Украине заявили о невосполнимых потерях после российских ударов.",
    date: "14:59",
    tag: Tag.Politics,
  },
  {
    text: "Сотни россиян застряли в Египте из-за отмен рейсов.",
    date: "14:59",
    tag: Tag.Buisness,
  },
  {
    text: "Сотни россиян застряли в Египте из-за отмен рейсов.",
    date: "17:59",
    tag: Tag.Buisness,
  },
];

export const same = [
  {
    text: "Сотни россиян застряли в Египте из-за отмен рейсов.",
    date: "1.01.2023, 13:53",
    tag: Tag.Politics,
  },
  {
    text: "На Украине заявили о невосполнимых потерях после российских ударов.",
    date: "1.01.2023, 13:53",
    tag: Tag.Politics,
  },
  {
    text: "Сотни россиян застряли в Египте из-за отмен рейсов.",
    date: "1.01.2023, 13:53",
    tag: Tag.Buisness,
  },
  {
    text: "Сотни россиян застряли в Египте из-за отмен рейсов.",
    date: "1.01.2023, 13:53",
    tag: Tag.Buisness,
  },
];

export const incidents: ArticleIncidents[] = [
  {
    media: Media,
    imoji: {
      comments: 43,
      Emojies: [{ count: 67, icon: <Sheet /> }],
      selected: 7,
    },
    text: "Фура въехала в группу юных велосипедистов под Выборгом: двое детей погибли",
    date: "1.01.2023, 13:53",
    comments: 21,
    selected: 43,
  },
  {
    media: Media,
    imoji: {
      comments: 43,
      Emojies: [{ count: 67, icon: <Sheet /> }],
      selected: 7,
    },
    text: "Фура въехала в группу юных велосипедистов под Выборгом: двое детей погибли",
    date: "1.01.2023, 13:53",
    comments: 21,
    selected: 43,
  },
  {
    media: Media,
    imoji: {
      comments: 43,
      Emojies: [{ count: 67, icon: <Sheet /> }],
      selected: 7,
    },
    text: "Фура въехала в группу юных велосипедистов под Выборгом: двое детей погибли",
    date: "1.01.2023, 13:53",
    comments: 21,
    selected: 43,
  },
  {
    media: Media,
    imoji: {
      comments: 43,
      Emojies: [
        { count: 67, icon: <Sheet /> },
        { count: 32, icon: <Lol /> },
      ],
      selected: 7,
    },
    text: "Фура въехала в группу юных велосипедистов под Выборгом: двое детей погибли",
    date: "1.01.2023, 13:53",
    comments: 21,
    selected: 43,
  },
];
