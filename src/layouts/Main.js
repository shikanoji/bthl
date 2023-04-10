
import React from "react";
import routes from "../routes.js";
import { Switch, Route } from "react-router-dom";
import Logo from "../components/Logo.js";
import { Row } from "react-bootstrap";
import NavMenu from "../components/NavMenu";
import MobileDownload from "../components/MobileDownload.js";
import Footer from "../components/footer.js";

function Main(props) {
    return (
      <div className="main-panel">
        <NavMenu></NavMenu>
        <div className="main-content">
          <Switch>
            {routes.map((prop, key) => {
              return (
                <Route
                  path={prop.layout + prop.path}
                  component={prop.component}
                  key={key}
                />
              );
            })}
          </Switch>
          <Row className="header justify-content-center">
            <MobileDownload></MobileDownload>
          </Row>
        </div>
        <Footer></Footer>
      </div>
    );
}

export default Main;