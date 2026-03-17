import SectionDivider from "@/components/layout/SectionDivider";
import AngularArchitecturePracticeSection from "@/components/sections/AngularArchitecturePracticeSection";
import ClosingQuoteSection from "@/components/sections/ClosingQuoteSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import FrontendArchitectureSection from "@/components/sections/FrontendArchitectureSection";
import HeroSection from "@/components/sections/HeroSection";
import HomePreviewsSection from "@/components/sections/HomePreviewsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import TechnicalSkillsSection from "@/components/sections/TechnicalSkillsSection";
import TechnologiesSection from "@/components/sections/TechnologiesSection";

export default function Home() {
    return (
        <>
            <HeroSection />
            <SectionDivider />
            <ServicesSection />
            <SectionDivider />
            <FrontendArchitectureSection />
            <SectionDivider />
            <AngularArchitecturePracticeSection />
            <SectionDivider />
            <TechnicalSkillsSection />
            <SectionDivider />
            <HomePreviewsSection />
            <SectionDivider />
            <TechnologiesSection />
            <SectionDivider />
            <ExperienceSection />
            <SectionDivider />
            <ClosingQuoteSection />
        </>
    );
}
