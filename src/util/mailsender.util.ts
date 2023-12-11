// sendEmail.js
import nodemailer from "nodemailer";

const sendEmail = async (to: string, subject: string, text: string) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "jabhinath1995@gmail.com", // Replace with your Gmail email address
        pass: "yibhuxmzphogtmjl", // Replace with your Gmail password or an app-specific password
      },
    });

    const mailOptions = {
      from: "jabhinath1995@gmail.com",
      to,
      subject,
      text,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

export default sendEmail;
