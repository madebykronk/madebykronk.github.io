import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { SelectedWorkHub } from "@/components/SelectedWorkHub";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <SelectedWorkHub />
      <Contact />
    </>
  );
}
