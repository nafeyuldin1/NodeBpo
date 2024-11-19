import About from "@/components/About";
import Contact from "@/components/Contact";
import FAQS from "@/components/FAQs";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServiceBanner from "@/components/ServiceBanner";
import Services from "@/components/Services";
import Team from "@/components/Team";
import TrustBadges from "@/components/TrustBadges";
import Image from "next/image";

export default function Home() {
  return (
  <div>
    <Hero/>
    <TrustBadges/>
    <ServiceBanner/>
    <Services/>
    <About/>
    <Team/>
    <FAQS/>
    <Contact/>
    <Footer/>
  </div>
  );
}
