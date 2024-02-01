"use client";

import { useRouter } from "next/navigation";
import { MdOutlineArrowBack } from "react-icons/md";

const BackButton = ({ className }: { className?: string }) => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className={
        "flex gap-3 ml-10 items-center bg-white py-3 px-6 rounded-3xl border border-[#d9d9d9] " +
        className
      }
    >
      <MdOutlineArrowBack />
      Back
    </button>
  );
};

export default BackButton;
