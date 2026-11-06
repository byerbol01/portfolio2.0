import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Timeline from "@/components/Timeline";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-bg text-fg">
      <Header />
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Timeline />
      <Contact />
      <Footer />
    </main>
  );
}
