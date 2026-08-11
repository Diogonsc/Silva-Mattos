import { Footer } from "@/app/components/layout/footer";
import { Header } from "@/app/components/layout/header";
import { About } from "@/app/components/sections/about";
import { Contact } from "@/app/components/sections/contact";
import { Hero } from "@/app/components/sections/hero";
import { Partners } from "@/app/components/sections/partners";
import { PracticeAreas } from "@/app/components/sections/practice-areas";
import { Process } from "@/app/components/sections/process";
import { WhatsAppButton } from "@/app/components/ui/whatsapp-button";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PracticeAreas />
        <About />
        <Partners />
        <Process />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
