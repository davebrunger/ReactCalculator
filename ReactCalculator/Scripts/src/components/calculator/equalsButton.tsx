import * as React from "react";

export interface IEqualsButtonProps {
    onClick() : void;
}

export class EqualsButton extends React.Component<IEqualsButtonProps, {}> {

    private handleClick(e : React.MouseEvent<{}>) {
        this.props.onClick();
        e.preventDefault();
    }

    public render() {
        return (
            <button className="btn btn-primary keypad-btn" type="button" onClick={this.handleClick.bind(this)}>
                =
            </button>
        );
    }
}