import Image from "next/image";

import { PencilWorks } from "@/app/assets";

const PencilWorksPage = () => {
  return (
    <div className="overflow-x-auto whitespace-nowrap pb-5 mb-10 mx-auto">
      <figure className="mx-auto relative w-[90%] h-[70%] min-w-[700px] overflow-x-auto whitespace-nowrap flex justify-center">
        <Image src={PencilWorks} alt="Pencil Works" width={900} height={700} />
      </figure>
    </div>
  );
};

export default PencilWorksPage;
