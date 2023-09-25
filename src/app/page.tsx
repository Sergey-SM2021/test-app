import { Intro } from "@/page/Intro";
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
        <Flex className="pt-6" gap={12}>
          {/* <Sidebar /> */}
          <Intro />
        </Flex>
      </Container>
      <Footer />
    </div>
  );
}
