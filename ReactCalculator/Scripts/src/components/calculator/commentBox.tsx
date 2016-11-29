import * as React from "react";
import { IComment } from "./IComment"; 
import { CommentForm } from "./commentForm";
import { CommentList } from "./commentList";

export interface ICommentBoxProps {
    url: string;
    submitUrl: string;
    pollInterval : number;
}

export interface ICommentBoxState {
    data : IComment[];
}

export class CommentBox extends React.Component<ICommentBoxProps, ICommentBoxState> {

    constructor(props : ICommentBoxProps) {
        super(props);
        this.state = { data: [] };
    }

    private loadCommentsFromServer() {
        var xhr = new XMLHttpRequest();
        xhr.open("get", this.props.url, true);
        xhr.onload = () => {
            const data = JSON.parse(xhr.responseText);
            this.setState({ data: data });
        };
        xhr.send();
    }

    private handleCommentSubmit(comment : IComment) {
        const data = new FormData();
        data.append("Author", comment.Author);
        data.append("Text", comment.Text);

        const xhr = new XMLHttpRequest();
        xhr.open("post", this.props.submitUrl, true);
        xhr.onload = () => {
            this.loadCommentsFromServer();
        };
        xhr.send(data);
    }

    public componentDidMount() {
        this.loadCommentsFromServer();
        window.setInterval(() => this.loadCommentsFromServer(), this.props.pollInterval);
    }

    public render() {
        return (
            <div className="commentBox">
                <h1>Comments</h1>
                <CommentList data={this.state.data} />
                <CommentForm onCommentSubmit={this.handleCommentSubmit.bind(this)} />
            </div>
        );
    }
};