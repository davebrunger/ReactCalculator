import * as React from "react";
import { IComment } from "./IComment";

export interface ICommentFormProps {
    onCommentSubmit(comment: IComment): void;
}

export interface ICommentFormState {
    author?: string;
    text?: string;
}

export class CommentForm extends React.Component<ICommentFormProps, ICommentFormState> {

    constructor(props: ICommentFormProps) {
        super(props);
        this.state = { author: "", text: "" };
    }

    private handleAuthorChange(e: React.FormEvent<HTMLInputElement>) {
        this.setState({ author: (e.target as any).value });
    }

    private handleTextChange(e: React.FormEvent<HTMLInputElement>) {
        this.setState({ text: (e.target as any).value });
    }

    private handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const author = this.state.author.trim();
        const text = this.state.text.trim();
        if (!text || !author) {
            return;
        }
        this.props.onCommentSubmit({ Author: author, Text: text });
        this.setState({ author: "", text: "" });
    }

    public render() {
        return (
            <form
                className="commentForm"
                onSubmit={this.handleSubmit.bind(this)}>
                <input
                    type="text"
                    placeholder="Your name"
                    value={this.state.author}
                    onChange={this.handleAuthorChange.bind(this)} />
                <input
                    type="text"
                    placeholder="Say something..."
                    value={this.state.text}
                    onChange={this.handleTextChange.bind(this)} />
                <input
                    type="submit"
                    value="Post" />
            </form>
        );
    }
}