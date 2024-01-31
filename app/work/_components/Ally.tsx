import Image from "next/image";
import Box from "./Box";

import { Ally } from "@/app/assets";

const AllyDesigns = () => {
  return (
    <Box href="/work/ally-designs">
      <Image
        src={Ally}
        alt="Ally Designs"
        width={200}
        height={200}
        style={{ objectFit: "contain" }}
      />
    </Box>
  );
};

export default AllyDesigns;
