import React from "react";

import Home from "../Pages/Home";
import About from "../Pages/About";
import Services from "../Pages/Services";
import Contact from "../Pages/Contact";
import PrivacyPolicy from "../Pages/PrivacyPolicy";
import TermsOfService from "../Pages/TermOfService";
import { Route, Routes } from "react-router-dom";

export default function AppRoutes() {
  return (
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
      </Routes>
  );
}
