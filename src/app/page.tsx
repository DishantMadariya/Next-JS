import Featured from "@/components/Featured";
import Footer from "@/components/Footer";
import Herosection from "@/components/Herosection";
import Instroctors from "@/components/Instroctors";
import Testimonial from "@/components/Testimonial";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import WhyChooseUs from "@/components/WhyChooseUs";


export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]" >
      <Herosection />
      <Featured />
      <WhyChooseUs />
      <Testimonial />
      <UpcomingWebinars />
      <Instroctors />
      <Footer />
    </main>
  );
}
