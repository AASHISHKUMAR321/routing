import React from "react";
import styled from "styled-components";

const Banner = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 100px;
  border: 1px solid black;
  font-size: 50px;
  background-color: #6200ee;
  color: white;
`;
export const Baner = () => {
  const BannerData = [{ name: "20% Discount on Mobile " }];
  return <Banner>{BannerData.map((e) => e.name)}</Banner>;
};
