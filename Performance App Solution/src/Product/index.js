import React, { useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  background: rgb(254, 255, 255);
  box-sizing: border-box;
  padding: 1rem;
  box-shadow: rgb(0 0 0 / 10%) 0px 1px 3px 0px, rgb(0 0 0 / 6%) 0px 1px 2px 0px;
  margin: 1rem 0.5rem;
  border-radius: 10px;
`;

const Image = styled.img`
  width: 100%;
  object-fit: cover;
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Product = ({ product }) => {
  const { id, image, title, description, category, price } = product;
  return (
    <Container>
      <Image loading="lazy" src={image} alt="Product imahe" height="500" width="600" />
      <h2>{title}</h2>
      <p>{description}</p>
      <Flex>
        <p>{category}</p>
        <p>{price}</p>
      </Flex>
    </Container>
  );
};

export default Product;
