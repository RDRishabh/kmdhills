// About Us Page Components
import HeroSection from '../components/about/HeroSection';
import TailoredSection from '../components/shared/TailoredComfort';
import AboutSection from '../components/about/AboutSection';
import FeaturesSection from '../components/shared/FeaturesSection';
import MissionVisionSection from '../components/about/MissionVisionSection';
import CooperateSection from '../components/about/CooperateSection';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <TailoredSection />
      <AboutSection />
      <FeaturesSection />
      <MissionVisionSection />
      <CooperateSection />
    </div>
  );
}
