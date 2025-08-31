import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Timeline from "@/components/Timeline";
import Stories from "@/components/Stories";
import Lessons from "@/components/Lessons";
import Sahaba from "@/components/Sahaba";
import Lineage from "@/components/Lineage";
import Hadith from "@/components/Hadith";
import Resources from "@/components/Resources";
import SeerahTours from "@/components/SeerahTours";
import Shop from "@/components/Shop";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Timeline />
      <Stories />
      <Sahaba />
      <Lineage />
      <Lessons />
      <Hadith />
      <SeerahTours />
      <Resources />
      <Shop />
      <Footer />
    </div>
  );
}