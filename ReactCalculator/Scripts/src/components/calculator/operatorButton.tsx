import * as React from "react";

export interface IOperatorButtonProps {
    operator: string;
    onClick(operator :string) : void;
}

export class OperatorButton extends React.Component<IOperatorButtonProps, {}> {

    private handleClick(e : React.MouseEvent<{}>) {
        this.props.onClick(this.props.operator);
        e.preventDefault();
    }

    private getLabel() {
        switch (this.props.operator) {
        case "*":
            return <span>&times;</span>;
        case "/":
            return <span>&divide;</span>;
        default:
            return <span>{this.props.operator}</span>;
        }
    }

    public render() {
        return (
            <button className="btn btn-info keypad-btn" type="button" onClick={this.handleClick.bind(this)}>
                {this.getLabel()}
            </button>
        );
    }
}