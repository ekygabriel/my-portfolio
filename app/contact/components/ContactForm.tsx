import React from "react";
import ContactInput from "./ContactInput";
import BackButton from "./BackButton";
import ContactTextArea from "./ContactTextArea";

const formData = [
  {
    name: "Name",
    label: "Name",
  },
  {
    name: "phone",
    label: "Phone Number",
  },
  {
    name: "email",
    label: "Email Address",
  },
  {
    name: "message",
    label: "Leave Your Message",
  },
];
const ContactForm = () => {
  return (
    <form action="#">
      {formData.map((item) =>
        item.name !== "message" ? (
          <ContactInput key={item.name} {...item} />
        ) : (
          <ContactTextArea key={item.name} {...item} />
        )
      )}
      <div className="flex justify-end mt-10">
        <div className="md:hidden">
          <BackButton />
        </div>
        <button
          type="submit"
          className="text-black font-semibold bg-yellow-500 px-6 py-3 ml-auto rounded-3xl inline-block w-max hover:bg-black hover:text-yellow-500 transition"
          style={{ boxShadow: "0px 4px 28.8px 0px rgba(255, 193, 7, 0.36)" }}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
