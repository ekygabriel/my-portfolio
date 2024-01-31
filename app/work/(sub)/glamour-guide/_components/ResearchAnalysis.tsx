import Image from "next/image";

import { montserratAlt } from "@/app/layout";

import { Boy, Mama } from "@/app/assets";

const ResearchAnalysis = () => {
  return (
    <div className="relative overflow-x-hidden">
      <h3
        className={
          montserratAlt.className +
          " flex flex-col justify-center items-center md:absolute md:right-[38px] md:-top-0 md:-rotate-90"
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
              src={Mama}
              alt=""
              width={250}
              height={250}
              className="rounded-full"
            />
            <div className="max-w-[300px]">
              <p>Name: Margret | Age: 60 |</p>
              <p>Education: B.A Fine Arts </p>
              <p>Hometown: Jos | Occupation: Retired Arts tutor</p>
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
              “Age is just a number and I still want to feel confident and
              beautiful. it’s never too late to learn, but I need guidiance that
              understands my age and concerns”
            </p>
            <h3
              style={{ letterSpacing: "16px" }}
              className="text-2xl font-semibold mb-3 mt-10"
            >
              GOALS:
            </h3>
            <ul className="text-sm">
              <li>
                To learn basic makeup techniques to enhance her appearance for
                social events and special occasions
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
                Makeup tutorials often seem geared towards younger individuals,
                making her feel excluded
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
              src={Boy}
              alt=""
              width={250}
              height={250}
              className="rounded-full"
            />
            <div className="max-w-[300px]">
              <p> Name: Alex | Age: 31 |</p>
              <p>Education: Physics B.Sc.</p>
              <p>Hometown: PH | Occupation: Professional makeup Artist</p>
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
              “My Clients trust me to create unique looks. I need a platform
              that keeps me inspired and helps me push my creative boundaries”
            </p>
            <h3
              style={{ letterSpacing: "16px" }}
              className="text-2xl font-semibold mb-3 mt-10"
            >
              GOALS:
            </h3>
            <ul className="text-sm">
              <li>
                To Stay at the cutting edge of makeup trends and techniques.
              </li>
              <li>
                To find advanced and creative tutorials to enhance his skills.
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
                Sturuggles to find high-quality, up to date tutorials and the
                lack of advanced techniques online frustrates him.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchAnalysis;
