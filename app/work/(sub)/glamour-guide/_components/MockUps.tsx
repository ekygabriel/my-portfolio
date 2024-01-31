import Image from "next/image";

import { montserratAlt } from "@/app/layout";

import { GlamMockup, GlamMockupFace, GlamMockupMobile } from "@/app/assets";

const MockUps = () => {
  return (
    <>
      <div className="bg-[#B76E79] pt-20 pb-96 text-white">
        <div className="max-w-5xl mx-auto text-lg px-4">
          <h3 className={montserratAlt.className + " text-5xl mb-12"}>
            Mock Ups
          </h3>
          <div className="max-w-3xl flex flex-col gap-4">
            <p className="max-w-[500px]">
              The design is well-optimized for responsiveness across different
              devices and screen sizes for a consistent user experience.
            </p>
            <p>
              The site also is well-organized with clearly labelled navigation
              options like tutorials, about us, blog, courses, and contact. The
              design elements such as the color scheme, typography, and layout
              are cohesive and align well with the site&apos;s luxury and beauty
              theme
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-16 items-center justify-center -mb-52 md:-mb-80 mt-20">
          <Image
            src={GlamMockup}
            alt=""
            width={1000}
            height={600}
            className="px-10 hidden sm:block -mb-64"
          />
        </div>
      </div>
      <div className="flex flex-col items-center gap-10 sm:hidden -mt-40">
        <Image
          src={GlamMockupFace}
          alt=""
          width={400}
          height={300}
          className="sm:hidden w-full pl-4 sm:pl-0"
        />

        <Image
          src={GlamMockupMobile}
          alt=""
          width={400}
          height={300}
          className="sm:hidden px-4"
        />
      </div>
    </>
  );
};

export default MockUps;
