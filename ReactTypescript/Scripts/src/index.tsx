import * as React from "react";
import * as ReactDOM from "react-dom";
import {CommentBox} from "./components/comments/commentBox"

ReactDOM.render(
    <div>
        <CommentBox url="/comments" submitUrl="/comments/new" pollInterval={2000} />
    </div>,
    document.getElementById("appContainer")
);

