import * as React from "react";

import { DigitButton } from "./digitButton";
import { OperatorButton } from "./operatorButton";
import { TextButton } from "./textButton";
import { EqualsButton } from "./equalsButton";
import { DecimalButton } from "./decimalButton";

export interface IKeypadProps {
    onOtherClick(label: string): void; 
    onOperatorClick(operator: string): void; 
    onDigitClick(digit: number): void; 
    onDecimalClick(): void; 
    onEqualsClick(): void; 
}

export class KeyPad extends React.Component<IKeypadProps, {}> {
    public render() {
        return (
            <div className="keypad">
                <div className="row">
                    <div className="col-xs-3">
                        <TextButton label="C" onClick={this.props.onOtherClick} />
                    </div>
                    <div className="col-xs-3 col-xs-offset-6">
                        <OperatorButton operator="/" onClick={this.props.onOperatorClick} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-3">
                        <DigitButton digit={7} onClick={this.props.onDigitClick} />
                    </div>
                    <div className="col-xs-3">
                        <DigitButton digit={8} onClick={this.props.onDigitClick} />
                    </div>
                    <div className="col-xs-3">
                        <DigitButton digit={9} onClick={this.props.onDigitClick} />
                    </div>
                    <div className="col-xs-3">
                        <OperatorButton operator="*" onClick={this.props.onOperatorClick} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-3">
                        <DigitButton digit={4} onClick={this.props.onDigitClick} />
                    </div>
                    <div className="col-xs-3">
                        <DigitButton digit={5} onClick={this.props.onDigitClick} />
                    </div>
                    <div className="col-xs-3">
                        <DigitButton digit={6} onClick={this.props.onDigitClick} />
                    </div>
                    <div className="col-xs-3">
                        <OperatorButton operator="-" onClick={this.props.onOperatorClick} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-3">
                        <DigitButton digit={1} onClick={this.props.onDigitClick} />
                    </div>
                    <div className="col-xs-3">
                        <DigitButton digit={2} onClick={this.props.onDigitClick} />
                    </div>
                    <div className="col-xs-3">
                        <DigitButton digit={3} onClick={this.props.onDigitClick} />
                    </div>
                    <div className="col-xs-3">
                        <OperatorButton operator="+" onClick={this.props.onOperatorClick} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-6">
                        <DigitButton digit={0} onClick={this.props.onDigitClick} />
                    </div>
                    <div className="col-xs-3">
                        <DecimalButton onClick={this.props.onDecimalClick} />
                    </div>
                    <div className="col-xs-3">
                        <EqualsButton onClick={this.props.onEqualsClick} />
                    </div>
                </div>
            </div>
        );
    }
}