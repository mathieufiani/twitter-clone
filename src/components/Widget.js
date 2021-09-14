import React, {forwardRef} from 'react';
import '../assets/styles/components/Widget.css'
import SearchIcon from "@material-ui/icons/Search";
import {TwitterShareButton, TwitterTimelineEmbed, TwitterTweetEmbed} from "react-twitter-embed";

const Widget = forwardRef(({props}, ref) => {
    return (
        <div className="widgets">
            <div className="widget_input">
                <SearchIcon className={"widget_searchIcon"}/>
                <input type="text" placeholder={"Search Twitter"}/>
            </div>
            <div className="widget_widgetContainer">
                <h2>What's happening ?</h2>
                <TwitterTweetEmbed placeholder={'loading'} tweetId={"933354946111705097"} ref={ref}/>
                <TwitterTimelineEmbed sourceType={"profile"} sreenName={"booba"} options={{height: 400}} ref={ref}/>
                <TwitterShareButton url={"https://facebook.com/cleverprogrammer"}
                                    options={{text: "Rectjs is good", via: "cleverqazi"}} ref={ref}/>
            </div>
        </div>
    );


});

export default Widget;
