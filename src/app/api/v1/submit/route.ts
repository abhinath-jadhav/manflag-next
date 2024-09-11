// pages/api/sendEmail.js
import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server.js";
import { NextApiRequest } from "next";
import path from "path";
import fs from "fs";

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
  const filePath = path.resolve(
    process.cwd(),
    "public",
    "CV Abhinath Jadhav.pdf"
  );
  const fileContent = fs.readFileSync(filePath);
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
      attachments: [
        {
          filename: "CV Abhinath Jadhav.pdf", // Name of the file to be attached
          content: fileContent, // Path to the file
          contentType: "application/pdf", // MIME type of the file
        },
      ],
      to,
      subject: "Application for JAVA Developer | Abhinath Jadhav",
      html: `Hello,<br>I hope this email finds you well.<br>
      I am writing to express my interest in the Java Developer role.<br>
      Please check the details below and the attached CV.<br><br>
      <strong>Contact:</strong> 9503698655<br>
        <strong>Email:</strong> abhinath.jadhav@gmail.com<br>
        <strong>EXP:</strong> 5 years<br>
        <strong>LWD:</strong> 29th Oct<br>
        <strong>Tech Skills:</strong> Java, Spring Boot, microservices, React, JavaScript, AWS, Kafka<br><br>

        Thanks and regards,<br>
        Abhinath Jadhav`,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};
