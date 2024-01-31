import { UserJourney } from "@/app/assets";
import { montserratAlt } from "@/app/layout";
import Image from "next/image";

const UserJourneyMap = () => {
  return (
    <div className="max-w-4xl mx-auto pb-20">
      <h3
        className={
          montserratAlt.className + " text-3xl md:text-5xl text-center mb-6"
        }
      >
        User Journey Map
      </h3>
      <Image
        src={UserJourney}
        alt=""
        width={800}
        height={650}
        className="mx-auto"
      />
    </div>
  );
};

export default UserJourneyMap;
