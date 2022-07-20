import React, {useEffect, useState, useMemo} from "react";
import styled from 'styled-components'
import {colorBase} from '../styles/Theme'
import {device} from '../styles/Devices'
import variable from '../data/houses.json'
import {Link} from 'react-router-dom';
const CenteredContainer = styled.div`
  display: grid;
  justify-content: center;

  h2 {
    justify-self: center;
  }
`;

const SortingWrapper = styled.div`
  display: flex;
  margin-bottom: 25px;

  @media ${device.sm}, ${device.s} {
    overflow-x: scroll;
    width: auto;
    white-space: nowrap;
  }

  @media ${device.tablet} {
    justify-self: center;
  }
`;
const SortingItem = styled.div`

  button {
    padding: 5px 15px 5px 15px;
    font-size: 16px;
    box-shadow: 0px 0px 10px #575252;
  }

  button:focus {
    background: #8f8f8f;
    color: ${colorBase.fontColor};
  }

  padding-left: 10px;

  :first-child{
    padding-left: 0px;
  }

  @media ${device.sm}, ${device.s} {
    padding-bottom: 10px;
  }
`;

const GridWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  grid-template-columns: repeat(4,1fr);
  grid-row-gap: 30px;
  grid-column-gap: 15px;
  width: 1000px;
  height: 100vh;
  padding-bottom: 15px;

  @media ${device.landscapeTablets} {
    width: 900px;
  }

  @media ${device.tablet} {
    grid-template-columns: repeat(3,1fr);
    width: 700px;
  }

  @media ${device.sm} {
    grid-template-columns: repeat(2,1fr);
    grid-template-rows: auto;
    width: 440px;
    justify-self: center;
  }

  @media ${device.s} {
    grid-template-columns: 1fr;
    width: 280px;
    justify-self: center;
  }
`;

const Card = styled.div`
  display: grid;
  border: 1px solid white;
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0px 0px 10px #575252;

  img {
    width: 100%;
    height: 150px;
    object-fit: cover;
  }

  button {
    width: 100%;
    margin-top: 10px;
    padding: 5px 0 5px 0;
    font-weight: 600;
    font-size: 14px;
  }
`;

const Price = styled(GridWrapper)`
`;

const NextComp = styled.div`
  button {
    background: transparent;
    position: fixed;
    bottom: 50%;
    right: 0;
    width: 200px;

    @media ${device.l}{
      width: 130px;
    }

    @media ${device.landscapeTablets}{
      width: 90px;
    }
    @media ${device.tablet}{
      width: 70px;
    }
    @media ${device.sm},${device.s}{
      width: 50px;
    }
  }
  button:hover {
    background: transparent;
  }
`;

const PrevComp = styled.div`
button {
  background: transparent;
  position: fixed;
  bottom: 50%;
  left: 0;
  width: 200px;

  @media ${device.l}{
    width: 130px;
  }

  @media ${device.landscapeTablets}{
    width: 90px;
  }

  @media ${device.tablet}{
    width: 70px;
  }

  @media ${device.sm},${device.s}{
    width: 50px;
  }
}
button:hover {
  background: transparent;
}

img {
  transform: rotate(180deg);
}

`;

export default function Listings() {

  const [listings, setListings] = useState([]);
  const [main, setMain] = useState(listings);

  const sortedByPrice = useMemo(()=>{
    return [...main].sort((a,b) => a.price - b.price)
  }, [main])

  let [currentPage, setCurrentPage] = useState(1);
  const totalItems = 500;
  const pageSize = 20;
  let [startIndex, incrementStartIndex] = useState(0);
  let [endIndex, incrementEndIndex] = useState(20);
  const maxPages = 25;
  let totalPages = Math.ceil(totalItems / pageSize);

useEffect(() => {
 setMain(variable.slice(startIndex, endIndex));
}, [currentPage]);


  if (currentPage < 1) {
        currentPage = 1;
    } else if (currentPage > totalPages) {
        currentPage = totalPages;
    }

    let startPage; let endPage;

    if (totalPages <= maxPages) {
        startPage = 1;
        endPage = totalPages;
    } else {
        let maxPagesBeforeCurrentPage = Math.floor(maxPages / 2);
        let maxPagesAfterCurrentPage = Math.ceil(maxPages / 2) - 1;
        if (currentPage <= maxPagesBeforeCurrentPage) {
            startPage = 1;
            endPage = maxPages;
        } else if (currentPage + maxPagesAfterCurrentPage >= totalPages) {
            startPage = totalPages - maxPages + 1;
            endPage = totalPages;
        } else {
            startPage = currentPage - maxPagesBeforeCurrentPage;
            endPage = currentPage + maxPagesAfterCurrentPage;
        }
    }

    const NextClick = () => {
      setMain(main);
      incrementStartIndex(startIndex + 20);
      incrementEndIndex(endIndex + 20);
      setCurrentPage(currentPage + 1);
    }
    const PreviousClick = () => {
      setMain(main);
      incrementStartIndex(startIndex - 20);
      incrementEndIndex(endIndex - 20);
      setCurrentPage(currentPage - 1);
    }


  return (
    <div>
      <head>
        <title>Houses for Sale</title>
      </head>
      <PrevComp>
            <Link to="/pages">
              <button onClick={PreviousClick}><img src="/icons/arrow-right.svg"></img></button>
            </Link>
      </PrevComp>
      <CenteredContainer>
          <h2>Houses for Sale</h2>
          <SortingWrapper>
            <SortingItem><button onClick={() => setMain(sortedByPrice)}>Price: Low to High</button></SortingItem>
            <SortingItem><button onClick={() => setMain(sortedByPrice.reverse())}>Price: High to Low</button></SortingItem>
          </SortingWrapper>
          <GridWrapper>
            <Price>
                {main.map(item => <Card key={item.price}>
                    <span>City: {item.address.city}</span>
                    <span>Street: {item.address.street}</span>
                    <span>Square: {item.square} ft² </span>
                    <span>Product: {item.product}</span>
                    <span>Price: {item.price} $</span>
                    <img src={item.images}></img>
                    <a href={{pathname: '/itemid', query: {itemid: item.id}}}>
                      <button>View more</button>
                    </a>
                </Card> )}
            </Price>
          </GridWrapper>
      </CenteredContainer>
      <NextComp>
        <Link to="/pages">
          <button onClick={NextClick}><img src="/icons/arrow-right.svg"></img></button>
        </Link>

      </NextComp>
    </div>
  )
}
