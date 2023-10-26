import { links } from "./data";

export type ISection = (typeof links)[number]["name"];

export type IContactFormEmail = {
  name: string;
  message: string;
  sender: string;
};
