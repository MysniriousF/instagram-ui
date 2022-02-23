import React, { useEffect, useState } from "react";
import Post from "../Common/Post/Post";
import { getFeed } from "../services/post.service";

function Feed() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const getPosts = async () => {
      try {
        const posts = await getFeed();
        setPosts(posts);
        console.log(posts);
      } catch (err) {
        console.log(err);
      }
    };
    getPosts();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      
      {posts.map((data) => {
        return <Post data={data} key={data._id} /> ;
        
      })}
    
    </div>
    
  );
  
}

export default Feed;
