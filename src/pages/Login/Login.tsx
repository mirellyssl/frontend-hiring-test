import React, { Component } from "react";
import { Container, Img } from "./styles";
import Icone from "../../assets/img/next.svg";
import Close from "../../assets/img/close-eye.svg";
import Open from "../../assets/img/open-eye.svg";
import AuthService from "../../services/AuthService";
import { Redirect } from "react-router-dom";
import  IsAuthenticated  from "../../services/VerifyToken";

interface Props {}

interface State {
  username: string;
  password: string;
  loading: boolean;
  error: boolean;
  hidden?: boolean;
}

export default class Login extends Component<Props, State> {

  state: State = {
    username: "",
    password: "",
    loading: false,
    error: false,
    hidden: false,
  };

  togglePassword = () => {
    this.setState({ hidden: !this.state.hidden });
  };

  submit = () => {
    this.setState({ loading: true });
    const request = new AuthService();
    request.login(this.state.username, this.state.password).then(
      (success) => {
        localStorage.setItem("TOKEN", success.access_token);
        this.setState({ error: false, loading: false });
      },
      (error) => {
        console.log(error);
        this.setState({ error: true, loading: false });
      }
    );
  };

  render() {
    const { error, loading } = this.state;
    return (
      <Container>
        <div className="card">
          <div className="card-header">
            <h1>Olá!</h1>
            <h2>Bem-vinda(o) de volta.</h2>
          </div>
          <form>
            <div className="card-body">
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Usuário"
                defaultValue=""
                onChange={(e) => this.setState({ username: e.target.value })}
              />
              <div className="input-password">
                <input
                  type={this.state.hidden ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="Senha"
                  defaultValue=""
                  onChange={(e) => this.setState({ password: e.target.value })}
                />
                <Img
                  src={this.state.hidden ? Close : Open}
                  onClick={this.togglePassword}
                />
              </div>
              <button
                className="btn btn-info"
                type="button"
                onClick={this.submit}
              >
                <span> {loading ? "Carregando..." : "Entrar"} </span>
                <Img src={Icone} />
              </button>
            </div>
            {error ? (
              <div className="error">
                <span>
                  Opss, não conseguimos processar sua requisição. Verifique seus
                  dados e tente novamente.
                </span>
              </div>
            ) : (
              <div></div>
            )}
          </form>
        </div>
        {IsAuthenticated() ? <Redirect to="/home" /> : <Redirect to="/"/>}
      </Container>
    );
  }
}
