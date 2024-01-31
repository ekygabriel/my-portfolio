import { Metadata } from "next";
import Image from "next/image";

import { EUA_BG } from "../assets";
import Works from "./_components/Works";
import Footer from "../components/footer/Footer";

export const metadata: Metadata = {
  title: "My Works",
};

const WorkPage = () => {
  return (
    <>
      <div className="relative w-full">
        <figure className="fixed h-[100vh] -left-[100px] sm:h-[70vh] w-full sm:-left-[150px] lg:-left-[300px] lg:h-[60vh] -z-10 -rotate-90">
          <Image
            src={EUA_BG}
            alt="Background Logo"
            fill
            sizes="500px"
            style={{ objectFit: "contain" }}
          />
        </figure>
        <div className="mx-auto max-w-5xl px-6 mt-28">
          <h3
            style={{
              letterSpacing: "7.75px",
              fontSize: "25px",
              fontWeight: "600",
              textAlign: "center",
            }}
          >
            MY <span className="text-yellow-500">WORKS</span>
          </h3>
          <Works />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default WorkPage;
