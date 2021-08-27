import React from 'react';
import { Row } from 'react-bootstrap';
import NumberChecker from '../components/numberCheck/NumberChecker';

export default function NumberCheck(props) {
    return (
      <Container>
        <Row className="header justify-content-center">
          <Logo></Logo>
        </Row>
        <NumberChecker></NumberChecker>
      </Container>
    );
}