import React, { useState } from "react";
import { FiLogIn } from "react-icons/fi";
import { Link, useHistory } from "react-router-dom";
import logoImg from "../../assets/logoComplete.png";
import api from "../../services/api";
import { Container, LogoContainer, Form, Input, Logo } from "./styles";

export default function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();
    try {
      const body = { username, password };

      api.post("/5defab092f0000e7848e0c9e", body).then(() => {
        history.push("/dishes");
      });
    } catch (err) {
      alert("Houve um problema com o login, verifique suas credenciais!");
    }
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
