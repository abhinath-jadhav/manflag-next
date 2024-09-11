export const sendEmail = async (data: FormData) => {
  const response = await fetch("/api/v1/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      to: data.email,
      subject: "Application for JAVA developer | Abhinath Jadhav",
      text:   "Hello,\n
              I hope this email finds you well.\n
              I am writing to express my interest in java developer role.\n
              Please check the details below and the attached CV.\n
              
              Contact: 9503698655\n
              EXP: 6 year\n
              LWD: 29th Oct\n
              Tech Skills: Java, Springboot, microservices, React, Javascript, AWS, Kafka\n
              CTC: 18LPA\n
              ECTC: 23LPA\n
              
              Thanks and regards\n
              Abhinath Jadhav"
    }),
  });

  if (response.ok) {
    alert("Email sent successfully");
  } else {
    alert("Failed to send the email");
  }
};

export interface FormData {
  firstName: string;
  lastname: string;
  email: string;
  contact: string;
  message: string;
}
