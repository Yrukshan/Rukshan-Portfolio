import Blogs from "./components/Blogs";
import Hero from "./components/Hero";
//import Newsletter from "./components/Newsletter";
import Projects from "./components/Projects";
import About from "./about/page";
import Contact from "./contact/page";


export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Blogs />
      {/* <Newsletter /> */}
      <Contact />
    </main>
  );
} 