import { Ally, Gadgets } from "@/app/assets";

import Image from "next/image";

const AllyDesignBanner = () => {
  return (
    <div className="flex mt-10 items-center justify-center flex-col sm:flex-row gap-16 sm:gap-5 sm:pb-20 sm:max-w-2xl md:max-w-4xl pl-0 sm:pl-4 lg:pl-0 mx-auto">
      <Image
        src={Ally}
        width={200}
        height={120}
        alt="Ally Logo"
        style={{ objectFit: "contain" }}
      />
      <div className="relative w-[110vw] min-h-80 sm:min-h-fit -ml-[45px] sm:ml-2">
        <Image
          src={Gadgets}
          width={500}
          height={300}
          alt="gadgets"
          className="w-full absolute sm:static ml-10 sm:ml-0"
          style={
            {
              // marginLeft: "40px",
            }
          }
        />
      </div>
    </div>
  );
};

export default AllyDesignBanner;
