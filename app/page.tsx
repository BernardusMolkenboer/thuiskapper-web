import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Barbers from "@/components/Barbers";
import Testimonials from "@/components/Testimonials";
import ForHairdressers from "@/components/ForHairdressers";
import DownloadCTA from "@/components/DownloadCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <Barbers />
      <Testimonials />
      <ForHairdressers />
      <DownloadCTA />
    </>
  );
}
