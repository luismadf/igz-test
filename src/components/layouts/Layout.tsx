import React from "react";
import { Footer, Header } from "..";
import "./Layout.css";

const Layout: React.FC<any> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="screen__wrapper">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
