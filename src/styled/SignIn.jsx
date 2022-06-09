import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Body = styled.div`
  display: flex;
  width: 70%;
  flex-direction: column;
`;

export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  display: flex;
  padding: 10px;
  margin-bottom: 10px;
`;

export const ContainerButton = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Button = styled.div`
  margin-top: 10px;
  padding: 10px;
  background-color: #ccc;
  border-radius: 5px;
  cursor: pointer;
`;

export const TextLogin = styled.text``;

export const Text = styled(Link)`
  cursor: pointer;
  font-size: 1rem;
  text-decoration: none;
  :visited {
    color: #000;
  }
`;
