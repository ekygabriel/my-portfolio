import React from "react";

export type ContactInputType = {
  name: string;
  label: string;
};
const ContactInput: React.FC<ContactInputType> = ({ name, label }) => {
  return (
    <div className="mb-6">
      <label htmlFor={name} className="font-medium">
        {label}
      </label>
      <input
        type="text"
        name={name}
        className="h-12 w-full border border-[#d9d9d9] mt-2 outline-none px-4"
      />
    </div>
  );
};

export default ContactInput;
