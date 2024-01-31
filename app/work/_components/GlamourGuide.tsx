import Image from "next/image";
import Box from "./Box";

import { Glam } from "@/app/assets";

const GlamourGuideComponent = () => {
  return (
    <Box className="bg-[#800020]" href="/work/glamour-guide">
      <Image
        src={Glam}
        alt="Glamour Guide"
        style={{ objectFit: "contain" }}
        width={250}
        height={250}
      />
    </Box>
  );
};

export default GlamourGuideComponent;
