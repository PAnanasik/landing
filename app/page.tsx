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

export default function Home() {
  return (
    <div>
      <Navbar />
      <Intro />
      <RunningString />
      <Advantages />
      <Facts />
      <HowWorks />
      <Community />
      <MoreAdvantages />
      <Info />
      <Footer />
    </div>
  );
}
