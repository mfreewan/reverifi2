import React, { useState } from "react";
import styled from "styled-components";
import "tailwindcss/tailwind.css";
import products from "../assets/data/listings.json";
import closedImage from "../assets/images/closed.png";
import { IoLocationOutline } from "react-icons/io5";

const Container = styled.div`
  position: relative;
  max-width: 100%;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 1rem;
`;

const Grid = styled.div`
  display: flex;
  position:relative ;
  grid-template-columns: repeat(3, minmax(5%, 1fr));
  gap: 1rem;
  justify-content:center;
`;

const ListingCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  overflow: hidden;
  width:30%;
  height:33rem;

`;

const Image = styled.img`
  width: 100%;
  height: 22rem;
 
`;

const ClosedBadge = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
`;

const LocationBadge = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 40%;
  background-color: rgba(0, 0, 0, 0.2);
  color: white;
  padding: 0.25rem;
  display: flex;
  align-items: center;
  svg {
    margin-right: 0.5rem;
  }
`;

const Price = styled.h3`
  color: #32cd32; 
  font-size: 1.25rem;
  font-weight: bold;
`;

const Days = styled.p`
  color: #666;
`;

const Details = styled.div`
 
  justify-content: space-between;
  align-items: center;
  color: #666;
  margin-top: 0.75rem;
`;

const Button = styled.button`
  background-color: #32cd32; /* Lime Green */
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  border: none;
  cursor: pointer;
`;

const PrevButton = styled.button`
  position: absolute;
  left: 0%;
  top: 50%;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const NextButton = styled.button`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const ProductListing = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - itemsPerPage : 0
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsPerPage < products.length
        ? prevIndex + itemsPerPage
        : prevIndex
    );
  };

  return (
    <Container>
      <Title>Listings</Title>
      <Grid>
        {products.slice(currentIndex, currentIndex + 3).map((product) => (
          <ListingCard key={product.id}>
            <div style={{ position: "relative" }}>
              <Image src={product.image} alt={product.location} />
              {product.status === "closed" && (
                <ClosedBadge>
                  <img src={closedImage} alt="Closed" />
                </ClosedBadge>
              )}
              <LocationBadge>
                <IoLocationOutline />
                {product.location}
              </LocationBadge>
            </div>
            <div style={{ padding: "1rem" }}>
              <Price>{product.price}</Price>
              <Days>{product.daysOnMarket} days on reverifi</Days>
              <Details>
                <div>
                  <span>{product.beds}</span>
                  <span>{product.baths}</span>
                  <span>{product.sqft}</span>
                </div>
                <div>
                  <span>{product.reaction}</span>
                  <span>{product.views} views</span>
                </div>
              </Details>
              <Footer>
              <Button>View Listing</Button>
              </Footer>
            </div>
          </ListingCard>
        ))}
      </Grid>
      <PrevButton onClick={handlePrevious}>
        <svg width="15" height="41" viewBox="0 0 22 41" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 20.1277L19.0385 40.1842L22 36.8414L6.34615 20.1277L22 3.41403L19.0385 0.0712891L0 20.1277Z" fill="#B7CF53" />
        </svg>
      </PrevButton>
      <NextButton onClick={handleNext}>
        <svg width="15" height="41" viewBox="0 0 22 41" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 20.1277L2.96154 40.1842L0 36.8414L15.6538 20.1277L0 3.41403L2.96154 0.0712891L22 20.1277Z" fill="#B7CF53" />
        </svg>
      </NextButton>
    </Container>
  );
};

export default ProductListing;
