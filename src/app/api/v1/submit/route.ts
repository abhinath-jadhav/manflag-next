// pages/api/sendEmail.js
import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server.js";
import { NextApiRequest } from "next";

interface EmailData {
  to: string;
  subject: string;
  text: string;
  html: string;
}
export async function POST(req: Request, res: NextResponse) {
  if (req.method === "POST") {
    try {
      const body: EmailData = await req.json();
      console.log(body);
      await sendEmail(body.to, body.subject, body.text);
      return NextResponse.json({ status: 200, message: "success" });
    } catch (error) {}
  } else {
    // Method Not Allowed
  }
}

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
