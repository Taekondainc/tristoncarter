import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { CursorTrail } from "./components/CursorTrail";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { NowBuilding } from "./components/NowBuilding";
import { Projects } from "./components/Projects";
import { Roles } from "./components/Roles";
import { ScrollProgress } from "./components/ScrollProgress";
import { Toolkit } from "./components/Toolkit";

export default function App() {
  return (
    <>
      <ScrollProgress />
      <CursorTrail />
      <main>
        <Hero />
        <About />
        <NowBuilding />
        <Roles />
        <Projects />
        <Toolkit />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
