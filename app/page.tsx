import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MotionProvider from '@/components/MotionProvider';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';
import Certifications from '@/components/sections/Certifications';
import Achievements from '@/components/sections/Achievements';
import Testimonials from '@/components/sections/Testimonials';
import Contact from '@/components/sections/Contact';

// Order follows what a hiring manager wants first: who → work → history →
// person → proof → contact.
export default function Home() {
  return (
    <MotionProvider>
      <Navbar />
      <main className="relative">
        <Hero />
        <Projects />
        <Experience />
        <About />
        <Skills />
        <Testimonials />
        <Certifications />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </MotionProvider>
  );
}
