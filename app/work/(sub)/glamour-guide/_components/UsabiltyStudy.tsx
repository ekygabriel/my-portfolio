import Image from "next/image";

import { montserratAlt } from "@/app/layout";

import { Location, Timer, Write, Affinity, Users } from "@/app/assets";

const UsabiltyStudy = () => {
  return (
    <div className="bg-[#E4C8CC] py-20 px-4">
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
              <Image src={Users} alt="Users" width={22} height={22} />4
              Participants
            </p>
            <p className=" flex items-center gap-1">
              <Image src={Timer} alt="Users" width={22} height={22} />
              10 mins
            </p>
          </div>
          <div className="flex-1 flex flex-col gap-6">
            <p className=" flex items-center gap-1">
              <Image
                src={Location}
                alt="Users"
                width={22}
                height={22}
                className="self-start"
              />
              Nigeria: In-person and remote
            </p>
            <p className="flex items-center gap-1">
              <Image src={Write} alt="Users" width={22} height={22} />
              Moderated and Unmoderated Usability study
            </p>
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
              The need for clearer and more intuitive menu structures to enhance
              user experience.
            </p>
            <p className="mb-4">
              Participants had difficulty locating specific tutorials and
              courses within the prototype.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsabiltyStudy;
