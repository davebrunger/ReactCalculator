import * as React from "react";

import { KeyPad } from "./keypad";

export class Calculator extends React.Component<{}, {}> {
    public render() {
        return (
            <div className="panel panel-default">
                <div className="panel-body">
                    <KeyPad />
                </div>
            </div>
        );
    }
}