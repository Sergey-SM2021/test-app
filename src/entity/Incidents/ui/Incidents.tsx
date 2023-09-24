import { Flex } from "@/shared/ui/Flex";
import { Heading } from "@/shared/ui/Heading";
import { Text } from "@/shared/ui/Text";
// import Image from "next/image";
import { memo } from "react";
// import Media from "@/shared/assets/pic.svg?url";

interface IncidentsProps {}

export const Incidents = memo((props: IncidentsProps) => {
  return (
    <Flex direction="col" gap={16} className="pt-4">
      <Heading className="pl-4">Происшествия</Heading>
      <Flex direction="col">
        {/* <Image width={100} src={Media} alt="Изображение не найдено" /> */}
        <Text>1.01.2023, 13:53</Text>
        <Text>
          Фура въехала в группу юных велосипедистов под Выборгом: двое детей
          погибли
        </Text>
        <Flex></Flex>
      </Flex>
    </Flex>
  );
});

Incidents.displayName = "Incidents";
