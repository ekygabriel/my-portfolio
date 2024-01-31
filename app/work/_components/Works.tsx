import AllyDesigns from "./Ally";
import ElLugar from "./ElLugar";
import GlamourGuide from "./GlamourGuide";
import PencilWork from "./PencilWork";

const Works = () => {
  return (
    <div className="mt-20 flex flex-wrap items-center justify-center gap-6">
      <AllyDesigns />
      <GlamourGuide />
      <ElLugar />
      <PencilWork />
    </div>
  );
};

export default Works;
