import React, {useState} from 'react';
import '../assets/styles/components/TweetBox.css'
import {Avatar, Button} from "@material-ui/core";
import db from '../firebase';
import moment from "moment";
import firebase from "../firebase";
import firestore from "firebase/compat";

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    const sendTweet = (e, time) => {
        e.preventDefault();
        db.collection('posts').add({
            displayName: "Mathieu HABIB",
            username: "habib",
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: "https://thispersondoesnotexist.com/image",
            video: false
        })
        setTweetMessage("");
        setTweetImage("");
    }
    return (
        <div className={'tweetBox'}>
            <form>
                <div className="tweetBox_input">
                    <Avatar src={"https://thispersondoesnotexist.com/image"}/>
                    <input onChange={e => setTweetMessage(e.target.value)} value={tweetMessage} type="text" placeholder={"What's Happening ?"}/>
                </div>
                <input onChange={e => setTweetImage(e.target.value)} value={tweetImage} type="text" className="tweetBox_imageURL" placeholder={"Enter the URL image"}/>
                <Button onClick={sendTweet} type={"submit"} className={"tweetBox_tweetButton"}>
                    Tweet
                </Button>
            </form>
        </div>
    );
}

export default TweetBox;