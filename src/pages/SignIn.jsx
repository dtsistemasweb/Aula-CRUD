import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UseDataContext } from "../context/context";
import {
  Body,
  Container,
  Input,
  ContainerInput,
  ContainerButton,
  Button,
  TextLogin,
  Text,
} from "../styled/SignIn";

export default function SignInPage() {
  const navigate = useNavigate();
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [message, setMessage] = useState(false);
  const { handleLogin, auth, setAuth } = UseDataContext();

  async function handleSignin() {
    setMessage(false);
    const login = await handleLogin(username, password);

    if (login) {
      setAuth(true);
      navigate("/");
    } else {
      setMessage(true);
    }
  }

  return (
    <Container>
      <Body>
        <ContainerInput>
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
            <TextLogin style={{ color: "red" }}>
              Email ou senha incorreta!
            </TextLogin>
          )}
          <TextLogin>
            Nao possui conta ? <Text to="/signup">Cadastrar</Text>
          </TextLogin>
          <Button onClick={handleSignin}>Entrar</Button>
        </ContainerButton>
      </Body>
    </Container>
  );
}
