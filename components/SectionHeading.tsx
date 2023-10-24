import React from "react";

type ISectionHeading = {
  children: React.ReactNode;
};
export default function SectionHeading({ children }: ISectionHeading) {
  return <h2 className="text-3xl font-medium capitalize mb-8">{children}</h2>;
}
