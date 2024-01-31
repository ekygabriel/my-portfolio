import Image from "next/image";

import { montserratAlt } from "@/app/layout";

import { Location, Timer, Write, Affinity, Users } from "@/app/assets";

const UsabiltyStudy = () => {
  return (
    <div className="bg-[#E2CBFF] py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-6 mx-auto justify-between">
          <h3 className={montserratAlt.className + " text-4xl sm:text-5xl "}>
            Usability Study
          </h3>
          <p className="max-w-[500px]">
            We wanted to understand the user journey for placing a meal order,
            checking out, and completing an order on this app, to know how users
            are using it
          </p>
        </div>
        <h3
          className="flex items-center gap-10 text-2xl font-semibold after:content-[''] after:flex-auto after:h-[1px] after:hiddensdfs sm:after:block after:bg-[#9747FF] mt-10"
          style={{ letterSpacing: "7.5px" }}
        >
          FINDINGS
        </h3>

        <div className="flex justify-between flex-col md:flex-row gap-6 mt-10">
          <ul>
            On the first round of User testing of the lo-fi prototype I learnt
            that
            <li className="relative pl-4 before:absolute before:left-0 before:top-[10px] before:block before:content-[''] before:w-1 before:h-1 before:rounded-full before:bg-black">
              User easily navigated through the ordering process.
            </li>
            <li className="relative pl-4 before:absolute before:left-0 before:top-[10px] before:block before:content-[''] before:w-1 before:h-1 before:rounded-full before:bg-black">
              Users think the user flow is very good.
            </li>
            <li className="relative pl-4 before:absolute before:left-0 before:top-[10px] before:block before:content-[''] before:w-1 before:h-1 before:rounded-full before:bg-black">
              Users didn’t seem confident in inserting their personal details.
            </li>
          </ul>
          <ul>
            On the Second round of User testing of the lo-fi prototype I learnt
            that
            <li className="relative pl-4 before:absolute before:left-0 before:top-[10px] before:block before:content-[''] before:w-1 before:h-1 before:rounded-full before:bg-black">
              Users thought buttons were inconsistent.
            </li>
            <li className="relative pl-4 before:absolute before:left-0 before:top-[10px] before:block before:content-[''] before:w-1 before:h-1 before:rounded-full before:bg-black">
              Users still don’t have a means to monitor their order.
            </li>
            <li className="relative pl-4 before:absolute before:left-0 before:top-[10px] before:block before:content-[''] before:w-1 before:h-1 before:rounded-full before:bg-black">
              Users comlained that the checking out summary is unclear.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UsabiltyStudy;
