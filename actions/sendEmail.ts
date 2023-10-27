"use server";

import { getErrorMessage, validateString } from "@/lib/utils";
import { Resend } from "resend";
import ContactFormEmail from "@/email/ContactFormEmail";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const name = formData.get("name");
  const sender = formData.get("sender");
  const message = formData.get("message");

  // validation
  if (!validateString(sender, 500)) {
    return {
      error: "invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "invalid message",
    };
  }

  let data;

  try {
    data = await resend.emails.send({
      from: "Personal Site <onboarding@resend.dev>",
      to: "mohammedjabbar019@gmail.com",
      subject: "Message From Your Personal Site",
      reply_to: sender as string,
      react: React.createElement(ContactFormEmail, {
        name: name as string,
        message: message as string,
        sender: sender as string,
      }),
    });
  } catch (error) {
    error: getErrorMessage(error);
  }

  return { data };
};
