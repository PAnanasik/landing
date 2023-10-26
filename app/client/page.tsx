import HowWorks from "@/components-client/HowWorks";
import Intro from "@/components-client/Intro";
import Navbar from "@/components-client/Navbar";
import RunningString from "@/components-client/RunningString";
import Partners from "@/components-client/Partners";
import Staff from "@/components-client/Staff";
import Faq from "@/components-client/Faq";
import Footer from "@/components-client/Footer";
import Map from "@/components-client/Map";
import Advantages from "@/components-client/Advantages";
import HowMuch from "@/components-client/HowMuch";
// import AnotherAdvantages from "@/components-client/AnotherAdvantages";

const page = () => {
  return (
    <div>
      <Navbar />
      <Intro />
      <RunningString />
      <Advantages />
      <HowMuch />
      <HowWorks />
      {/* <Partners /> */}
      <Staff />
      <Faq />
      <Map />
      <Footer />
    </div>
  );
};

export default page;
