import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import MetaDescription from "../Components/MetaDescription";
import ScrollToTop from "../Components/ScrollTop";

function Layout({ children }) {
  return (
    <>
      <MetaDescription />
      <ScrollToTop />
      <Navbar />
      <main style={{ marginTop: "5rem" }}>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
