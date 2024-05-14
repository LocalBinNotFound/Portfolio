import HeroSection from "@/app/components/HeroSection";
import AboutSection from "@/app/components/AboutSection";
import NavBar from "@/app/components/NavBar";
import ProjectSection from "@/app/components/ProjectSection";
import EmailSection from "@/app/components/EmailSection";
import Footer from "@/app/components/Footer";
import AchievementsSection from "@/app/components/AchievementsSection";
import EducationSection from "@/app/components/EducationSection";
import ExperienceSection from "@/app/components/ExperienceSection";
import { Analytics } from "@vercel/analytics/react"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black">
        <NavBar />
        <div className="container mt-24 mx-auto px-12 py-4">
            <HeroSection />
            <AchievementsSection/>
            <AboutSection/>
            <EducationSection />
            <ExperienceSection />
            <ProjectSection/>
            <EmailSection/>
        </div>
        <Footer />
        <Analytics />
     </main>
  );
}
