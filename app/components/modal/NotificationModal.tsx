import Image from "next/image";
import Modal from "./index";
import { EkomThanks, Thanks, ThanksMobile } from "@/app/assets";
import Link from "next/link";

const NotificationModal = () => {
  return (
    <Modal>
      {/* <div className="flex flex-col md:flex-row items-center justify-center">
        <figure className="relative md:-ml-24 order-1 md:order-none w-[250px] h-[250px] md:w-[700px] md:h-[300px] -mt-7 md:mt-0">
          <Image
            src={EkomThanks}
            alt=""
            fill
            style={{ objectFit: "contain" }}
          />
        </figure>
        <div>
          <h4
            className="uppercase font-bold text-xl sm:text-3xl mb-4 mx-auto lg:mx-0 text-center lg:text-right "
            style={{ letterSpacing: "7.5px" }}
          >
            Thank you for reaching out!
          </h4>
          <div className="text-center md:text-right flex flex-col items-center md:items-end gap-6">
            <p>
              Your message has been successfully sent. I&apos;ll get back to you
              as soon as possible. In the meantime, feel free to continue
              exploring my portfolio.
            </p>
            <p>Have a great day!</p>
            <Link
              href="/"
              className="bg-yellow-500 py-3 px-6 rounded-3xl font-semibold w-max hover:bg-black hover:text-yellow-500 transition flex gap-2 items-center"
              style={{
                boxShadow: "0px 4px 28.8px 0px rgba(255, 193, 7, 0.36)",
              }}
            >
              Continue
            </Link>
          </div>
        </div>
      </div> */}
      <div
        className="max-w-[1000px] mx-auto fixed z-20"
        style={{ top: "50%", left: "50%", transform: "translate(-50%,-50%)" }}
      >
        <figure className="w-[1000px] h-[650px] md:w-[900px] md:h-[550px] mx-auto relative p-4 -ml-16 mt-20">
          <Image
            src={Thanks}
            alt=""
            sizes="100vw"
            fill
            style={{ objectFit: "contain" }}
            draggable={false}
            className="hidden md:block"
          />
          {/* FOr desktop */}
          <Link
            href="/"
            className="bg-yellow-500 py-3 px-6 rounded-3xl font-semibold w-max hover:bg-black hover:text-yellow-500 transition gap-2 items-center hidden md:flex"
            style={{
              boxShadow: "0px 4px 28.8px 0px rgba(255, 193, 7, 0.36)",
              position: "absolute",
              bottom: "100px",
              right: "70px",
            }}
          >
            Continue
          </Link>
          <Image
            src={ThanksMobile}
            alt=""
            sizes="100vw"
            fill
            style={{ objectFit: "contain" }}
            draggable={false}
            className="md:hidden"
          />
          {/* For mobile */}
          <Link
            href="/"
            className="bg-yellow-500 py-3 px-6 rounded-3xl font-semibold w-max hover:bg-black hover:text-yellow-500 transition flex gap-2 items-center -ml-20 md:hidden"
            style={{
              boxShadow: "0px 4px 28.8px 0px rgba(255, 193, 7, 0.36)",
              position: "absolute",
              bottom: "50%",
              right: "40%",
            }}
          >
            Continue
          </Link>
        </figure>
      </div>
    </Modal>
  );
};

export default NotificationModal;
