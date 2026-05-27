import { memo, useEffect, useState } from "react";
import { addComment, getComments } from "../services";

function CommentSection({ postId }) {

    console.log(`[CommentSection] render postId=${postId}`)

    const [comment, setComment] = useState("");
    const [comments, setComments] = useState([]);

    async function fetchComments() {
        const data = await getComments(postId);
        if (data) {
            setComments(data.comments);
        }
    }

    useEffect(() => {
        fetchComments();
        console.log("I am Comment");
    }, [postId]);

    async function sendComment() {
        if (!comment) return;
        await addComment(postId, comment);
        setComment("");
        fetchComments();
    }

    return (

        <div className="mt-4" key={postId}>

            <div className="flex gap-2">

                <input
                    type="text"
                    value={comment}
                    placeholder="Write comment"
                    onChange={(e) => setComment(e.target.value)}
                    className="border p-2 w-full"
                />

                <button
                    onClick={sendComment}
                    className="bg-blue-500 text-white px-4"
                >
                    Send
                </button>

            </div>

            <div className="mt-3">

                {
                    comments.map((item) => (

                        <div
                            key={item.id}
                            className="border p-2 mb-2"
                        >

                            <h1>
                                {item.fName} {item.lName}
                            </h1>

                            <p>
                                {item.comment}
                            </p>

                        </div>
                    ))
                }

            </div>

        </div>
    );
}

export default memo(CommentSection, (prev, next) => prev.postId === next.postId);