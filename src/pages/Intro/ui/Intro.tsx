import { Same } from "@/features/Same";
import { Tape } from "@/entity/Tape";
import { memo } from "react";
import { news, same, incidents } from "../model/Intro";
import { Incidents } from "@/features/Incidents";

interface IntroProps {}

export const Intro = memo((props: IntroProps) => {
  return (
    <div className="w-full">
      <Tape list={news} />
      <Same list={same} />
      <Incidents list={incidents} />
    </div>
  )
})

Intro.displayName = "Intro";
