import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOne } from "../services/post.service";
import "./PostPage.scss";
import config from '../config'

function PostPage() {
  const [post, setPost] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getOne(id)
      .then((data) => setPost(data))
      .catch(console.log);
  }, [id]);

  return <div className="PostPage">
      {post && <div>
        <div>
            <strong>{post.author.username}</strong>
        </div>
        <p>{post.body}</p>
        <img src={config.apiUrl + '/' + post.image} alt="post"/>

        
      </div>}
      <div className="PostPage_comments">
          <h3>Comments</h3>
      </div>
  </div>;
}

export default PostPage;
