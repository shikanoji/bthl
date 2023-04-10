import React from 'react';
import {Col, Row} from 'react-bootstrap';
import appstore from '../assets/images/appstore.svg';
import googleplay from '../assets/images/googleplay.png';
import { AiFillBulb } from "react-icons/ai";
export default function MobileDownload() {
    return (
      <>
        <Col
          className="mobile-download-section justify-content-center align-items-center"
          xs="12"
          sm="5"
          lg="5"
        >
          <Row className="notice mobile-download-section justify-content-center align-items-center">
            <Col
              xs="2"
              md="1"
              className="d-flex flex-column justify-content-center align-items-center"
            >
              <AiFillBulb size={30}></AiFillBulb>
            </Col>
            <Col
              xs="10"
              lg="8"
              className="d-flex flex-column justify-content-center align-items-center"
            >
              <div>Tải ứng dụng di động để xem giải nghĩa quẻ cụ thể hơn.</div>
            </Col>
          </Row>
          <Row className="h-100 justify-content-center">
            <Col xs="6" lg="5" align="center">
              <img className="mobile-button" src={appstore} title alt />
            </Col>
            <Col xs="6" lg="5" align="center">
              <img className="mobile-button" src={googleplay} title alt />
            </Col>
          </Row>
        </Col>
      </>
    );
}

