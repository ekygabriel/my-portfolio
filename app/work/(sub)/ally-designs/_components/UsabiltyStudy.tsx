import Image from "next/image";

import { montserratAlt } from "@/app/layout";

import { Location, Timer, Write, Affinity, Users } from "@/app/assets";

const UsabiltyStudy = () => {
  return (
    <div className="bg-[#38B6FF] py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h3 className={montserratAlt.className + " text-4xl sm:text-5xl "}>
          Usability Study
        </h3>
        <div className="flex md:flex-row flex-col gap-4 md:gap-10 mt-16">
          <h4
            className="flex-1 font-medium text-2xl"
            style={{ letterSpacing: "7.5px" }}
          >
            PARAMETERS
          </h4>
          <div className="flex-1 flex flex-col gap-6">
            <p className="flex items-center gap-1">
              <Image src={Users} alt="Users" width={22} height={22} />
              10 Participants
            </p>
            <p className=" flex items-center gap-1">
              <Image src={Timer} alt="Users" width={22} height={22} />
              10 - 15 mins
            </p>
          </div>
          <div className="flex-1 flex flex-col gap-6">
            <p className="flex items-center gap-1">
              <Image src={Write} alt="Users" width={22} height={22} />
              Unmoderated usability study
            </p>
            <p className=" flex items-center gap-1">
              <Image
                src={Location}
                alt="Users"
                width={22}
                height={22}
                className="self-start"
              />
              Nigeria: Lagos, Port Harcourt and Calabar
            </p>
          </div>
        </div>
        <div className="flex md:flex-row flex-col gap-4 md:gap-10 mt-16">
          <h4
            className="font-medium text-2xl"
            style={{ letterSpacing: "7.5px" }}
          >
            AFFINITY <br className="hidden md:inline-block" /> DIAGRAMS
          </h4>
          <div className="">
            <p className="mb-4">
              At this point I took out some time to sort user feedback from the
              unmoderated usability study carried out
            </p>
            <figure className="relative w-[100%] min-h-72">
              <Image
                src={Affinity}
                alt="Affinity"
                fill
                style={{ objectFit: "contain" }}
              />
            </figure>
          </div>
        </div>
        <div className="flex md:flex-row flex-col gap-4 md:gap-10 mt-16 max-w-3xl">
          <h4
            className="font-medium text-2xl"
            style={{ letterSpacing: "7.5px" }}
          >
            FINDINGS
          </h4>
          <div>
            <p className="mb-4">
              6 out of 10 participants easily located the desired resources.
              However, four participants suggested having a better-organized
              resource section with filters
            </p>
            <p className="mb-4">
              Feedback submission was smooth for all participants. However,
              three participants felt overwhelmed by the volume of feedback
              received.
            </p>
            <p className="mb-4">
              7 out of 10 participants uploaded designs seamlessly. However,
              three participants were unclear about setting their designs for
              community feedback.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsabiltyStudy;
