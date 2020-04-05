import React, { useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { Link, useHistory } from "react-router-dom";
import logoImg from "../../assets/logoComplete.png";
import api from "../../services/api";
import { Container, Content, Form, Input, SectionTitle, Logo } from "./styles";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const history = useHistory();

  async function handleRegister(e) {
    e.preventDefault();

    try {
      const body = { username, password };

      if (password === confirmPassword) {
        api.post("/5defab092f0000e7848e0c9e", body).then(() => {
          alert("Conta criada com sucesso! Redirecionando para o login");
          history.push("/");
        });
      } else {
        alert("As senhas informadas precisam ser iguais!");
      }
    } catch (err) {
      alert(
        "Houve um problema com o cadastro, verifique os dados preenchidos!"
      );
    }
  }

  return (
    <Container>
      <Content>
        <section>
          <Logo src={logoImg} alt="Rastaurant logo" />

          <SectionTitle>Cadastro</SectionTitle>

          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#a0131b" />
            Voltar ao login
          </Link>
        </section>

        <Form onSubmit={handleRegister}>
          <Input
            placeholder="Usuário"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Confirme sua senha"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <button className="button" type="submit">
            Cadastrar
          </button>
        </Form>
      </Content>
    </Container>
  );
}
