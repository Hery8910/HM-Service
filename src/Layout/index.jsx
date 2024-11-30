import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function Layout({ children }) {
  return (
    <div>
      <Navbar /> 
      <main style={{margin: "6rem auto"}}>{children}</main> 
      <Footer /> 
    </div>
  );
}

export default Layout;
