import React, { useCallback, useEffect, useState } from "react";
import Avatar from "../Avatar/Avatar";
import { Link } from "react-router-dom";
import config from '../../config/index'
import ShowDate from "../Date/ShowDate";
import PostLike from "./PostLike/PostLike";
import { createComment, getComments } from "../../services/post.service";

function Post ({data}) {
    const [comments, setComments] = useState([]);
    const [commentValue, setCommentValue] = useState('')

    useEffect(() => {
        const fetchComments = async () => {
            try {
            const comments = await getComments(data._id)
            setComments(comments)
            }catch(err){
                console.log(err);
            }
        }
        fetchComments()
    }, [data._id]);

    const submit = useCallback(async(e) => {
        e.preventDefault();
        const newComment = await createComment(data._id, commentValue);
        setComments([newComment, ...comments]);
        setCommentValue('');
    }, [data._id, commentValue, comments]);

    return (
        <div className="data_wrapper">
            <article className="data">
                <header>
                    <div className="data_user">
                        <Avatar size='md' image = {"https://cdn4.iconfinder.com/data/icons/space-61/64/C_Astronaut-512.png"}/>

                        <Link to = {'/profile/' + data.author.username}>
                            <span className="data_user_username">{data.username}</span>
                        </Link>
                    </div>
                    <div className="post_date">
                        <ShowDate date = {data.createdAt} />
                    </div>
                </header>
                <div className="post_image">
                    <Link to={'/post/' + data._id}>
                        <img src={config.apiUrl + '/' + data.image} alt="" />
                    </Link>
                </div>
                <div className="data_content">
                    <h1 className="data_Description">{data.body}</h1>
                </div>
                <div className="data_image">
                    <Link to= {'/data/' + data._id}>
                        <img src={config.apiUrl + '/' + data.image} className="data_image" alt=""/>
                    </Link>
                </div>
                <div>
                    <PostLike postId={data._id} likes={data.likes} />
                </div>
                <form onSubmit={submit}>
						{/* comment create */}
						<input value={commentValue} onChange={e => setCommentValue(e.target.value)}
						type="text" placeholder="Write your comment" />
						<button type="submit">Comment</button>
					</form>
					<ul>
						{comments.map(comment => {
							// render comment <Comment comment={comment} />
							return <li>{comment.content}</li>
						})}
					</ul>
            </article>
        </div>
    );

    }


export default Post;