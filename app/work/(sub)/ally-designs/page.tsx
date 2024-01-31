import Footer from "@/app/components/footer/Footer";
import AllyDesignBanner from "./_components/Banner";
import DesignProcess from "./_components/DesignProcess";
import FlexBox from "./_components/FlexBox";
import ResearchAnalysis from "./_components/ResearchAnalysis";
import UsabiltyStudy from "./_components/UsabiltyStudy";
import PreFooter from "../../_components/PreFooter";
import MockUps from "./_components/MockUps";

const AllyDesignsPage = () => {
  return (
    <div className="relative overflow-hidden">
      <AllyDesignBanner />
      <FlexBox />
      <ResearchAnalysis />
      <DesignProcess />
      <UsabiltyStudy />
      <MockUps />
      <PreFooter />
      <Footer className="bg-yellow-500 text-black" />
    </div>
  );
};

export default AllyDesignsPage;
