import React, {forwardRef} from 'react';
import '../assets/styles/components/Post.css'
import {Avatar} from "@material-ui/core";
import {ChatBubbleOutline, FavoriteBorder, Publish, Repeat, VerifiedUser} from "@material-ui/icons";
import Moment from "react-moment";
const moment = require('moment');


const Post = forwardRef((
    {
        displayName,
        username,
        verified,
        timestamp,
        text,
        image,
        avatar,
        video
    }, ref) => {
    // MOMENT.JS
    return (
        <div className={"post"} ref={ref}>
            <div className={"post_avatar"}>
                <Avatar src={avatar}/>
            </div>

            <div className="post_body">
                <div className="post_header">
                    <div className="post_headerText">
                        <h3>{displayName}
                            <span className={"post_headerSpecial"}>
                               {verified && <VerifiedUser className={"post_badge"}/>}
                                @{username}
                            </span>
                        </h3>
                        <p className={"post_time"}>{moment().format('LT')}</p>
                    </div>
                    <div className="post_headerDescription">
                        <p>{text}</p>
                    </div>
                </div>
                {video ? <video className="post_video" controls>
                        <source src={image} type={"video/mp4"}/>
                    </video>
                    : <img className={"post_image"} src={image} alt={image}/>
                }
                <div className="post_footer">
                    <ChatBubbleOutline fontSize={"small"}/>
                    <Repeat fontSize={"small"}/>
                    <FavoriteBorder fontSize={"small"}/>
                    <Publish fontSize={"small"}/>
                </div>
            </div>
        </div>
    );
});

export default Post;
