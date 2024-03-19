import Footer from "@/app/components/footer/Footer";
import PreFooter from "./_components/PreFooter";
import ProjectOverview from "./_components/ProjectOverview";
import UserResearch from "./_components/UserResearch";
import ResearchAnalysis from "./_components/ResearchAnalysis";
import UserJourneyMap from "./_components/UserJourneyMap";
import UsabiltyStudy from "./_components/UsabiltyStudy";
import AccessiblityConsideration from "./_components/AccessiblityConsideration";
import DesignProcess from "./_components/DesignProcess";
import MockUps from "./_components/MockUps";
import Phones from "./_components/Phones";
import ElLugarBanner from "./_components/Banner";
import { Metadata } from "next";
import { ElLogo } from "@/app/assets";

export const metadata: Metadata = {
  title: "El Lugar Spanish Restaurant App",
  description:
    "The El Lugar restaurant app is a digital platform designed to enhance the dining experience at a Spanish restaurant located in Lagos, Nigeria. This user-friendly mobile application likely offers features such as: Menu display, Online ordering, Reservation",
  openGraph: {
    images: [{ url: ElLogo.src }],
  },
};

const ElLugarPage = () => {
  return (
    <>
      <ElLugarBanner />
      <ProjectOverview />
      <UserResearch />
      <ResearchAnalysis />
      <UserJourneyMap />
      <DesignProcess />
      <UsabiltyStudy />
      <MockUps />
      <AccessiblityConsideration />
      <Phones />
      <PreFooter />
      <Footer className="bg-[#461196] text-white -mt-1" />
    </>
  );
};

export default ElLugarPage;
