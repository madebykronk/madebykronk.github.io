import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Projects items={projects} />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
