"use client";

import { useFormStatus } from "react-dom";

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className={
        !pending
          ? "text-black font-semibold bg-yellow-500 px-6 py-3 ml-auto rounded-3xl inline-block w-max hover:bg-black hover:text-yellow-500 transition"
          : "bg-[#e5e5e5] cursor-not-allowed font-semibold px-6 py-3 rounded-3xl  ml-auto"
      }
      disabled={pending}
      style={
        !pending
          ? { boxShadow: "0px 4px 28.8px 0px rgba(255, 193, 7, 0.36)" }
          : {}
      }
    >
      {pending ? "Loading" : "Submit"}
    </button>
  );
};

export default SubmitButton;
