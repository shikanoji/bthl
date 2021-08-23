import React from 'react';
import { Row, Col, Container } from "react-bootstrap";
import HexagramGenerator from '../components/HexagramGenerator.js';
import Logo from '../components/Logo.js';

export default class Home extends React.Component {
  render() {
    return (
      <Container>
        <Row className="header justify-content-center">
            <Logo></Logo>
        </Row>
        <HexagramGenerator></HexagramGenerator>
      </Container>
    );
  }
}