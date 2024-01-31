import Image from "next/image";
import classes from "./Banner.module.scss";
import { ElDesc, ElLogo, ElScreen, ElText } from "@/app/assets";

const ElLugarBanner = () => {
  return (
    <div className={classes.Container}>
      <Image
        src={ElScreen}
        alt=""
        width={300}
        height={600}
        className={classes.Screen}
      />
      <div className={classes.Inner}>
        <Image src={ElLogo} alt="" width={400} height={400} className="pr-2" />
        <Image src={ElText} alt="" width={200} height={100} className="pr-2" />
        <Image src={ElDesc} alt="" width={300} height={100} className="pr-2" />
      </div>
    </div>
  );
};

export default ElLugarBanner;
