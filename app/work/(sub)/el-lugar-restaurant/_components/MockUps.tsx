import { FidelityProto } from "@/app/assets";
import { montserratAlt } from "@/app/layout";
import Image from "next/image";

const MockUps = () => {
  return (
    <div className="bg-[#361A5C] py-20 text-white">
      <div className="max-w-5xl mx-auto px-4 ">
        <h3 className={montserratAlt.className + " text-3xl sm:text-5xl mb-10"}>
          Mock Ups & High Fidelity Protoype
        </h3>

        <p className="max-w-[500px] mb-10 ">
          The design is well-optimized for responsiveness across different
          devices and screen sizes for a consistent user experience.
        </p>
        <p>
          The site also is well-organized with clearly labelled navigation
          options like tutorials, about us, blog, courses, and contact.
        </p>
        <p>
          The design elements such as the color scheme, typography, and layout
          are cohesive and align well with the site&apos;s luxury and beauty
          theme
        </p>
      </div>
      <div className="overflow-x-auto whitespace-nowrap mt-10 max-w-5xl mx-auto px-4 pb-4">
        <Image
          src={FidelityProto}
          alt=""
          width={1000}
          height={600}
          style={{ minWidth: "700px" }}
        />
      </div>
    </div>
  );
};

export default MockUps;
