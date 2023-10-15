import Advantages from "@/components/Advantages";
import Community from "@/components/Community";
import Facts from "@/components/Facts";
import HowWorks from "@/components/HowWorks";
import Info from "@/components/Info";
import Intro from "@/components/Intro";
import MoreAdvantages from "@/components/MoreAdvantages";
import Navbar from "@/components/Navbar";
import RunningString from "@/components/RunningString";
import Footer from "@/components/Footer";

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
