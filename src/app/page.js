import HeroSection from "@/app/components/HeroSection";
import AboutSection from "@/app/components/AboutSection";
import NavBar from "@/app/components/NavBar";
import ProjectSection from "@/app/components/ProjectSection";
import EmailSection from "@/app/components/EmailSection";
import Footer from "@/app/components/Footer";
import AchievementsSection from "@/app/components/AchievementsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black">
        <NavBar />
        <div className="container mt-24 mx-auto px-12 py-4">
            <section><HeroSection /></section>
            <section><AchievementsSection/></section>
            <section><AboutSection/></section>
            <section><ProjectSection/></section>
            <section><EmailSection/></section>
        </div>
        <Footer />
     </main>
  );
}
