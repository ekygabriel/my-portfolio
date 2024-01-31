import Image from "next/image";
import Link from "next/link";

import { EUA_BG } from "./assets";
import Footer from "./components/footer/Footer";
const HomePage = () => {
  return (
    <>
      <div className="mt-60 mb-20 px-5 flex flex-col justify-center items-center relative">
        <figure className="absolute h-96 w-full max-w-5xl left-0 -z-10">
          <Image src={EUA_BG} alt="Background Logo" fill sizes="500px" />
        </figure>
        <div className="mx-auto max-w-[600px] text-center">
          <h3
            style={{
              letterSpacing: "7.75px",
              fontSize: "45px",
              fontWeight: "600",
            }}
          >
            HI THERE!
          </h3>
          <div className="flex flex-col gap-5 font-light text-sm text-center justify-center items-center mt-10 mb-16">
            <p>Welcome to my portfolio website</p>
            <p>
              I&apos;m a multifaceted designer specializing in UX, architecture,
              and graphics. Passionate about human-centered design, I&apos;m on
              a journey to become Nigeria&apos;s top UX Designer. Explore my
              portfolio to see where creativity meets functionality in design.
            </p>
          </div>
          <Link
            href="/work"
            className="text-black font-semibold bg-yellow-500 px-6 py-3 rounded-3xl inline-block w-max hover:text-yellow-500 hover:bg-black transition"
            style={{ boxShadow: "0px 4px 28.8px 0px rgba(255, 193, 7, 0.36)" }}
          >
            View My Work
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
