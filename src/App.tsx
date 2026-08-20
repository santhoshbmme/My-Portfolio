import { Navbar } from "./sections/Navbar";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Services } from "./sections/Services";
import { Projects } from "./sections/Projects";
// import { Process } from "./sections/Process";
// import { Skills } from "./sections/Skills";
import { Testimonials } from "./sections/Testimonials";
import { Contact } from "./sections/Contact";
import { Footer } from "./sections/Footer";

/**
 * Main application component.
 * Assembles the sticky header, section modules, and footer in sequence.
 */
function App() {
  return (
    <div className="relative min-h-screen bg-bg-dark text-white selection:bg-purple-600/30 selection:text-purple-200">
      {/* Sticky header navigation */}
      <Navbar />

      {/* Main content grid flow */}
      <main>
        {/* Hero Landing */}
        <Hero />

        {/* Section 01: About / Philosophy */}
        <About />

        {/* Section 02: Capabilities list */}
        <Services />

        {/* Section 03: Selected Client Projects */}
        <Projects />

        {/* Section 04: Process workflow — hidden */}
        {/* <Process /> */}

        {/* Section 05: Technology Tag Grid — hidden */}
        {/* <Skills /> */}

        {/* Section 06: Testimonials marquee */}
        <Testimonials />

        {/* Section 07: Conversion Lead Capture Form */}
        <Contact />
      </main>

      {/* Page Footer */}
      <Footer />
    </div>
  );
}

export default App;
