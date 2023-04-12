import React from 'react';
import { Col, Row, Form } from 'react-bootstrap';
import CombineHexagram from '../drop/CombineHexagram.js';
import {getCombineHexagramOfNumber} from '../../helpers/NumberCheckHelper.js';
import {AiOutlineSearch} from "react-icons/ai";
import enjoy from '../../assets/images/enjoy.svg';

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
          <Row>
            <Col xs="0" md="1" lg="2">
              <Row className="justify-content-center">
                <img src={enjoy}></img>
              </Row>
            </Col>
            <Col xs="12" md="10" lg="8">
              <Row className="justify-content-center">
                <Col>
                  <Row className="justify-content-center">
                    <div>
                      <p className="heading">Xem số đẹp Kinh Dịch</p>
                    </div>
                  </Row>
                  <Row className="justify-content-center">
                    <div className="number-form col-md-8 col-xs-11">
                      <Form.Control
                        className="number-input"
                        type="text"
                        defaultValue={this.state.number}
                        placeholder="Nhập số điện thoại, biển số xe, số tài khoản,..."
                        onChange={(e) => this.onNumberChanged(e)}
                      />
                      <AiOutlineSearch className="search-button"></AiOutlineSearch>
                    </div>
                  </Row>
                  <Row className="form-row justify-content-center">
                    <Col
                      className="padding-bottom d-flex flex-column justify-content-center align-items-center"
                      align="center"
                      xs="5"
                      sm="3"
                      md="2"
                    >
                      <span className="align-middle">Năm sinh:</span>
                    </Col>
                    <Col
                      align="center"
                      xs="4"
                      md="2"
                      className="padding-bottom no-padding d-flex flex-column justify-content-center align-items-center"
                    >
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
                    <Col
                      className="padding-bottom d-flex flex-column justify-content-center align-items-center"
                      xs="5"
                      sm="3"
                      md="2"
                      align="center"
                    >
                      Giới tính:
                    </Col>
                    <Col
                      xs="2"
                      md="1"
                      className="no-padding d-flex flex-column justify-content-center align-items-center"
                    >
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
                    <Col
                      xs="2"
                      md="1"
                      className="no-padding d-flex flex-column justify-content-center align-items-center"
                    >
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
                  {/* <Row className="justify-content-center form-row"></Row> */}
                  <Row className="justify-content-center">
                    <Col>
                      <Row className="justify-content-center">
                        <button
                          className="justify-content-center align-items-center glass glass-button search-number-button"
                          type="submit"
                          onClick={(e) => this.checkNumber()}
                        >
                          <p align="center">Tra cứu</p>
                        </button>
                      </Row>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row className="justify-content-center">
                <Col xs="11">
                  <Row className="justify-content-center">
                    <CombineHexagram
                      values={this.state.combineHexagram}
                      title="Quẻ Dịch"
                    />
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col xs="0" md="1" lg="2">
              <Row className="justify-content-center">
                <img src={enjoy}></img>
              </Row>
            </Col>
          </Row>
        );
    }
} 