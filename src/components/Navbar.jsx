import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

const Nav = styled.div`
  width: 100%;
  height: 70px;
  border: 1px solid black;
  margin: auto;
  background-color: #6200ee;
  color: white;
  a {
    margin-top: 20px;
    margin-left: 30px;
    color: white;
  }
  .icon {
    width: 40px;
    float: right;
    height: 40px;
  }
  .icon:hover {
    cursor: pointer;
  }
`;
export const Navbar = () => {
  const NavLinks = [
    {
      name: "Home",
      to: "/",
    },
    {
      name: "mobiles",
      to: "/mobiles",
    },
    {
      name: "computers",
      to: "/computers",
    },
    {
      name: "Categories",
      to: "/category",
    },
  ];
  return (
    <Nav>
      {NavLinks.map((e) => (
        <Link to={e.to}>{e.name}</Link>
      ))}
      <div
        onClick={() => {
          console.log("bag cliked");
        }}
      >
        {" "}
        <ShoppingBagIcon className="icon" />
      </div>
    </Nav>
  );
};
