import { IContactFormEmail } from "@/lib/types";
import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

export default function ContactFormEmail({
  name,
  message,
  sender,
}: IContactFormEmail) {
  return (
    <Html>
      <Head />
      <Preview>New Message from Your Personal Website</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="bg-white border-black my-10 px-10 py-4 rounded-lg shadow-lg">
              <Heading className="leading-tight">
                New Message from `{name}`
              </Heading>
              <Text>{message}</Text>
              <Hr />
              <Text>The sender's email is: {sender}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
