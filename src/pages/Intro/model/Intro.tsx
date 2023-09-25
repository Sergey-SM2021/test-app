import { ArticleIncidents } from "@/features/Incidents/model/type/IncidentsArticle";
import { Tag } from "@/shared/const/common";
import Lol from "@/shared/assets/emoji2.svg";
import Imoji from "@/shared/assets/emoji.svg";
import Sheet from "@/shared/assets/emoji1.svg";
import Media from "@/shared/assets/Media.png";
import { SameArticle } from "@/features/Same/model/type/SameArticle";

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

export const same: SameArticle[] = [
  {
    date: "1.01.2023, 13:53",
    imoji: {
      comments: 1,
      Emojies: [
        { count: 52, icon: <Imoji /> },
        { count: 57, icon: <Sheet /> },
        { count: 1, icon: <Lol /> },
      ],
      selected: 31,
    },
    tag: Tag.Buisness,
    text: "Синоптик спрогнозировал срок наступления бабьего лета",
  },
  {
    date: "1.01.2023, 13:53",
    imoji: {
      comments: 1,
      Emojies: [
        { count: 17, icon: <Sheet /> },
        { count: 32, icon: <Imoji /> },
      ],
      selected: 31,
    },
    tag: Tag.Politics,
    text: "Дмитрий Медведев проголосовал онлайн на выборах мэра Москвы",
  },
  {
    date: "1.01.2023, 14:59",
    imoji: {
      comments: 1,
      Emojies: [
        { count: 17, icon: <Sheet /> },
        { count: 32, icon: <Imoji /> },
      ],
      selected: 31,
    },
    tag: Tag.Politics,
    text: "Дмитрий Медведев проголосовал онлайн на выборах мэра Москвы",
  },
  {
    date: "1.01.2023, 13:53",
    imoji: {
      comments: 1,
      Emojies: [
        { count: 17, icon: <Sheet /> },
        { count: 32, icon: <Imoji /> },
      ],
      selected: 31,
    },
    tag: Tag.Politics,
    text: "Невролог назвала основные способы лечения мигрени",
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
      Emojies: [
        { count: 17, icon: <Sheet /> },
        { count: 32, icon: <Imoji /> },
      ],
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
        { count: 32, icon: <Imoji /> },
      ],
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
        { count: 17, icon: <Sheet /> },
        { count: 32, icon: <Lol /> },
        { count: 32, icon: <Imoji /> },
      ],
      selected: 7,
    },
    text: "Фура въехала в группу юных велосипедистов под Выборгом: двое детей погибли",
    date: "1.01.2023, 13:53",
    comments: 21,
    selected: 43,
  },
];
