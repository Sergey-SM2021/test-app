import { Tape } from "@/entity/Tape";
import { memo } from "react";

interface IntroProps {}

export const Intro = memo((props: IntroProps) => {
  return (
    <div className="w-full">
      <Tape />
    </div>
  );
});

Intro.displayName = "Intro";
