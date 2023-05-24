import { styled } from "styled-components";

export const LinksContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 42px;
  li {
    display: flex;
  }
  width: 100%;
`;

export const Form = styled.form`
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 70px;
  input {
    width: 70%;
  }
`;

export const HomeContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 60px;
  align-items: center;
`;
