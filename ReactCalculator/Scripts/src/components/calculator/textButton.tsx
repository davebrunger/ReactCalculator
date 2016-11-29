import * as React from "react";

export interface ITextButtonProps {
    label: string;
    onClick(operator :string) : void;
}

export class TextButton extends React.Component<ITextButtonProps, {}> {

    private handleClick(e : React.MouseEvent<{}>) {
        this.props.onClick(this.props.label);
        e.preventDefault();
    }

    public render() {
        return (
            <button className="btn btn-info btn-warning keypad-btn" type="button" onClick={this.handleClick.bind(this)}>
                {this.props.label}
            </button>
        );
    }
}