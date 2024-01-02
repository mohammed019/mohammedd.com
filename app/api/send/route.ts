import { getErrorMessage, validateString } from "@/lib/utils";
import { Resend } from "resend";
import ContactFormEmail from "@/email/ContactFormEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { name, sender, message } = await request.json();

  // validation
  if (!validateString(sender, 500)) {
    return Response.json({ error: "invalid sender email" });
  }
  if (!validateString(message, 5000)) {
    return Response.json({ error: "invalid message" });
  }

  let data;

  try {
    data = await resend.emails.send({
      from: "Personal@mohammedd.com",
      to: "mohammedjabbar019@gmail.com",
      subject: "Message From Your Personal Site",
      reply_to: sender as string,
      react: ContactFormEmail({
        name: name as string,
        message: message as string,
        sender: sender as string,
      }),
    });
  } catch (error) {
    error: getErrorMessage(error);
  }

  return Response.json({ data });
}
