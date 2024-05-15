import React from "react";
import { Link } from "react-router-dom";

export const Topbar = () => {
  return (
    <section className="topbar">
      <div className="flex-between py-4 px-5">
        <Link to="/" className="flex gap-3 items-center">
          <img
            src="../../../public/assets/images/logo.svg"
            width={130}
            height={325}
            alt="logo"
          />
        </Link>
      </div>
    </section>
  );
};
