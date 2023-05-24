import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const LinkStyle = styled(Link)`
  color: ${(props) => (props.selected ? "#5d9040" : "#9c9c9c")};
  text-decoration: none;
`;

export const MenuBar = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  h2 {
    color: #5d9040;
  }
  ul {
    display: flex;
    gap: 22px;
  }
`;

export const Title = styled.div`
  display: flex;
`;

export const Header = styled.header`
  display: flex;
  gap: 20px;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 69px 0 87px;
  h1 {
    font-weight: 200;
    font-size: 64px;
    line-height: 80px;
  }
`;
