import React from "react";

const Footer = () => {
  return (
    <footer className="bg-wh-900 text-wh-50 py-10 px-10">
      <div className="justify-between mx-auto gap-16 sm:flex">
        {/* FIRST COLUMN */}
        <div className="mt-16 basis-1/2 sm:mt-0">
          <h4 className="font-bold">BLOG OF THE FUTURE</h4>
          <p className="my-5">
            This website generate different context based on your input.
          </p>
          <p>© Blog of the Future All rights reserved.</p>
        </div>
        {/* SECOND COLUMN */}
        <div className="mt-16 basis-1/4 sm:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">subscribe</p>
          <p className="my-5">other tools</p>
          <p className="my-5">other projects</p>
        </div>
        {/* THIRD COLUMN */}
        <div className="mt-16 basis-1/4 sm:mt-0">
          <h4 className="font-bold">Comtact Us</h4>
          <p className="my-5">778-836-4350</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
