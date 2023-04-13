import React from 'react';
import {Col, Row} from 'react-bootstrap';
import appstore from '../assets/images/appstore.svg';
import googleplay from '../assets/images/googleplay.png';
import { AiFillBulb } from "react-icons/ai";
import mobile from "../assets/images/mobile.svg";

export default function MobileDownload() {
    return (
      <Row className="mobile-download-section">
        <Col
          className="padding-bottom justify-content-center align-items-center"
          xs="12"
          lg="6"
        >
          <Row>
            {/* <AiFillBulb size={30}></AiFillBulb> */}
            <div className="heading">Tải ứng dụng di động</div>
          </Row>
          <Row>
            <p>
              Với ứng dụng di động của chúng tôi, bạn sẽ có thể tra cứu thông
              tin cụ thể hơn, nhanh hơn và nhiều tính năng hơn so với trang web.
              Với giao diện thân thiện và dễ sử dụng, bạn có thể dễ dàng tìm
              kiếm thông tin mà bạn cần, mọi lúc mọi nơi.
            </p>
            <p>
              Ngoài ra, ứng dụng của chúng tôi cũng cung cấp nhiều tính năng hữu
              ích khác như xem ngày âm tốt xấu, xem tuổi hôn nhân. Bạn có thể dễ
              dàng tra cứu thông tin này chỉ với vài thao tác đơn giản.
            </p>
          </Row>
          <Row className="h-100 justify-content-center">
            <Col xs="6" lg="5" align="center">
              <img className="mobile-button" src={appstore}/>
            </Col>
            <Col xs="6" lg="5" align="center">
              <img className="mobile-button" src={googleplay}/>
            </Col>
          </Row>
        </Col>
        <Col
          xs="12"
          lg="6"
          className="d-flex flex-column justify-content-center align-items-center"
        >
          <img className='mobile-description-image' src={mobile}></img>
        </Col>
      </Row>
    );
}

