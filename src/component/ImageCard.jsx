import { memo, useEffect, useState, useCallback } from "react";
import { getUserPost, postLikeUnlike } from "../services";
import CommentSection from "./comment";

const PostCard = memo(({ value, doLikeUnlike }) => {

    console.log(`[PostCard] render id=${value.post_id} } count=${value.count}`)
    console.count(`[PostCard] render-count ${value.post_id}`)
    return (
        <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-md overflow-hidden" key={value.post_id}>
            <div className="flex items-center gap-3 p-4">
                <img
                    src="https://picsum.photos/seed/picsum/200/300"
                    alt=""
                    className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                    <h1 className="font-semibold text-lg">
                        {value?.fname} {value?.lname}
                    </h1>


                    <p className="text-sm text-gray-500">
                        {value.created_at}
                    </p>
                </div>
            </div>
            <img
                src={value.post_Photo_id}
                alt=""
                className="w-full h-72 object-cover"
            />
            <div className="p-4">

                <p className="mb-4">

                    {value.title}
                </p>
                <p className="text-gray-700 mb-4">

                    {value.description}
                </p>
                <PostFooter postid={value.post_id} count={value.count} doLikeUnlike={doLikeUnlike} />
            </div>
        </div>)
}
)

const PostFooter = ({ count, postid, doLikeUnlike }) => {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <div className="flex justify-between text-lg">

                <button className="hover:text-red-500 transition" onClick={() => doLikeUnlike(postid)}>
                    ❤️  {count} Like
                </button>

                <button className="hover:text-blue-500 transition" onClick={() => { setOpen(!isOpen) }
                }>
                    💬 Comment
                </button>
                <button className="hover:text-green-500 transition">
                    📤 Share
                </button>
            </div>
            {isOpen && <CommentSection postId={postid} />}
        </>
    )
}
function ImageCart() {

    const [imageData, setimageData] = useState([])
    const [openCommentId, setOpenCommentId] = useState(null)

    const fetchPost = useCallback(async (postid) => {
        try {
            const data = await getUserPost();
            console.log(data.posts);
            if (data && data.posts.length) {
                if (postid)
                    setimageData((e) => {
                        return e.map(p => p.post_id === postid ? data.posts.find(p => p.post_id == postid) : p)
                    })
                else
                    setimageData(data.posts)

            }
            // alert(data.message)
        } catch (error) {
            console.log(error);
            alert("this is coming from ImageCart.");
        }
    }, [])

    useEffect(() => {
        (async () => {
            await fetchPost();
        })()
    }, [fetchPost]);

    const doLikeUnlike = useCallback(async (postId) => {
        const result = await postLikeUnlike(postId)
        if (result) {
            await fetchPost(postId)
        }
    }, [fetchPost])

    const toggleComment = useCallback((postId) => {
        setOpenCommentId((prev) => (prev === postId ? null : postId))
    }, [])


    return (
        <div className="space-y-5">
            {imageData.map((value) => (
                <PostCard
                    key={value.post_id}
                    value={value}
                    isOpen={openCommentId === value.post_id}
                    doLikeUnlike={doLikeUnlike}
                    toggleComment={toggleComment}
                />
            ))}
        </div >
    );
}

export default ImageCart;