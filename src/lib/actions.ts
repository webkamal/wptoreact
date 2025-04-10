"use server";

import { Resend } from "resend";
import { ReactElement } from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: {
  name: string;
  email: string;
  message: string;
}) {
  try {
    const { data, error } = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL || "your-email@example.com",
      subject: `New message from ${formData.name}`,
      reply_to: formData.email,
      text: formData.message,
      html: `<p>${formData.message}</p>`,
    });

    if (error) {
      return { error: error.message };
    }

    return { success: true };
  } catch (error) {
    return { error: "Failed to send email" };
  }
}
