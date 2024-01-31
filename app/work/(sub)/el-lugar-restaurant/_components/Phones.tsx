import { Screens } from "@/app/assets";
import Image from "next/image";

const Phones = () => {
  return (
    <div className="overflow-x-auto whitespace-nowrap px-4 my-4 py-2 max-w-5xl mx-auto">
      <Image
        src={Screens}
        alt=""
        width={1600}
        height={800}
        style={{ minWidth: "1200px" }}
      />
    </div>
  );
};

export default Phones;
