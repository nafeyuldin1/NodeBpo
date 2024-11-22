import About from "@/components/About";
import Contact from "@/components/Contact";
import FAQS from "@/components/FAQs";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ServiceBanner from "@/components/ServiceBanner";
import Services from "@/components/Services";
// import Team from "@/components/Team";
import TrustBadges from "@/components/TrustBadges";

export default function Home() {
  return (
  <div>
    <Hero/>
    <TrustBadges/>
    <ServiceBanner/>
    <Services/>
    <About/>
    {/* <Team/> */}
    <FAQS/>
    <Contact/>
    <Footer/>
  </div>
  );
}
