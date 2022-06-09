import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UseDataContext } from "../context/context";
import {
  Body,
  Container,
  Input,
  ContainerInput,
  ContainerButton,
  Button,
  TextRegister,
  Text,
} from "../styled/SignUp";

export default function SignUpPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [message, setMessage] = useState(false);
  const { handleResgister } = UseDataContext();

  async function handleSignUp() {
    setMessage(false);
    const register = await handleResgister(email, username, password);
    if (register.response.data.error) {
      setMessage(true);
    } else {
      navigate("/signin");
    }
  }

  return (
    <Container>
      <Body>
        <ContainerInput>
          <Input
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="Usuario"
            type="text"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
          <Input
            placeholder="Senha"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </ContainerInput>
        <ContainerButton>
          {message && (
            <TextRegister style={{ color: "red" }}>
              Email ja existe!
            </TextRegister>
          )}
          <TextRegister>
            Ja possui conta ? <Text to="/signin">Entrar</Text>
          </TextRegister>
          <Button onClick={handleSignUp}>Cadastrar</Button>
        </ContainerButton>
      </Body>
    </Container>
  );
}
