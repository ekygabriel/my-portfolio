import Image from "next/image";

import { SiteMap } from "@/app/assets";
import { montserratAlt } from "@/app/layout";

const SiteMapComponent = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 px-4 py-20 max-w-4xl mx-auto">
      <div style={{ flex: "2" }}>
        <h3 className={montserratAlt.className + " text-4xl md:text-5xl mb-4"}>
          Site Map
        </h3>
        <p className="max-w-2xl mx-auto">
          The sitemap helps to give an overall picture of the information
          architecture on the site
        </p>
      </div>
      <div style={{ flex: "5" }}>
        <Image src={SiteMap} alt="" width={1000} height={500} />
      </div>
    </div>
  );
};

export default SiteMapComponent;
