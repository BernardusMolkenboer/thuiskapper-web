import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import Barbers from '@/components/Barbers';
import Testimonials from '@/components/Testimonials';
import ForHairdressers from '@/components/ForHairdressers';
import DownloadCTA from '@/components/DownloadCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Barbers />
        <Testimonials />
        <ForHairdressers />
        <DownloadCTA />
      </main>
      <Footer />
    </div>
  );
}
