import Image from "next/image";
import Modal from "./index";
import { EkomThanks, Thanks, ThanksMobile } from "@/app/assets";
import Link from "next/link";

const NotificationModal = ({
  // show,
  close,
}: {
  // show: boolean;
  close: () => void;
}) => {
  return (
    <Modal
      close={close}
      // show={show}
    >
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
          <button
            onClick={close}
            className="bg-yellow-500 py-3 px-6 rounded-3xl font-semibold w-max hover:bg-black hover:text-yellow-500 transition gap-2 items-center hidden md:flex"
            style={{
              boxShadow: "0px 4px 28.8px 0px rgba(255, 193, 7, 0.36)",
              position: "absolute",
              bottom: "100px",
              right: "70px",
            }}
          >
            Continue
          </button>
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
          <button
            onClick={close}
            className="bg-yellow-500 py-3 px-6 rounded-3xl font-semibold w-max hover:bg-black hover:text-yellow-500 transition flex gap-2 items-center -ml-20 md:hidden"
            style={{
              boxShadow: "0px 4px 28.8px 0px rgba(255, 193, 7, 0.36)",
              position: "absolute",
              bottom: "50%",
              right: "40%",
            }}
          >
            Continue
          </button>
        </figure>
      </div>
    </Modal>
  );
};

export default NotificationModal;
