
import React from "react";
import routes from "../routes.js";
import { Switch, Route } from "react-router-dom";
import Logo from "../components/Logo.js";
import { Row } from "react-bootstrap";
import NavMenu from "../components/NavMenu";

function Main(props) {
    return (
      <div className="main-panel">
        <NavMenu></NavMenu>
        <Row className="header justify-content-center">
          <Logo></Logo>
        </Row>
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
      </div>
    );
}

export default Main;