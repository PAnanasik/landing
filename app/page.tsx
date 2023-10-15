import Advantages from "@/components/Advantages";
import Community from "@/components/Community";
import Facts from "@/components/Facts";
import HowWorks from "@/components/HowWorks";
import Intro from "@/components/Intro";
import Navbar from "@/components/Navbar";
import RunningString from "@/components/RunningString";

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
   </div>
  )
}

