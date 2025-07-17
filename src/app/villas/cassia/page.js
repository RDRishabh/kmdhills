// Cassia Villa Page Components
import HeroSection from '../../components/villas/cassia/HeroSection';
import DiscoverSection from '../../components/villas/cassia/DiscoverSection';
import GallerySection from '../../components/villas/cassia/GallerySection';
import TailoredSection from '../../components/shared/TailoredComfort';
import DescriptionSection from '../../components/villas/cassia/DescriptionSection';
import LocationSection from '../../components/villas/cassia/LocationSection';
import ExperienceSection from '../../components/villas/cassia/ExperienceSection';
import FAQSection from '../../components/shared/FAQSection';

export default function CassiaVillaPage() {
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
