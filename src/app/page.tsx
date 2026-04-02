import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AgentSwarm from "@/components/AgentSwarm";
import FactoryAnimation from "@/components/FactoryAnimation";
import FactoryLine from "@/components/FactoryLine";
import TechStack from "@/components/TechStack";
import BentoGrid from "@/components/BentoGrid";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AgentSwarm />
        <FactoryAnimation />
        <FactoryLine />
        <TechStack />
        <BentoGrid />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
