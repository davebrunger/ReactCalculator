import * as React from "react";

import { KeyPad } from "./keypad";
import { Display } from "./display";

export interface ICalculatorState {
    displayValue: number;
    addDecimal: boolean;
}

export class Calculator extends React.Component<{}, ICalculatorState> {

    private static readonly clearState = {
        displayValue: 0,
        addDecimal: false
    };

    constructor(props: {}) {
        super(props);
        this.state = Calculator.clearState;
    }

    private clear(): void {
        this.setState(Calculator.clearState);
    }

    private handleDigitClick(digit: number) {
        let displayValue = this.state.displayValue.toString();
        if (this.state.addDecimal) {
            displayValue = displayValue + ".";
        }
        displayValue = displayValue + digit.toString();
        this.setState({ displayValue: parseFloat(displayValue), addDecimal: false });
    }

    private handleOperatorClick(operator: string) {
        alert(`Operator: ${operator}`);
    }

    private handleOtherClick(label: string) {
        switch (label) {
            case "C":
                this.clear();
                return;
            default:
                throw `Unrecognised label: ${label}`;
        }
    }

    private handleEqualsClick() {
        alert("Equals");
    }

    private handleDecimalClick() {
        if (!this.state.addDecimal && this.state.displayValue.toString().indexOf(".") < 0) {
            this.setState({ displayValue: this.state.displayValue, addDecimal: true });
        }
    }

    public render() {
        return (
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h3 className="panel-title">&nbsp;</h3>
                </div>
                <div className="panel-body">
                    <Display value={this.state.displayValue} />
                    <KeyPad
                        onDecimalClick={this.handleDecimalClick.bind(this)}
                        onDigitClick={this.handleDigitClick.bind(this)}
                        onEqualsClick={this.handleEqualsClick.bind(this)}
                        onOperatorClick={this.handleOperatorClick.bind(this)}
                        onOtherClick={this.handleOtherClick.bind(this)} />
                </div>
            </div>
        );
    }
}