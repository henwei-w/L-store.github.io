import styled from "styled-components";

const Background = styled.div`
  padding: 30px;
`;

const Wrap = styled.div`
  max-width: 680px;
  margin: auto;
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;

  & a {
    text-decoration: none;
    color: black;
    margin-bottom: 15px;
    padding: 10px 0px;
    border-bottom: 1.5px solid white;

    &:hover {
      color: black;
      border-bottom: 1.5px solid black;
    }

    &:active {
      color: black;
      border-bottom: 1.5px solid black;
    }
  }
`;

function ImageSource() {
  return (
    <Background>
      <Wrap>
        <a href="https://www.freepik.com/photos/high-resolution">
          High resolution photo created by rawpixel.com - www.freepik.com
        </a>
        <a href="https://www.freepik.com/photos/women-clothes">
          Women clothes photo created by bristekjegor - www.freepik.com
        </a>
        <a href="https://www.freepik.com/photos/t-shirt-label">
          T shirt label photo created by Vectonauta - www.freepik.com
        </a>
        <a href="https://www.freepik.com/psd/apparel-mockup">
          Apparel mockup psd created by graphicheroco - www.freepik.com
        </a>
        <a href="https://www.freepik.com/photos/luxury-woman">
          Luxury woman photo created by lookstudio - www.freepik.com
        </a>
        <a href="https://www.freepik.com/photos/garments">
          Garments photo created by wirestock - www.freepik.com
        </a>
        <a href="https://www.freepik.com/photos/personal-shopper">
          Personal shopper photo created by freepik - www.freepik.com
        </a>
        <a href="https://www.freepik.com/free-photo/portrait-young-woman-casual-clothes-with-blonde-dyed-hair-gently-smiling-during-pleasant-conversation-standing-closed-posture_9116595.htm#page=14&query=clothes&position=0&from_view=search">
          Image by cookie_studio
        </a>
        <a href="https://www.freepik.com/free-photo/young-woman-exercising-sportswear-isolated-studio_21000035.htm#page=14&query=clothes&position=39&from_view=search">
          Image by senivpetro
        </a>
        <a href="https://www.freepik.com/free-photo/full-length-portrait-handsome-serious-man_8076854.htm?query=clothes">
          Image by drobotdean
        </a>
        <a href="https://www.freepik.com/free-photo/fashionable-dark-haired-girl-vintage-denim-skirt-playfully-posing-indoor-portrait-enthusiastic-brunette-lady-isolated-with-smile_11366133.htm#query=pants&position=38&from_view=search">
          Image by lookstudio
        </a>
        <a href="https://www.freepik.com/free-photo/portrait-cute-little-kid-boy-stylish-jeans-clothes-looking-camera-against-white-studio-wall-kids-fashion-concept_11313863.htm#query=clothes&position=44&from_view=search">
          Image by master1305
        </a>
        <a href="https://www.freepik.com/free-photo/portrait-cute-little-kid-boy-stylish-jeans-clothes-looking-camera-against-white-studio-wall-kids-fashion-concept_11313863.htm#query=clothes&position=0&from_view=search">
          Image by master1305
        </a>
      </Wrap>
    </Background>
  );
}

export default ImageSource;
