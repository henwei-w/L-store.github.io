import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

const Menu = styled.div`
  margin-top: 66px;
`;

const WpMenu = styled.div`
  width: 100%;
  height: 80px;
  background-color: rgb(245, 245, 245);
  position: fixed;

  & ul {
    display: flex;
    justify-content: space-around;
    max-width: 450px;
    height: 100%;
    margin: auto;
  }

  & li {
    font-size: 1.1rem;
    height: 100%;
    padding: 0px 10px;
    display: flex;
    align-items: center;

    &:hover {
      border-bottom: 3px solid black;
    }
  }

  & a {
    text-decoration: none;
    color: black;
  }
`;

const Block = styled.div`
  width: 100%;
  height: 80px;
`;

function ProductMenu(props) {
  const menuTitle = props.menu;
  const path = props.path;
  const params = useParams();

  return (
    <Menu>
      <WpMenu>
        <ul>
          {menuTitle.map((data, index) => (
            <Link key={index} to={`/${path}/${(params.type = data)}`}>
              <li>{data}</li>
            </Link>
          ))}
        </ul>
      </WpMenu>

      <Block />
    </Menu>
  );
}

export default ProductMenu;
