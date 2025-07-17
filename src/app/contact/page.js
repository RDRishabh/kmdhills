// Contact Page Components
import ContactDetailsSection from '../components/contact/ContactDetailsSection';
import ContactFormSection from '../components/contact/ContactFormSection';

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <ContactDetailsSection />
      <ContactFormSection />
    </div>
  );
}
