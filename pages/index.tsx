import Collar from "@components/pages/homepage/Collar";
import Hero from "@components/pages/homepage/Hero";
import Powerful from "@components/Powerful";
import Carousel from "@components/pages/homepage/Carousel";
import Faq from "@components/pages/homepage/Faq";
import { Container } from "@components/ui";

export default function Home() {
  return (
    <Container>
      <Hero />
      <Powerful />
      <Collar />
      <Carousel />
      <Faq />
    </Container>
  );
}
