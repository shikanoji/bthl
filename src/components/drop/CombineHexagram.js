import React, {useState} from 'react';
import { Row, Col, Modal, Button} from 'react-bootstrap';
import Hexagram from './Hexagram';
import {
  getCombineHexagramName,
  getHexagramName,
} from "../../helpers/HexagramHelper.js";

export default function CombineHexagram(props) {
      const [show, setShow] = useState(false);
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);

      if (props.values.length !==2) {
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
                <p align="center" onClick={handleShow}>
                  {props.title} số{" "}
                  {getCombineHexagramName(props.values[0], props.values[1]).no},{" "}
                  <span
                    className={
                      getCombineHexagramName(props.values[0], props.values[1])
                        .rank
                    }
                  >
                    {
                      getCombineHexagramName(props.values[0], props.values[1])
                        .rate
                    }
                  </span>
                </p>
              </div>
            </Row>
            <Hexagram values={props.values[1]}></Hexagram>
            <Hexagram values={props.values[0]}></Hexagram>
            <Row>
              <Col
                className="d-flex flex-column justify-content-center align-items-center"
                xs="3"
                sm="4"
              >
                <div>
                  <button
                    type="button"
                    class="btn btn-light show-meaning-button"
                    onClick={handleShow}
                  >
                    Giải nghĩa
                  </button>
                  <Modal
                    className="modal"
                    show={show}
                    onHide={handleClose}
                    centered
                  >
                    <Modal.Header closeButton>
                      <Modal.Title>
                        <span>
                          {getHexagramName(props.values[1])}{" "}
                          {getHexagramName(props.values[0])}{" "}
                          {
                            getCombineHexagramName(
                              props.values[0],
                              props.values[1]
                            ).name
                          }
                        </span>
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      {
                        getCombineHexagramName(props.values[0], props.values[1])
                          .description
                      }
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Đóng
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </div>
              </Col>
              <Col xs="9" sm="8">
                <div className="combine-name d-flex justify-content-center">
                  <h3
                    align="center"
                    className="hexagram-name align-self-center"
                    onClick={handleShow}
                    className={
                      getCombineHexagramName(props.values[0], props.values[1])
                        .rank
                    }
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