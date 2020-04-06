import React, { useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import logoImg from "../../assets/logo.svg";
import { signUpRequest } from "../../store/modules/auth/actions";
import { Container, Content, Form, Input, Logo, SectionTitle } from "./styles";
import { Button } from "../../styles";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useDispatch();

  async function handleRegister(e) {
    e.preventDefault();
    dispatch(signUpRequest(username, password, confirmPassword));
  }

  return (
    <Container>
      <Content>
        <section>
          <Logo src={logoImg} alt="Rastaurant logo" />

          <SectionTitle>Sign Up</SectionTitle>

          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#a0131b" />
            Back to login
          </Link>
        </section>

        <Form onSubmit={handleRegister}>
          <Input
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <Button type="submit">Register</Button>
        </Form>
      </Content>
    </Container>
  );
}
