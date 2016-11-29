import * as React from "react";

export interface IDecimalButtonProps {
    onClick() : void;
}

export class DecimalButton extends React.Component<IDecimalButtonProps, {}> {

    private handleClick(e : React.MouseEvent<{}>) {
        this.props.onClick();
        e.preventDefault();
    }

    public render() {
        return (
            <button className="btn keypad-btn" type="button" onClick={this.handleClick.bind(this)}>
                .
            </button>
        );
    }
}