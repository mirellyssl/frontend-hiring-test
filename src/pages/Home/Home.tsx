import React, { Component } from "react";
import { Container } from "./styles";
import MissedCall from "../../assets/img/phone-call.svg";
import CallService from "../../services/CallService";
import { RouteComponentProps } from "react-router-dom";
import Loading from "../../assets/gifs/loading.gif";
import Pagination from "react-js-pagination";
import Calls from "../../components/Calls";


export default class Home extends React.Component {

  render() {
    return (
      <Container>
          <Calls/>
      </Container>
    );
  }
}
