import { Layout } from "@/components/layout/Layout";
import { HeroSlider } from "@/components/home/HeroSlider";
import { ImpactSection } from "@/components/home/ImpactSection";
import { ProgramsPreview } from "@/components/home/ProgramsPreview";
import { VideoParallax } from "@/components/home/VideoParallax";
import { JoinUsSection } from "@/components/home/JoinUsSection";
import { GalleryPreview } from "@/components/home/GalleryPreview";
import { NewsPreview } from "@/components/home/NewsPreview";
import { PartnersSection } from "@/components/home/PartnersSection";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSlider />
      <ImpactSection />
      <ProgramsPreview />
      <VideoParallax />
      <JoinUsSection />
      <GalleryPreview />
      <NewsPreview />
      <PartnersSection />
      <NewsletterSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
