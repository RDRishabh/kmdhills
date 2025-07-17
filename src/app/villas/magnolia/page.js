// Magnolia Villa Page Components
import HeroSection from '../../components/villas/magnolia/HeroSection';
import DiscoverSection from '../../components/villas/magnolia/DiscoverSection';
import GallerySection from '../../components/villas/magnolia/GallerySection';
import TailoredSection from '../../components/shared/TailoredComfort';
import DescriptionSection from '../../components/villas/magnolia/DescriptionSection';
import LocationSection from '../../components/villas/magnolia/LocationSection';
import ExperienceSection from '../../components/villas/magnolia/ExperienceSection';
import FAQSection from '../../components/shared/FAQSection';

export default function MagnoliaVillaPage() {
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
