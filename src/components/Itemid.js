import React, {useEffect, useState, Component} from "react";
import styled from 'styled-components'
import {device} from '../styles/Devices'
import { useMemo } from "react";
import {
  useParams,
  useLocation,
  useHistory,
  useRouteMatch,
} from "react-router-dom";
import variable from '../data/houses.json'

const DetailItemWrapper = styled.div`
  display: grid;
  padding: 50px 0;
  overflow: hidden;
  justify-content: center;
  justify-self: center;

  @media ${device.s} {
    padding: 10px 0px;
  }
`;

const Item = styled.div`
    display: grid;
    grid-row-gap: 30px;
    padding: 50px 50px;
    border: 1px solid white;
    border-radius: 10px;
    overflow: hidden;

    span {
      padding-bottom: 5px;
    }

    @media ${device.landscapeTablets} {
      width: 850px;
    }

    @media ${device.tablets}{
      width: 650px;
    }

    @media ${device.sm} {
      width: 420px;
      padding: 15px 15px;
    }

    @media ${device.s}{
      width: 280px;
      padding: 10px 10px;
    }
`;

const TextWrapper = styled.div`
    display: grid;

    @media ${device.sm},${device.s} {
      order: 2;
    }
`;

const ImgWrapper = styled.div`
    display: grid;
    padding-left: 70px;

    img {
      width: 500px;
    }

    @media ${device.tablets} {
      img {
        width: 350px;
      }
    }

    @media ${device.sm}{
      img {
        width: 420px;
      }
    }

    @media ${device.s}{
      img {
        width: 280px;
      }
    }

    @media ${device.sm},${device.s} {
      padding-left: 0;
      order: 1;
      padding-bottom: 15px;
    }
`;

const Desc = styled.div`
    display: grid;
`;

const FirstRow = styled.div`
    display: grid;
    grid-template-columns: repeat(2,1fr);

    @media ${device.sm}, ${device.s}{
      grid-template-columns: 1fr;
    }
`;

function DetailItem (){
    const [itemDetail, setItem] = useState([]);
    // const router = useRouter();
    // const itemCompare = router.query.itemid;
    // const startItemIndex = parseInt(itemCompare);
    // const endItemIndex = startItemIndex + 1;

    // useEffect(() => {
    //     setItem(variable.slice(startItemIndex, endItemIndex));
    //   });

    return (
        <DetailItemWrapper>
        {itemDetail.map(item => <Item key={item.price}>
          <FirstRow>
          <TextWrapper>
                <span>City: {item.address.city}</span>
                <span>Street: {item.address.street}</span>
                <span>State: {item.address.state}</span>
                <span>Square: {item.square} ft² </span>
                <span>Garage: {item.garage}</span>
                <span>Bedrooms: {item.bedrooms}</span>
                <span>Builder: {item.builder}</span>
                <span>Product: {item.product}</span>
                <span>Phone: {item.phone}</span>
                <span>Price: {item.price} $</span>
          </TextWrapper>
          <ImgWrapper>
                <img src={item.images}></img>
          </ImgWrapper>
          </FirstRow>
          <Desc><span>Description: {item.description}</span></Desc>
            </Item> )}
          </DetailItemWrapper>
    )
}

export default DetailItem
