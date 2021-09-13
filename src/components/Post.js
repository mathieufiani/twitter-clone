import React from 'react';
import '../assets/styles/components/Post.css'
import {Avatar} from "@material-ui/core";
import {ChatBubbleOutline, FavoriteBorder, Publish, Repeat, VerifiedUser} from "@material-ui/icons";
const Post = (
    displayName,
    username,
    verified,
    timestamp,
    text,
    image,
    avatar) => {
    // MOMENT.JS
    return (
        <div className={"post"}>
            <div className={"post_avatar"}>
                <Avatar src={"https://thispersondoesnotexist.com/image"}/>
            </div>
            <div className="post_body">
                <div className="post_header">
                    <div className="post_headerText">
                        <h3>MATHIEU
                            <span className={"post_headerSpecial"}>
                                <VerifiedUser className={"post_badge"} />
                                @mathieufiani
                            </span>
                        </h3>
                    </div>
                    <div className="post_headerDescription">
                        <p>Making a twitter clone better than twitter ;)</p>
                    </div>
                </div>
                <img className={"post_image"} src="https://gratisography.com/wp-content/uploads/2021/08/gratisography-pink-bicycle-free-stock-photo-1170x780.jpg"/>
                <div className="post_footer">
                    <ChatBubbleOutline fontSize={"small"}/>
                    <Repeat fontSize={"small"}/>
                    <FavoriteBorder fontSize={"small"}/>
                    <Publish fontSize={"small"}/>
                </div>
            </div>
        </div>
    );
};

export default Post;
