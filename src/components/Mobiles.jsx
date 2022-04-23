import styled from "styled-components";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Data = styled.div`
  display: block;
  a {
    color: black;
    display: block;
  }
`;
export const Mobiles = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:8080/mobiles`)
      .then((data) => setData(data.data));
  }, []);
  console.log(data);
  return (
    <Data>
      {data.map((e) => (
        <Link to={`/detailPage/${e.id}`}>{e.name}</Link>
      ))}
    </Data>
  );
};
