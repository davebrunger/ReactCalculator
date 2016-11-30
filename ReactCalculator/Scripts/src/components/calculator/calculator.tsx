import * as React from "react";

import { KeyPad } from "./keypad";
import { Display } from "./display";

enum KeyType {
    Digit,
    Decimal,
    Operator,
    Other
}

export interface ICalculatorState {
    displayValue: number;
}

export class Calculator extends React.Component<{}, ICalculatorState> {

    private static readonly clearState: ICalculatorState = {
        displayValue: 0
    };

    private terms: string[];
    private lastKeyPressed : KeyType;

    constructor(props: {}) {
        super(props);
        this.state = Calculator.clearState;
        this.terms = [];
        this.lastKeyPressed = KeyType.Other;
    }

    private clear(): void {
        this.setState(Calculator.clearState);
        this.terms = [];
        this.lastKeyPressed = KeyType.Other;
    }

    private handleDigitClick(digit: number) {
        let displayValue = this.state.displayValue.toString();
        switch (this.lastKeyPressed) {
            case KeyType.Decimal:
                if (displayValue.indexOf(".") < 0) {
                    displayValue = `${displayValue}.${digit}`;
                } else {
                    displayValue = `${displayValue}${digit}`;
                }
                break;
            case KeyType.Digit:
                displayValue = `${displayValue}${digit}`;
                break;
            case KeyType.Other:
                displayValue = digit.toString();
                this.terms = [];
                break;
            default:
                displayValue = digit.toString();
                break;
        }
        this.setState({
            displayValue: parseFloat(displayValue)
        });
        this.lastKeyPressed = KeyType.Digit;
    }

    private isOperator(char: string) {
        switch (char) {
            case "/":
            case "*":
            case "-":
            case "+":
                return true;
            default:
                return false;
        }
    }

    private evaluate() {
        let operation = this.terms.join("");
        if (operation) {
            if (this.isOperator(operation[operation.length - 1])) {
                operation = operation.substr(0, operation.length - 1);
            }
            this.setState({
                displayValue: eval(operation)
            });
        }
    }

    private handleOperatorClick(operator: string) {
        switch (this.lastKeyPressed) {
            case KeyType.Operator:
                this.terms[this.terms.length - 1] = operator;
                break;
            default:
                this.terms.push(this.state.displayValue.toString());
                this.terms.push(operator);
                break;
        }
        this.evaluate();
        this.lastKeyPressed = KeyType.Operator;
    }

    private handleOtherClick(label: string) {
        switch (label) {
            case "C":
                this.clear();
                break;
            default:
                throw `Unrecognised label: ${label}`;
        }
    }

    private handleEqualsClick() {
        if (this.lastKeyPressed === KeyType.Decimal || this.lastKeyPressed === KeyType.Digit) {
                this.terms.push(this.state.displayValue.toString());
        }
        this.evaluate();
        this.terms = [];
        this.lastKeyPressed = KeyType.Other;
    }

    private handleDecimalClick() {
        if (this.lastKeyPressed !== KeyType.Decimal && this.lastKeyPressed !== KeyType.Digit) {
            this.setState({
                 displayValue: 0
            });
        }
        if (this.lastKeyPressed === KeyType.Other) {
            this.terms = [];
        }
        this.lastKeyPressed = KeyType.Decimal;
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