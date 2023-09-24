import { Container } from "@/shared/Container";
import { Flex } from "@/shared/Flex";
import { Navbar } from "@/widgets/Navbar";
import { Sidebar } from "@/widgets/Sidebar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Container>
        <Flex>
          <Sidebar />
        </Flex>
      </Container>
    </>
  );
}
