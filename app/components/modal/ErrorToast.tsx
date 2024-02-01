"use client";

import { useEffect } from "react";

import { IoCloseCircleSharp } from "react-icons/io5";

const ErrorToast = ({
  message,
  close,
}: {
  message: string;
  close: () => void;
}) => {
  useEffect(() => {
    let timer = setTimeout(() => {
      close();
    }, 70000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="fixed flex flex-col gap-2 items-center justify-center top-[70px] max-w-[350px] min-w-[250px] p-2 text-center right-4 bg-[#fee2e2] text-[#991b1b] z-50 pt-6 rounded-2xl">
      <IoCloseCircleSharp
        className="cursor-pointer text-[#991b1b] text-4xl"
        onClick={close}
      />
      <p>{message}</p>
    </div>
  );
};

export default ErrorToast;