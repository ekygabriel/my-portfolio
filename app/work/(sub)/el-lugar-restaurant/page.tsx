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
