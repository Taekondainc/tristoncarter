import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { NowBuilding } from "./components/NowBuilding";
import { Projects } from "./components/Projects";
import { Roles } from "./components/Roles";
import { ScrollProgress } from "./components/ScrollProgress";
import { Team } from "./components/Team";
import { Toolkit } from "./components/Toolkit";

export default function App() {
  return (
    <>
      <ScrollProgress />
      <main>
        <Hero />
        <About />
        <NowBuilding />
        <Roles />
        <Team />
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
