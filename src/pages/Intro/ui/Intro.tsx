import { Same } from "@/features/Same";
import { Tape } from "@/entity/Tape";
import { memo } from "react";
import { news, same, incidents } from "../model/Intro";
import { Incidents } from "@/features/Incidents";
import { Flex } from "@/shared/ui/Flex";
import { Ad } from "@/entity/Ad";

interface IntroProps {}

export const Intro = memo((props: IntroProps) => {
  return (
    <div className="w-full">
      <Flex direction="col" className="pb-7" gap={12}>
        <Flex gap={24}>
          <Tape list={news} />
          <Ad />
        </Flex>
        <Same list={same} />
      </Flex>
      <Incidents list={incidents} className="mb-[113px]" />
    </div>
  );
});

Intro.displayName = "Intro";
