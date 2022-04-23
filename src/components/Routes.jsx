import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { About } from "./About";
import { Mobiles } from "./Mobiles";
import { Computers } from "./Computers";
import { Categoary } from "./Categoary";
import { Contact } from "./Contact";
import { Faq } from "./Faq";
import { DetailsPage } from "./DetailsPage";
import { NotFound } from "./NotFound";

export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/mobiles" element={<Mobiles />} />
        <Route path="/computers" element={<Computers />} />
        <Route path="/category" element={<Categoary />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/detailPage/:id" element={<DetailsPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
