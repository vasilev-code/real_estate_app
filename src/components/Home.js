import styled from 'styled-components'
import {Link} from 'react-router-dom';

const MainWrapper = styled.section`
  display: grid;
  justify-content: center;
  align-content: center;
  min-height: 100vh;
`;

const ContentWrapper = styled.div`
  display: grid;
  animation: move 3.0s linear reverse 1, dynamicTransparent 5.0s linear reverse 1;

  img {
    box-shadow: 0px 0px 10px #575252;
    width: 200px;
    height: 200px;
    border-radius: 50%;
  }

  h2, p {
    justify-self: center;
  }

  @keyframes move {
    100% {
      transform: translateX(-200px);
    }
  }
  @keyframes dynamicTransparent {
    from {
      opacity: 1.0;
    }
    50% {
      opacity: 0.5;
    }
    to {
      opacity: 0.1;
    }
  }
`

export default function Home() {
  return (
    <div>
      <head>
        <title>Real Estate App</title>
      </head>
      <MainWrapper>
        <ContentWrapper>
        <h2>Real Estate App</h2>
        <p>
          Here are available <Link to="/listings">listings</Link>.
        </p>
        <img src='/images/house.jpg'></img>
        </ContentWrapper>
      </MainWrapper>

    </div>
  )
}
