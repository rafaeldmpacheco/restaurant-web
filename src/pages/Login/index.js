import React, { useState } from "react";
import { FiLogIn } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import logoImg from "../../assets/logoComplete.png";
import { loginRequest } from "../../store/modules/auth/actions";
import { Container, Form, Input, LogoContainer } from "./styles";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  async function handleLogin(e) {
    e.preventDefault();
    dispatch(loginRequest(username, password));
  }

  return (
    <Container>
      <section>
        <LogoContainer>
          <img src={logoImg} alt="Restaurant Logo" />
        </LogoContainer>

        <Form onSubmit={handleLogin}>
          <Input
            placeholder="Usuário"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <Input
            placeholder="Senha"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="button" type="submit">
            Entrar
          </button>

          <Link className="back-link" to="/sign-up">
            <FiLogIn size={16} color="#a0131b" />
            Criar conta
          </Link>
        </Form>
      </section>
    </Container>
  );
}
