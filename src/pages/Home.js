import React from 'react';
import { Container } from "react-bootstrap";
import HexagramGenerator from '../components/HexagramGenerator.js';;

export default class Home extends React.Component {
  render() {
    return (
      <Container>
        <HexagramGenerator></HexagramGenerator>
      </Container>
    );
  }
}