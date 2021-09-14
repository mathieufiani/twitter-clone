import React, {useState, useEffect} from "react";
import "../assets/styles/components/Feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";
import db from "../firebase";
import FlipMove from "react-flip-move";
const Feed = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
            db.collection('posts').onSnapshot(snapshot => {
                setPosts(snapshot.docs.map(doc => doc.data()))
                console.log("Hellooo", snapshot.docs)
            })
    }, []);
    return (
        <div className={"feed"}>
            <div className="feed_header">
                <h2>Home</h2>
            </div>
            <TweetBox/>
            <FlipMove>
                {posts.map( (post, index )=>(
                    // key should be doc ID from firebase get doc.id
                <Post
                    key={index}
                    displayName={post.displayName}
                    username={post.username}
                    verified={post.verified}
                    text={post.text}
                    image={post.image}
                    avatar={post.avatar}
                      video={post.video}
                />
            ))}
            </FlipMove>
        </div>
    );
}

export default Feed;
