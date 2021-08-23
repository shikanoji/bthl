import React from 'react';
import {Col, Row} from 'react-bootstrap';
import CombineHexagram from './drop/CombineHexagram.js';
import {createHexagram, getTranformCombineHexagram} from '../helpers/HexagramHelper.js';
import Draggable from "react-draggable";

export default class HexagramGenerator extends React.Component {
  values = [];
  constructor(props) {
    super(props);
    //Chỉ định một state
    this.state = { hexagramValues: [], tranformValues: [] };
    this.dragable = React.createRef();
  }

  handleButtonPress() {
    this.setState({ hexagramValues: [], tranformValues: [] });
  }

  resetDraggable() {
    try {
      this.dragable.current.state.x = 0;
      this.dragable.current.state.y = 0;
    } catch (err) {
      // Fail silently
    }
  }

  handleButtonRelease() {
    this.resetDraggable();
  }

  trackPos(data) {
    if (data.x == 238) {
        var values = createHexagram();
        var tranformValues = getTranformCombineHexagram(values);
        this.setState({
          hexagramValues: values,
          tranformValues: tranformValues,
        });
    }
  }

  render() {
    return (
      <>
        <Row className="justify-content-center">
          <Col xs="12" md={6}>
            <Row className="justify-content-center">
              <div className="drag-hex">
                <Draggable
                  ref={this.dragable}
                  bounds={{
                    left: 0,
                    top: 0,
                    right: 238,
                    bottom: 0,
                  }}
                  onDrag={(e, data) => this.trackPos(data)}
                  defaultPosition={{ x: 0, y: 0 }}
                  axis="x"
                  cancelable="false"
                  onStart={() => this.handleButtonPress()}
                  onStop={() => this.handleButtonRelease()}
                >
                  <button className="glass glass-button">
                    <span className="not-selectable"></span>
                  </button>
                </Draggable>
                <p align="center" className="drag-label">
                  Trượt để gieo quẻ
                </p>
              </div>
            </Row>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md="6" sm="6" lg="5" xs="12">
            <CombineHexagram values={this.state.hexagramValues} />
          </Col>
          <Col md="6" sm="6" lg="5" xs="12">
            <CombineHexagram values={this.state.tranformValues} />
          </Col>
        </Row>
      </>
    );
  }
}