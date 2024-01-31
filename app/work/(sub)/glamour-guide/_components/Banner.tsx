import Image from "next/image";

import { GlamLogo, GlamText, Glam_Lappy } from "@/app/assets";
const GlamBanner = () => {
  return (
    <div className="relative flex flex-col md:flex-row items-center -mb-40 md:mb-20 max-w-[100vw]">
      <div className="flex flex-col xl:flex-row items-center px-3 pl-6 gap-6 mb-10 md:ml-auto">
        <Image src={GlamLogo} width={150} height={150} alt="" />
        <Image src={GlamText} width={400} height={200} alt="" />
      </div>
      <Image
        src={Glam_Lappy}
        alt=""
        width={800}
        height={350}
        className="pl-6"
      />
    </div>
  );
};

export default GlamBanner;
