import * as React from "react";
import Remarkable = require("remarkable");

export interface ICommentProps {
    author: string;
}

export class Comment extends React.Component<ICommentProps, {}>{
    private rawMarkup() {
        const md = new Remarkable();
        const rawMarkup = md.render(this.props.children.toString());
        return { __html: rawMarkup };
    }

    public render() {
        return (
            <div className="comment">
                <h2 className="commentAuthor">
                    {this.props.author}
                </h2>
                <span dangerouslySetInnerHTML={this.rawMarkup()} />
            </div>
        );
    }
};