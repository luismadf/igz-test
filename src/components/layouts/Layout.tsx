import React from "react";
import { Header } from "..";
import "./Layout.css";

const Layout = ({ children }: any) => {
  return (
    <>
      <Header />
      <main className="screen__wrapper">{children}</main>
      <footer>Footer</footer>
    </>
  );
};

export default Layout;
