import { Intro } from "@/pages/Intro";
import { Container } from "@/shared/ui/Container";
import { Flex } from "@/shared/ui/Flex";
import { Footer } from "@/widgets/Footer";
import { Navbar } from "@/widgets/Navbar";
import { Sidebar } from "@/widgets/Sidebar";

export default function Home() {
  return (
    <div className="bg-gray-400">
      <Navbar />
      <Container>
        <Flex>
          <Sidebar />
          <Intro />
        </Flex>
      </Container>
      <Footer />
    </div>
  );
}
