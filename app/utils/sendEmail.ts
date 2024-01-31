import Nodemailer from "nodemailer";

//  await SendEmail({
//    from: process.env.EMAIL_USER,
//    html: `
//           <h3>Password Reset</h3>
//           <p> You received this email because you are trying to reset the password of one of your staff with the email "${email}". Click on this <a href="${resetURL}" target="__blank">LINK</a> to reset the password. THIS EXPIRES IN 10 MINUTES. If you did not initiate this, contact the developer of this site.</p>
//         `,
//    subject: "Password Reset for " + email,
//    to: process.env.EMAIL_USER,
//  });

// interface SendEmailProps {
//   from: string;
//   to: string;
//   subject: string;
//   html: string;
// }
interface SendEmailProps {
  replyTo: string;
  html: string;
}

const SendEmail = async ({ html, replyTo }: SendEmailProps) => {
  // you can add reply_to as the fifth arg
  const transporter = Nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    // port: 587,
    secure: false,
    service: process.env.EMAIL_SERVICE,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    // This is to prevent email failure
    // tls: {
    //   rejectUnauthorized: false,
    // },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: "You have a new message from your website.",
    html,
    reply_to: replyTo,
  };

  try {
    const data = await transporter.sendMail(mailOptions);
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};

export default SendEmail;
