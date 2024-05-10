import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";

const Footer = () => {
  return (
    <footer className=" h-14 w-full border-t border-gray-200 bg-white/75">
      <MaxWidthWrapper>
        <div className="flex justify-between items-center py-5">
          <p className="text-xs text-center w-full">
            Build by <span className="text-green-600">Hermawan Hantanto</span>
          </p>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
