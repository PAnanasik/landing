import Advantages from "@/components-partner/Advantages";
import Community from "@/components-partner/Community";
import Facts from "@/components-partner/Facts";
import HowWorks from "@/components-partner/HowWorks";
import Info from "@/components-partner/Info";
import Intro from "@/components-partner/Intro";
import MoreAdvantages from "@/components-partner/MoreAdvantages";
import Navbar from "@/components-partner/Navbar";
import RunningString from "@/components-partner/RunningString";
import Footer from "@/components-partner/Footer";
import Map from "@/components-partner/Map";
import WhyUs from "@/components-partner/WhyUs";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Intro />
      <RunningString />
      <WhyUs />
      <Advantages />
      <Facts />
      <HowWorks />
      <Community />
      <MoreAdvantages />
      <Info />
      <Map />
      <Footer />
    </div>
  );
}
