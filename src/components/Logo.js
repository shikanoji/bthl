import React from 'react';
import {Col, Row} from 'react-bootstrap';

export default function Logo() {
    return (
      <>
        <Col xs="12" md="6" lg="6">
          <Row className="h-100 justify-content-center">
            <div className="panel">
              <h1 className="jj heading">
                <span>XemSoDep.com</span>
              </h1>
              <h1 className="jj heading">
                <span>XemSoDep.com</span>
              </h1>
            </div>
          </Row>
        </Col>
      </>
    );
}