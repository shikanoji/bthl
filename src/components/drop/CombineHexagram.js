import React, {useState} from 'react';
import { Row, Col, Offcanvas} from 'react-bootstrap';
import Hexagram from './Hexagram';
import {
  getCombineHexagramName,
  getHexagramName,
} from "../../helpers/HexagramHelper.js";

export default function CombineHexagram(props) {
      const [show, setShow] = useState(false);
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);

      if (props.values.length != 2) {
        return (
          <div className="glass combine-hexagram d-flex align-items-center justify-content-center">
            <div className="loader">...</div>
          </div>
        );
      } else {
        return (
          <div className="glass combine-hexagram">
            <Row>
              <div className="combine-hexagram-title justify-content-center">
                <p align="center">{props.title}</p>
              </div>
            </Row>
            <Hexagram values={props.values[1]}></Hexagram>
            <Hexagram values={props.values[0]}></Hexagram>
            <Row>
              <Col xs="3" sm="4">
                <div className="h-100 d-flex justify-content-center">
                  <div
                    className="description-button justify-content-center align-self-center"
                    onClick={handleShow}
                  >
                    Giải nghĩa
                  </div>
                  <Offcanvas show={show} placement="bottom" onHide={handleClose} {...props}>
                    <Offcanvas.Header closeButton>
                      <Offcanvas.Title className="upper-case">
                        {getHexagramName(props.values[1])}{" "}
                        {getHexagramName(props.values[0])}{" "}
                        {
                          getCombineHexagramName(
                            props.values[0],
                            props.values[1]
                          ).name
                        }
                      </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>Giải nghĩa quẻ</Offcanvas.Body>
                  </Offcanvas>
                </div>
              </Col>
              <Col xs="9" sm="8">
                <div className="combine-name d-flex justify-content-center">
                  <h3
                    align="center"
                    className="hexagram-name align-self-center"
                    onClick={handleShow}
                  >
                    {
                      getCombineHexagramName(props.values[0], props.values[1])
                        .name
                    }
                  </h3>
                </div>
              </Col>
            </Row>
          </div>
        );
      }   
}