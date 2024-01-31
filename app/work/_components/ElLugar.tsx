import Box from "./Box";
import Image from "next/image";

import ElLugarImg from "@/app/assets/el.webp";

const ElLugar = () => {
  return (
    <Box href="/work/el-lugar-restaurant">
      <Image
        src={ElLugarImg}
        alt="El Lugar Restaurant"
        fill
        style={{ objectFit: "contain" }}
      />
    </Box>
  );
};

export default ElLugar;
