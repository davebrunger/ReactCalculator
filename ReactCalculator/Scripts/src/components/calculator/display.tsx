import * as React from "react";

export interface IDisplayProps {
    value: number;
}

export class Display extends React.Component<IDisplayProps, {}> {
    public render() {
        let displayValue = "0.";
        if (this.props.value) {
            displayValue = this.props.value.toString();
            if (displayValue.indexOf(".") < 0) {
                displayValue = displayValue + ".";
            }
        }
        return (
            <input className="form-control calculator-display" type="text" value={displayValue} />
        );
    }
}