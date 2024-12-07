import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <main style={{ marginTop: "5rem"}}>
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
