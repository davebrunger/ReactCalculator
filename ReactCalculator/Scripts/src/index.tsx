import * as React from "react";
import * as ReactDOM from "react-dom";
import { Calculator } from "./components/calculator/calculator"

ReactDOM.render(
    <div className="container">
        <div className="row">
            <div className="col-xs-4 col-xs-offset-4">
                <Calculator />
            </div>
        </div>
    </div>,
    document.getElementById("appContainer")
);

