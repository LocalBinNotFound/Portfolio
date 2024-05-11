import HeroSection from "@/app/components/HeroSection";
import AboutSection from "@/app/components/AboutSection";
import NavBar from "@/app/components/NavBar";
import ProjectSection from "@/app/components/ProjectSection";
import EmailSection from "@/app/components/EmailSection";
import Footer from "@/app/components/Footer";
import AchievementsSection from "@/app/components/AchievementsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
        <NavBar />
        <div className="container mt-24 mx-auto px-12 py-4">
            <HeroSection />
            <AchievementsSection />
            <AboutSection />
            <ProjectSection />
            <EmailSection />
        </div>
        <Footer />
     </main>
  );
}
