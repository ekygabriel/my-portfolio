import Image from "next/image";

import { montserratAlt } from "@/app/layout";

import { One, Two } from "@/app/assets";

const ResearchAnalysis = () => {
  return (
    <div className="mt-10 relative">
      <h3
        className={
          montserratAlt.className +
          " flex flex-col justify-center items-center md:absolute md:right-6 md:-top-4 md:-rotate-90"
        }
        style={{ transformOrigin: "right" }}
      >
        <span style={{ letterSpacing: "7.9px", fontSize: "35px" }}>
          Research
        </span>
        <span
          className="text-yellow-500 -mt-14 -z-10"
          style={{ fontSize: "70px" }}
        >
          Analysis
        </span>
      </h3>
      <h3 className={montserratAlt.className + " text-2xl text-center mt-12"}>
        User Personas
      </h3>
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-10 mt-10">
          <div
            className="shrink-0 flex flex-col gap-10 items-center text-center"
            style={{ flex: "2" }}
          >
            <Image
              src={One}
              alt="Helmet"
              width={250}
              height={250}
              className="rounded-full"
            />
            <div className="max-w-[300px]">
              <p>Name: Samuel | Age: 35 |</p>
              <p>Education: M.Sc. </p>
              <p>Arch Hometown: Abuja | Occupation: Architect</p>
            </div>
          </div>
          <div
            className="shrink-0 text-center md:text-left max-w-[400px] mx-auto md:max-w-none"
            style={{ flex: "3" }}
          >
            <h3
              style={{ letterSpacing: "16px" }}
              className="text-2xl font-semibold mb-3"
            >
              QUOTE:
            </h3>
            <p>
              “I want public spaces I create to be welcoming for everyone. Where
              do I start?”
            </p>
            <h3
              style={{ letterSpacing: "16px" }}
              className="text-2xl font-semibold mb-3 mt-10"
            >
              GOALS:
            </h3>
            <ul className="text-sm">
              <li>
                To design inclusive physical space that excludes no category of
                user.
              </li>
              <li>To be remembered as one who cared for the less privileged</li>
            </ul>
            <h3
              style={{ letterSpacing: "16px" }}
              className="text-2xl font-semibold mb-3 mt-10"
            >
              PAIN POINTS:
            </h3>
            <ul className="text-sm">
              <li>
                Lacks knowledge about accessibility standards, finds it hard to
                locate reliable resources.
              </li>
            </ul>
          </div>
          <div className="w-[20px] hidden md:block"></div>
        </div>
        <hr className="max-w-2xl mx-auto my-20" />

        <div className="flex flex-col md:flex-row gap-10 mt-10">
          <div
            className="shrink-0 flex flex-col gap-10 items-center text-center"
            style={{ flex: "2" }}
          >
            <Image
              src={Two}
              alt="Helmet"
              width={250}
              height={250}
              className="rounded-full"
            />
            <div className="max-w-[300px]">
              <p>Name: Aisha | Age: 25 |</p>
              <p>Education: Digital Design</p>
              <p>Hometown: Kano | Occupation: Entry UX Designer</p>
            </div>
          </div>
          <div
            className="shrink-0 text-center md:text-left max-w-[400px] mx-auto md:max-w-none"
            style={{ flex: "3" }}
          >
            <h3
              style={{ letterSpacing: "16px" }}
              className="text-2xl font-semibold mb-3"
            >
              QUOTE:
            </h3>
            <p>
              “I believe the digital world should be accessible to everyone. How
              can I ensure my designs reflect that?”
            </p>
            <h3
              style={{ letterSpacing: "16px" }}
              className="text-2xl font-semibold mb-3 mt-10"
            >
              GOALS:
            </h3>
            <ul className="text-sm">
              <li>
                To build a portfolio that showcases her dedication to inclusive
                design.
              </li>
              <li>
                To include people like my sister who is blind in the digital
                space
              </li>
            </ul>
            <h3
              style={{ letterSpacing: "16px" }}
              className="text-2xl font-semibold mb-3 mt-10"
            >
              PAIN POINTS:
            </h3>
            <ul className="text-sm">
              <li>
                While enthusiastic, she finds it challenging to gather
                consistent feedback on her designs, especially regarding
                inclusivity.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchAnalysis;
