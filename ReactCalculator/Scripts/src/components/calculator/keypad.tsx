import * as React from "react";

import { DigitButton } from "./digitButton";
import { OperatorButton } from "./operatorButton";
import { TextButton } from "./textButton";
import { EqualsButton } from "./equalsButton";
import { DecimalButton } from "./decimalButton";

export class KeyPad extends React.Component<{}, {}> {

    private handleDigitButtonClick(digit: number) {
        alert(`Digit: ${digit}`);
    }

    private handleOperatorClick(operator: string) {
        alert(`Operator: ${operator}`);
    }

    private handleOtherClick(operator: string) {
        alert(`Other: ${operator}`);
    }

    private handleEqualsClick() {
        alert("Equals");
    }

    private handleDecimalClick() {
        alert("Decimal");
    }

    public render() {
        return (
            <div className="keypad">
                <div className="row">
                    <div className="col-xs-3">
                        <TextButton label="C" onClick={this.handleOtherClick.bind(this)} />
                    </div>
                    <div className="col-xs-3">
                        <TextButton label="MC" onClick={this.handleOtherClick.bind(this)} />
                    </div>
                    <div className="col-xs-3">
                        <TextButton label="M+" onClick={this.handleOtherClick.bind(this)} />
                    </div>
                    <div className="col-xs-3">
                        <OperatorButton operator="/" onClick={this.handleOperatorClick.bind(this)} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-3">
                        <DigitButton digit={7} onClick={this.handleDigitButtonClick.bind(this)} />
                    </div>
                    <div className="col-xs-3">
                        <DigitButton digit={8} onClick={this.handleDigitButtonClick.bind(this)} />
                    </div>
                    <div className="col-xs-3">
                        <DigitButton digit={9} onClick={this.handleDigitButtonClick.bind(this)} />
                    </div>
                    <div className="col-xs-3">
                        <OperatorButton operator="*" onClick={this.handleOperatorClick.bind(this)} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-3">
                        <DigitButton digit={4} onClick={this.handleDigitButtonClick.bind(this)} />
                    </div>
                    <div className="col-xs-3">
                        <DigitButton digit={5} onClick={this.handleDigitButtonClick.bind(this)} />
                    </div>
                    <div className="col-xs-3">
                        <DigitButton digit={6} onClick={this.handleDigitButtonClick.bind(this)} />
                    </div>
                    <div className="col-xs-3">
                        <OperatorButton operator="-" onClick={this.handleOperatorClick.bind(this)} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-3">
                        <DigitButton digit={1} onClick={this.handleDigitButtonClick.bind(this)} />
                    </div>
                    <div className="col-xs-3">
                        <DigitButton digit={2} onClick={this.handleDigitButtonClick.bind(this)} />
                    </div>
                    <div className="col-xs-3">
                        <DigitButton digit={3} onClick={this.handleDigitButtonClick.bind(this)} />
                    </div>
                    <div className="col-xs-3">
                        <OperatorButton operator="+" onClick={this.handleOperatorClick.bind(this)} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-6">
                        <DigitButton digit={0} onClick={this.handleDigitButtonClick.bind(this)} />
                    </div>
                    <div className="col-xs-3">
                        <DecimalButton onClick={this.handleDecimalClick.bind(this)} />
                    </div>
                    <div className="col-xs-3">
                        <EqualsButton onClick={this.handleEqualsClick.bind(this)} />
                    </div>
                </div>
            </div>
        );
    }
}