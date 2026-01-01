import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { ImpactSection } from "@/components/home/ImpactSection";
import { ProgramsPreview } from "@/components/home/ProgramsPreview";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ImpactSection />
      <ProgramsPreview />
      <CTASection />
    </Layout>
  );
};

export default Index;
