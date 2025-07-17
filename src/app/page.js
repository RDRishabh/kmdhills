// Home Page Components
import HeroSection from './components/home/HeroSection';
import FeaturesSection from './components/home/FeaturesSection';
import VillaListed from './components/home/VillaListed';
import TailoredComfort from './components/home/TailoredComfort';
import TextImageSections from './components/home/TextImageSections';
import FAQSection from './components/home/FAQSection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <VillaListed />
      <TailoredComfort />
      <TextImageSections />
      <FAQSection />
    </div>
  );
}
