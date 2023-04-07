import React from "react";
import { Container, Button } from "react-bootstrap";
import { AiOutlineApple, AiOutlineAndroid } from "react-icons/ai";

export default class AppDownload extends React.Component {
  render() {
    return (
      <Container className="d-flex flex-column align-items-center justify-content-center">
        <h1>Tải ứng dụng di động</h1>
        <a href="/download/sysvpn-for-macos" class="spl-icon">
          <i class="icon-b24 icon-bg-white icon-macos"></i>
          <span>macOS</span>
        </a>
      </Container>
    );
  }
}
