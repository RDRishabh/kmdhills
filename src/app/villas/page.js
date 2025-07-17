// Villas Page Components
import HeroSection from '../components/villas/HeroSection';
import DiscoverSection from '../components/villas/DiscoverSection';
import GallerySection from '../components/villas/GallerySection';
import TailoredSection from '../components/shared/TailoredComfort';
import DescriptionSection from '../components/villas/DescriptionSection';
import LocationSection from '../components/villas/LocationSection';
import ExperienceSection from '../components/villas/ExperienceSection';
import FAQSection from '../components/shared/FAQSection';

export default function VillasPage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <DiscoverSection />
      <GallerySection />
      <TailoredSection />
      <DescriptionSection />
      <LocationSection />
      <ExperienceSection />
      <FAQSection />
    </div>
  );
}
