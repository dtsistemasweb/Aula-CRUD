import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: aliceblue;
  align-items: center;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  height: 100px;
  align-items: center;
  justify-content: center;
  width: 80%;
`;

export const Title = styled.text`
  color: #323232;
  font-size: 1.5rem;
  font-weight: bold;
`;

export const Body = styled.div`
  display: flex;
  margin-top: 30px;
  width: 80%;
  background-color: beige;
  min-height: 500px;
`;

export const ContainerArticle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const CardArticle = styled.section`
  display: flex;
  height: 150px;
  width: 100%;
  align-items: center;
  background-color: red;
`;

export const Thumbnail = styled.img`
  height: 100px;
`;

export const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const TitleArticle = styled.text`
  color: #fff;
  font-size: 1.8rem;
  font-weight: bold;
`;

export const Description = styled.text`
  color: #fff;
  font-size: 1.5rem;
`;

export const BodyArticle = styled.div`
  display: flex;
`;

export const BodyText = styled.text`
  color: #fff;
  font-size: 1.2rem;
`;

export const ContainerEdit = styled.div``;

export const Icon = styled.div`
  cursor: pointer;
`;
