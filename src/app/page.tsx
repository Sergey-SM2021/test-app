import { Intro } from "@/pages/Intro";
import { Container } from "@/shared/ui/Container";
import { Flex } from "@/shared/ui/Flex";
import { Navbar } from "@/widgets/Navbar";
import { Sidebar } from "@/widgets/Sidebar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Container>
        <Flex>
          <Sidebar />
          <Intro />
        </Flex>
      </Container>
    </>
  );
}
