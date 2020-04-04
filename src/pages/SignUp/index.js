import React, { useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { Link, useHistory } from "react-router-dom";
import logoImg from "../../assets/logo.svg";
import api from "../../services/api";
import "./styles.css";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  async function handleRegister(e) {
    e.preventDefault();

    try {
      const body = { username, password };

      // api.post("/5defab092f0000e7848e0c9e", body).then(() => {
        alert("Conta criada com sucesso! Redirecionando para o login");
        history.push("/");
      // });
    } catch (err) {
      alert(
        "Houve um problema com o cadastro, verifique os dados preenchidos!"
      );
    }
  }

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero" />

          <h1>Cadastro</h1>

          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar ao login
          </Link>
        </section>

        <form onSubmit={handleRegister}>
          <input
            placeholder="Usuário"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
