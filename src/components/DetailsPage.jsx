import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Card = styled.div`
  width: 400px;
  height: 500px;
  border: 1px solid green;
  margin: auto;
`;
export const DetailsPage = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/mobiles/${id}`)
      .then((data) => setData(data.data));
  }, []);
  console.log(data);
  return (
    <Card>
      <div>
        <span>{data.name}</span>
        <img src={data.imageUrl} alt="" />
        <p>{data.snippet}</p>
      </div>
      <button>Add to Cart</button>
    </Card>
  );
};
