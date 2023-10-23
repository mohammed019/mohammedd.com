import Image from "next/image";
import React from "react";
import mohammed from "@/public/mohammed2.jpg";

export const Intro = () => {
  return (
    <section>
      <div className="flex items-center justify-center">
        <div className="">
          <Image
            src={mohammed}
            alt="Mohammed Jabbar"
            width="192"
            height="192"
            quality="95"
            property="true"
          />
        </div>
      </div>
    </section>
  );
};
