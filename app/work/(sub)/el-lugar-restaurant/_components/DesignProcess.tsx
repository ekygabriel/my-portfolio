import Image from "next/image";

import { montserratAlt } from "@/app/layout";

import {
  ElLugarIdeation,
  ElLugarProtoOne,
  ElLugarProtoTwo,
} from "@/app/assets";

const DesignProcess = () => {
  return (
    <div className="bg-[#FAFAFA] py-20 mt-20">
      <h3
        className={
          montserratAlt.className + " flex flex-col justify-center items-center"
        }
        style={{ transformOrigin: "right" }}
      >
        <span style={{ letterSpacing: "7.9px", fontSize: "35px", zIndex: "1" }}>
          Design
        </span>
        <span className="text-[#9747FF] -mt-12 sm:-mt-14 text-[55px] sm:text-[70px]">
          Processes
        </span>
      </h3>
      <div className="flex flex-col md:flex-row items-center mt-10 gap-6 max-w-5xl mx-auto px-4">
        <div className="flex-1 shrink-0">
          <h3 className={montserratAlt.className + " text-3xl mb-10"}>
            Ideation:
          </h3>
          <p>
            Sketches were generated based on the users needs and pain points.
            The aim was to be able to design for user needs that they were aware
            of and unaware of
          </p>
        </div>
        <Image
          src={ElLugarIdeation}
          alt="Ideation"
          width={400}
          height={400}
          style={{ objectFit: "contain" }}
          className="flex-1 shrink-0"
        />
      </div>
      <div className="flex flex-col md:flex-row gap-6 max-w-4xl mx-auto px-4 mt-16">
        <h3 className={montserratAlt.className + " text-3xl shrink-0"}>
          Wireframing & Prototypes
        </h3>
        <p>
          Wireframes were generated on Figma to show how I came about the design
          solutions
        </p>
      </div>
      <div className="overflow-x-auto whitespace-nowrap">
        <Image
          src={ElLugarProtoOne}
          alt=""
          width={800}
          height={800}
          className="mt-16 mx-auto"
          style={{ objectFit: "cover", minWidth: "600px" }}
        />
      </div>
      <div className="overflow-x-auto whitespace-nowrap">
        <Image
          src={ElLugarProtoTwo}
          alt=""
          width={800}
          height={800}
          className="mt-16 mx-auto"
          style={{ objectFit: "cover", minWidth: "600px" }}
        />
      </div>
    </div>
  );
};

export default DesignProcess;
