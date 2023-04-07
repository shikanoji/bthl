import React from 'react';
import { Col, Row, Form } from 'react-bootstrap';
import CombineHexagram from '../drop/CombineHexagram.js';
import {getCombineHexagramOfNumber} from '../../helpers/NumberCheckHelper.js';

export default class NumberChecker extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        gender: "1",
        number: "",
        birthYear: new Date().getFullYear(),
        combineHexagram: [],
      };
    }

    range(start, stop, step = 1, circularFill = false, map = (value) => value) {
          if (typeof stop === 'undefined') {
            stop = start;
            start = 0;
          }

          if (step > 0 && start >= stop) {
            step = -step;
          }

          if (step < 0 && start <= stop) {
            return [];
          }
          
          let index = start;
          const result = [];
          
          if (circularFill) {
            const size = start + stop;
            for (index; step > 0 ? index < size : index > size; index += step) {
              result.push(map(index % stop));
            }
            return result;
          }
          
          for (index; step > 0 ? index < stop : index > stop; index += step) {
            result.push(map(index));
          }
      return result;
    }

    yearRange() {
        var currentYear = new Date().getFullYear();
        return this.range(currentYear+10, currentYear - 110, -1)
    }

    checkNumber() {
      if (this.state.number != "") {
          // var filterNumber = this.state.number.replace(/[^0-9]/g, "");
          var hexagramValues = getCombineHexagramOfNumber(
            this.state.number,
            this.state.birthYear,
            this.state.gender
          );
          this.setState({ combineHexagram: hexagramValues });
      }   
    }

    onGenderChanged(e) {
      this.setState({
        gender: e.currentTarget.value,
      });
    }

    onNumberChanged(e) {
      this.setState({
        number: e.currentTarget.value,
      });
    }

    onBirthYearChanged(e){
      this.setState({
        birthYear: e.currentTarget.value,
      });
    }

    render() {
        return (
          <>
            <Row className="justify-content-center">
              <Col xs={12} md={6} lg={5}>
                <Row className="justify-content-center">
                  <div>
                    <h3 align="center">KIỂM TRA CÁT HUNG DÃY SỐ</h3>
                  </div>
                </Row>
                <Row className="justify-content-center">
                  <div className="drag-hex number-form">
                    <Form.Control
                      type="text"
                      defaultValue={this.state.number}
                      placeholder="Nhập số điện thoại, biển số xe, số tài khoản,..."
                      onChange={(e) => this.onNumberChanged(e)}
                    />
                  </div>
                </Row>
                <Row className="justify-content-center form-row">
                  <Col xs="4">
                    <Row className="d-flex align-items-center">
                      <p align="center">Năm sinh:</p>
                    </Row>
                  </Col>
                  <Col xs="4" className="no-padding">
                    <Form.Select
                      value={this.state.birthYear}
                      onChange={(e) => this.onBirthYearChanged(e)}
                    >
                      <option>Chọn năm sinh</option>
                      {this.yearRange(2040, 1900, -1).map((value, index) => (
                        <option value={value} key={index}>
                          {value}
                        </option>
                      ))}
                    </Form.Select>
                  </Col>
                </Row>
                <Row className="justify-content-center form-row">
                  <Col xs="4">
                    <Row className="d-flex align-items-center">
                      <p align="center">Giới tính:</p>
                    </Row>
                  </Col>
                  <Col xs="2" className="no-padding">
                    <input
                      type="radio"
                      checked={this.state.gender === "1"}
                      value="1"
                      id="male"
                      name="gender"
                      onChange={(e) => this.onGenderChanged(e)}
                    />{" "}
                    <label htmlFor="male">Nam</label>
                  </Col>
                  <Col xs="2" sm="2" className="no-padding">
                    <input
                      type="radio"
                      checked={this.state.gender === "0"}
                      value="0"
                      id="female"
                      name="gender"
                      onChange={(e) => this.onGenderChanged(e)}
                    />{" "}
                    <label htmlFor="female">Nữ</label>
                  </Col>
                </Row>
                <Row className="justify-content-center">
                  <Col xs="12" md="8">
                    <Row className="justify-content-center">
                      <div
                        className="justify-content-center align-items-center glass glass-button search-number-button"
                        onClick={(e) => this.checkNumber()}
                      >
                        <p align="center">Tra cứu</p>
                      </div>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col xs={11} md={6} lg={4}>
                <CombineHexagram
                  values={this.state.combineHexagram}
                  title="Quẻ Dịch"
                />
              </Col>
            </Row>
          </>
        );
    }
} 