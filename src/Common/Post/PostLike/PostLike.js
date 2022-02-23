import React, {useContext, useEffect, useState} from 'react';
import './PostLike.scss';
import {postLike, postUnLike} from '../../../services/post.service';
import { UserContext } from '../../../App';

function PostLike({ postId, likes }) {
	const { user } = useContext(UserContext);
	const [likesCount, setLikesCount] = useState(likes.length);
	const [hasLiked, setHasLiked] = useState(likes.includes(user._id));

 


	function like() {
		setHasLiked(true);
		setLikesCount(prev => prev + 1);
		postLike(postId).then(()=>{
            
        }).catch(() => setHasLiked(false));
	}

	function unlike() {
		setHasLiked(false);
		setLikesCount(prev => prev - 1);
		postUnLike(postId).catch(() => setHasLiked(true));
	}

    useEffect(()=>{
        setHasLiked(likes.includes(user._id))
    },[user,likes])



	return (
		<div>
			{hasLiked
				? <button onClick={unlike}>Unlike</button>
				: <button onClick={like}>Like</button>}
			<span>{likesCount} likes</span>
		</div>
	);
}

export default PostLike;