import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const FooterDiv = styled.div`
  width: 100%;
  height: 300px;
  background-color: #6200ee;

  bottom: 0px;
  position: absolute;
  a {
    list-style: none;
    margin-top: 20px;
    color: white;
    display: block;
    text-decoration: none;
  }
`;

export const Footer = () => {
  const FooterLinks = [
    {
      name: "About Us",
      to: "/about",
    },
    {
      name: "FAQ",
      to: "/faq",
    },
    {
      name: "Contact Us",
      to: "/contact",
    },
  ];
  return (
    <FooterDiv>
      {FooterLinks.map((e) => (
        <Link to={e.to}>{e.name}</Link>
      ))}
    </FooterDiv>
  );
};
