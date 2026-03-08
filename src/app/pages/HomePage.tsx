import { useState } from 'react';
import { Header } from '../components/Header';
import { HeroSection } from '../components/HeroSection';
import { TrustBar } from '../components/TrustBar';
import { CRMModule } from '../components/CRMModule';
import { LaunchpadModule } from '../components/LaunchpadModule';
import { ChannelPartnerModule } from '../components/ChannelPartnerModule';
import { SocialProofSection } from '../components/SocialProofSection';
import { ConversionForm } from '../components/ConversionForm';
import { FloatingActionBar } from '../components/FloatingActionBar';
import { ThankYouModal } from '../components/ThankYouModal';
import { Footer } from '../components/Footer';

export default function HomePage() {
  const [showThankYou, setShowThankYou] = useState(false);

  const handleFormSubmit = () => {
    setShowThankYou(true);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white antialiased">
      <Header />
      <HeroSection onFormSubmit={handleFormSubmit} />
      <TrustBar />
      <CRMModule />
      <LaunchpadModule />
      <ChannelPartnerModule />
      <SocialProofSection />
      <ConversionForm onFormSubmit={handleFormSubmit} />
      <Footer />
      <FloatingActionBar />
      <ThankYouModal isOpen={showThankYou} onClose={() => setShowThankYou(false)} />
    </div>
  );
}
