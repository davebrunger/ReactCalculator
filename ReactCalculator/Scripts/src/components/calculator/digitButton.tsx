import * as React from "react";

export interface IDigitButtonProps {
    digit: number;
    onClick(digit : number) : void;
}

export class DigitButton extends React.Component<IDigitButtonProps, {}> {

    private handleClick(e : React.MouseEvent<{}>) {
        this.props.onClick(this.props.digit);
        e.preventDefault();
    }

    public render() {
        return (
            <button className="btn keypad-btn" type="button" onClick={this.handleClick.bind(this)}>
                {this.props.digit}
            </button>
        );
    }
}