import Footer from "@/app/components/footer/Footer";
import GlamBanner from "./_components/Banner";
import ProjectOverview from "./_components/ProjectOverview";
import ResearchAnalysis from "./_components/ResearchAnalysis";
import UserResearch from "./_components/UserResearch";
import DesignProcess from "./_components/DesignProcess";
import UsabiltyStudy from "./_components/UsabiltyStudy";
import MockUps from "./_components/MockUps";
import PreFooter from "./_components/PreFooter";
import AccessiblityConsideration from "./_components/AccessiblityConsideration";
import SiteMapComponent from "./_components/SiteMap";

const GlamourGuide = () => {
  return (
    <>
      <GlamBanner />
      <ProjectOverview />
      <UserResearch />
      <ResearchAnalysis />
      <DesignProcess />
      <SiteMapComponent />
      <UsabiltyStudy />
      <MockUps />
      <AccessiblityConsideration />
      <PreFooter />
      <Footer className="bg-[#800020] text-[#FCFBF4] -mt-1" />
    </>
  );
};

export default GlamourGuide;
