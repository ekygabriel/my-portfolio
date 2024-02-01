"use server";

import { revalidatePath } from "next/cache";
import SendEmail from "./utils/sendEmail";

export const submitForm = async (formData: FormData) => {
  const { name, phone, email, message } = Object.fromEntries(formData);

  const messageAsString = message as string;
  if (messageAsString?.length < 5) {
    throw new Error("Message must be more than 5 characters");
  }
  const testEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email as string
  );
  if (!testEmail) {
    throw new Error("Invalid email format.");
  }
  if (!name || !phone || !email) {
    throw new Error("Valid name, email and phone number required");
  }
  const res = await SendEmail({
    replyTo: email as string,
    html: `
      ${name}, with the phone number: ${phone} and email: ${email} sent you a message from your website. Here's the message... <br /> <br />

      <p>${message}</p>
    `,
  });

  revalidatePath("/contact");
  return res;
};
