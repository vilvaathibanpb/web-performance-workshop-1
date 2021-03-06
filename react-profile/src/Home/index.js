import React, { Suspense, useEffect, useState } from "react";
import Product from "../Product";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Banner = React.lazy(() => import("./Banner"));

const HomeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  background: #e1e1e1;
  padding: 30px 15%;
  box-sizing: border-box;
  width: 100%;
`;

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  return (
    <>
      <Suspense fallback={<div style={{}}> Loading... </div>}>
        <Banner />
        <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1650&q=80" />
      </Suspense>
      <HomeContainer>
        {products.map((product) => (
          <Link to="/details" >
            <Product key={product.id} product={product} />
          </Link>
        ))}
      </HomeContainer>
    </>
  );
};

export default Home;
