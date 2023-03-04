import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";

const CustomCarousel = styled(Carousel)`
  margin-top: 66px;
  margin-bottom: 25px;
`;

const CustomItem = styled(Carousel.Item)`
  width: 100vw;
  max-height: calc(85vh - 66px);

  & img {
    width: 100%;
    height: 100%;
    filter: brightness(80%);
  }
`;

const CustomCaption = styled(Carousel.Caption)`
  text-align: start;
  width: 100%;
  height: 100%;
  position: absolute;

  & span {
    font-size: 1.2rem;
  }

  & p {
    font-size: 1.5rem;
    line-height: 2.2rem;
  }

  ${(props) =>
    props.first &&
    css`
      top: 20%;
      left: 58%;
      color: lightgray;
    `}
  ${(props) =>
    props.second &&
    css`
      top: 15%;
      left: 10.5%;
      color: black;
    `}
  ${(props) =>
    props.third &&
    css`
      top: 20%;
      left: 65%;
      right: 0%;
      color: black;
    `}
`;

function Banner() {
  return (
    <CustomCarousel>
      <CustomItem interval={5000}>
        <Link to="#">
          <img
            src={process.env.PUBLIC_URL + "/image/banner-img-1.jpg"}
            className="d-block"
            alt="..."
          />
          <CustomCaption first="true">
            <p>
              特級彈性丹寧系列
              <br />
              <span>舒適彈性不悶熱</span>
            </p>
          </CustomCaption>
        </Link>
      </CustomItem>

      <CustomItem interval={5000}>
        <Link to="/Product_detail/women/83">
          <img
            src={process.env.PUBLIC_URL + "/image/banner-img-2.jpg"}
            className="d-block"
            alt="..."
          />
          <CustomCaption second="true">
            <p>
              休閒西裝外套
              <br />
              <span>NT$ 1490</span>
            </p>
          </CustomCaption>
        </Link>
      </CustomItem>

      <CustomItem interval={5000}>
        <Link to="/Product_detail/men/99">
          <img
            src={process.env.PUBLIC_URL + "/image/banner-img-3.jpg"}
            className="d-block"
            alt="..."
          />
          <CustomCaption third="true">
            <p>
              輕薄休閒襯衫
              <br />
              <span>NT$ 790</span>
            </p>
          </CustomCaption>
        </Link>
      </CustomItem>
    </CustomCarousel>
  );
}

export default Banner;
