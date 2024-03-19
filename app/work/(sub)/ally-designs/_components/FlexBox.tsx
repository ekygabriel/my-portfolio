import { montserratAlt } from "@/app/layout";
import Image from "next/image";

import { UDIA, Wheel } from "@/app/assets";

const FlexBox = () => {
  return (
    <div className="">
      <div className="flex flex-col md:flex-row min-h-96">
        <div className="bg-[#f2f2f2] flex-1 py-16 px-10 ">
          <h3 className={montserratAlt.className + " text-4xl mb-6"}>
            Project Overview:
          </h3>
          <p>
            A11y designs is a product designed for a nonprofit I cofounded which
            aims to increase the awareness of universal design amongst designers
            in Africa and eventually the world. it is an all-in-one platform
            that merges principles of universal design with the power of
            community-driven feedback and expert insights.
          </p>
          <p className="mt-6">
            <b>Goal:</b>
            This app aims to help designers, architects, and developers ensure
            that their designs—whether digital or physical—are inclusive and
            accessible to all.
          </p>
          <p className="mt-6">
            Role on Project:{" "}
            <b>
              Lead UX designer & UX Researcher, Graphic Artist, Brand & Content
              creator.
            </b>
          </p>
          <p className="mt-6">
            <b>Responsibilities:</b> User research, wire framing, prototyping,
            creating of mockups, conducting usability test, etc.
          </p>
        </div>
        <div className="min-h-72 bg-[#38B6FF] px-10 flex-1 py-16 flex items-center justify-center">
          <Image src={UDIA} alt="UDIA" width={300} height={180} />
        </div>
      </div>
      <div className="flex flex-col md:flex-row min-h-96 ">
        <figure className="relative w-[100vw] min-h-96 order-1 md:order-none flex-1 shrink-0 px-10">
          <Image
            src={Wheel}
            alt="Challenges"
            fill
            objectFit="cover"
            //   width={500}
            //   height={500}
          />
        </figure>
        <div className="bg-[#f2f2f2] flex-1 py-16 px-10 shrink-0 text-sm">
          <h3 className={montserratAlt.className + " text-4xl mb-6"}>
            Challenges:
          </h3>
          <p>
            Often, products and environments are designed without considering
            the full spectrum of human diversity, particularly people with
            disabilities.
          </p>
          <p>
            A11y Designs provides a platform where inclusivity is central to the
            design process, enabling designers to create products that are
            usable and beneficial for people with a wide range of abilities.
          </p>
          <ol className="mt-6">
            Other Challenges this app addresses are:
            <li>
              the knowledge gap in understanding how to implement accessibility
              standards and inclusive design principles
            </li>
            <li>
              the difficulty for designers without disabilities to fully
              understand the challenges faced by users with disabilities.
            </li>
          </ol>
        </div>
      </div>
      <div className="px-4 bg-yellow-500 py-32">
        <div className="mx-auto max-w-4xl">
          <h3
            className={montserratAlt.className + " text-4xl text-center mb-10"}
          >
            User Research
          </h3>
          <p className="text-justify px-4">
            Specializing in the intersection of design and accessibility, my
            user research delves deep into understanding the unique needs,
            preferences, and challenges faced by diverse user groups. With a
            holistic background spanning from architecture to UX design, my
            approach emphasizes creating inclusive environments—both digital and
            physical. Through meticulous analysis, empathy-driven testing, and a
            commitment to human-centered design, I aim to champion products and
            spaces that resonate universally, ensuring every individual feels
            seen, heard, and catered to.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FlexBox;
