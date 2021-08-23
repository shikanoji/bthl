
import React from "react";
import routes from "../routes.js";
import { Switch, Route } from "react-router-dom";

function Main(props) {
    return (
            <div className="main-panel">
                <Switch>
                    {routes.map((prop, key) => {
                        return (
                            <Route
                                path={prop.layout + prop.path}
                                component={prop.component}
                                key={key}
                            />
                        )
                    })}
                </Switch>
            </div>
    )
}

export default Main;