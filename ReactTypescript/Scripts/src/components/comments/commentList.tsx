import * as React from "react";
import { IComment } from "./IComment";
import { Comment } from "./comment";

export interface ICommentListProps {
    data : IComment[]
}

export interface ICommentListState {
}

export class CommentList extends React.Component<ICommentListProps, ICommentListState> {
    public render() {
        const commentNodes = this.props.data.map(comment => {
            return (
                <Comment author={comment.Author} key={comment.Id}>
                    {comment.Text}
                </Comment>
            );
        });
        return (
            <div className="commentList">
                {commentNodes}
            </div>
        );
    }
}
