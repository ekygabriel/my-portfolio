import Image from "next/image";

import { montserratAlt } from "@/app/layout";

import { Patricia } from "@/app/assets";

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
          className="text-[#D9BCFF] -mt-14 -z-10"
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
              src={Patricia}
              alt=""
              width={250}
              height={250}
              className="rounded-full"
            />
            <div className="max-w-[300px]">
              <p>Name: Patricia | Age: 50 |</p>
              <p> Education: Banking and Finance</p>
              <p>Hometown: Ikeja | Occupation: Bank manager</p>
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
            <p>“I am so busy I don’t have time to cook for my self”</p>
            <h3
              style={{ letterSpacing: "16px" }}
              className="text-2xl font-semibold mb-3 mt-10"
            >
              GOALS:
            </h3>
            <ul className="text-sm">
              <li>To manage her time well at the office</li>
              <li>To be able to have healthy meals at home and at work</li>
            </ul>
            <h3
              style={{ letterSpacing: "16px" }}
              className="text-2xl font-semibold mb-3 mt-10"
            >
              PAIN POINTS:
            </h3>
            <ul className="text-sm">
              <li>
                She dislikes the fact she has to navigate through so many pages
                to be able to place an order for a simple meal
              </li>
            </ul>
          </div>
          <div className="w-[20px] hidden md:block"></div>
        </div>
        <hr className="max-w-2xl mx-auto my-20" />
      </div>
    </div>
  );
};

export default ResearchAnalysis;
