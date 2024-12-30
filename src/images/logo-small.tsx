// src/components/Logo.tsx
import React from "react";
import Image from "next/image";

const LogoSmall: React.FC = () => {
  return (
    <div className="flex justify-center items-center">
      <Image
        src={"/logo-mechano.png"}
        alt="Company Logo"
        width={200} // Set your desired width
        height={200} // Set your desired height
        className="rounded-md shadow-md"
      />
    </div>
  );
};

export default LogoSmall;
