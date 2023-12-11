export const sendEmail = async (data: FormData) => {
  const response = await fetch("/api/v1/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      to: "abhinath.jadhav18@gmail.com",
      subject: "Test",
      text: `Name : ${data.firstName} ${data.lastname} \nContact: ${data.contact} \nEmail: ${data.email} \nMessage: ${data.message}`,
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
