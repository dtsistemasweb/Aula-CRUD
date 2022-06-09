import React, { useEffect, useState } from "react";
import {
  Body,
  CardArticle,
  Container,
  ContainerArticle,
  Header,
  Title,
  Thumbnail,
  TitleArticle,
  Description,
  BodyArticle,
  BodyText,
  CardInfo,
  ContainerEdit,
  Icon,
} from "../styled/Home";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import { UseDataContext } from "../context/context";
import ModalPage from "../components/Modal";

export default function HomePage() {
  const {
    auth,
    user,
    handleLogout,
    article,
    handleDelete,
    handleArticlesResult,
  } = UseDataContext();
  const [edit, setEdit] = useState(false);
  const [data, setData] = useState();

  async function Deletar(item) {
    const response = await handleDelete(item.id);

    if (response.status === 200) {
      const dados = await handleArticlesResult();
    }
  }

  function Editar(item) {
    setEdit(!edit);
    setData(item);
  }

  useEffect(() => {}, [auth, article]);

  return (
    <Container>
      <Header>
        <Title>Seja Bem Vindo!</Title>
        <Title style={{ color: "blue " }}>{user}</Title>
        <Title>CRUD</Title>
      </Header>
      <Body>
        <ContainerArticle>
          {article.map((item, i) => (
            <CardArticle key={i}>
              <Thumbnail src={item.thumbnail} />
              <CardInfo>
                <TitleArticle>{item.title}</TitleArticle>
                <Description>{item.description}</Description>
                <BodyArticle>
                  <BodyText>{item.body}</BodyText>
                </BodyArticle>
              </CardInfo>
              <ContainerEdit>
                <Icon>
                  <FontAwesomeIcon
                    icon={faPencil}
                    onClick={() => Editar(item)}
                  />
                </Icon>
                <Icon>
                  <FontAwesomeIcon
                    icon={faTrash}
                    onClick={() => Deletar(item)}
                  />
                </Icon>
              </ContainerEdit>
            </CardArticle>
          ))}
        </ContainerArticle>
      </Body>
      <div style={{ display: "flex", gap: "10px" }}>
        <ModalPage edit={edit} setEdit={setEdit} data={data} />
        <button onClick={() => handleLogout()}>Sair</button>
      </div>
    </Container>
  );
}
