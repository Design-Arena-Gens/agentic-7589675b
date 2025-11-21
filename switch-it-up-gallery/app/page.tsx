import { ConsultationCTA } from "@/components/ConsultationCTA";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProductShowcase } from "@/components/ProductShowcase";
import { RitualSteps } from "@/components/RitualSteps";
import { StorySection } from "@/components/StorySection";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col pb-24">
      <Header />
      <main className="flex flex-1 flex-col gap-20 pb-16">
        <Hero />
        <ProductShowcase />
        <RitualSteps />
        <StorySection />
        <Testimonials />
        <ConsultationCTA />
      </main>
      <Footer />
    </div>
  );
}
