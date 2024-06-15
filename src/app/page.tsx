import Image from "next/image";
import HeroSection from "./modules/herosection/herosection";
import InfoSection from "./modules/infosection/infosection";
import { Footer } from "./components/footer/footer";
import Reservation from "./modules/cta/reservation";

export default function Home() {
  return (
    <>
      <HeroSection />
      <InfoSection />
      <Reservation/>
      <Footer/>
    </>
  );
}
