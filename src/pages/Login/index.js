import React, { useState } from "react";
import { FiLogIn } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logoImg from "../../assets/logo.svg";
import { loginRequest } from "../../store/modules/auth/actions";
import { Container, Form, Input, LogoContainer } from "./styles";
import { Button } from "../../styles";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const loading = useSelector((state) => state.auth.loading);
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
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <Input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button type="submit">{loading ? "Loading..." : "Login"}</Button>

          <Link className="back-link" to="/sign-up">
            <FiLogIn size={16} color="#a0131b" />
            Sign Up
          </Link>
        </Form>
      </section>
    </Container>
  );
}
