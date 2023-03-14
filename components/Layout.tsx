import React from "react";

import { Navbar } from "./Navbar";

type Props = {
  children: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      <div className="grid justify-center">{children}</div>
    </>
  );
};
