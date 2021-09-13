import React from 'react';
import '../assets/styles/components/TweetBox.css'
import {Avatar, Button} from "@material-ui/core";

function TweetBox()  {
        return (
            <div className={'tweetBox'}>
                <form>
                    <div className="tweetBox_input">
                        <Avatar src={"https://thispersondoesnotexist.com/image"}/>
                        <input type="text" placeholder={"What's Happening ?"}/>
                        {/*<input type="text" placeholder={"What's Happening ?"}/>*/}
                    </div>
                    <input type="text" className="tweetBox_imageURL" placeholder={"Enter the URL image"}/>
                    <Button className={"tweetBox_tweetButton"}>
                        Tweet
                    </Button>
                </form>
            </div>
        );
}

export default TweetBox;