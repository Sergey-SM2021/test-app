import { Same } from "@/entity/Same";
import { Tape } from "@/entity/Tape";
import { memo } from "react";
import { news, same } from "../model/Intro";
import { Incidents } from "@/entity/Incidents";

interface IntroProps {}

export const Intro = memo((props: IntroProps) => {
  return (
    <div className="w-full">
      <Tape list={news} />
      <Same list={same} />
      <Incidents />
    </div>
  );
});

Intro.displayName = "Intro";
