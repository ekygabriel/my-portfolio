import Image from "next/image";

import { montserratAlt } from "@/app/layout";

import {
  GlamIdeation1,
  GlamIdeation2,
  GlamIdeationWireframe,
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
        <span className="text-[#B76E79] -mt-12 sm:-mt-14 text-[55px] sm:text-[70px]">
          Processes
        </span>
      </h3>
      <div className="flex flex-col md:flex-row items-center mt-10 gap-6 max-w-5xl mx-auto px-4">
        <div className="shrink-0" style={{ flex: "2" }}>
          <h3
            className={
              montserratAlt.className +
              " text-center md:text-left text-3xl mb-10"
            }
          >
            Ideation:{" "}
          </h3>
          <p>
            Sketches were generated based on the users needs and pain points.
            The aim was to be able to design for user needs that they were aware
            of and unaware of
          </p>
        </div>
        <div
          className="flex flex-col sm:flex-row gap-4 shrink-0"
          style={{ flex: "3" }}
        >
          <Image
            src={GlamIdeation1}
            alt="Ideation"
            width={300}
            height={300}
            style={{ objectFit: "cover", flex: "3" }}
          />
          <Image
            src={GlamIdeation2}
            alt="Ideation"
            width={300}
            height={300}
            style={{ objectFit: "cover", flex: "2" }}
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-6 max-w-4xl mx-auto px-4 mt-16">
        <h3 className={montserratAlt.className + " text-3xl shrink-0"}>
          Wireframing & Prototypes
        </h3>
        <p>
          Wireframes were generated on Figma to show how i came about the design
          solutions
        </p>
      </div>
      <Image
        src={GlamIdeationWireframe}
        alt="Proto"
        width={600}
        height={600}
        className="mt-16 mx-auto"
        style={{ objectFit: "contain" }}
      />
    </div>
  );
};

export default DesignProcess;
