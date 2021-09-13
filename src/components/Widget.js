import React, {Component} from 'react';
import '../assets/styles/components/Widget.css'
import SearchIcon from "@material-ui/icons/Search";
import {TwitterTimelineEmbed, TwitterTweetEmbed} from "react-twitter-embed";
class Widget extends Component {
    render() {
        return (
            <div className="widgets">
                <div className="widget_input">
                    <SearchIcon className={"widget_searchIcon"}/>
                    <input type="text" placeholder={"Search Twitter"}/>
                </div>
                <div className="widget_widgetContainer">
                    <h2>What's happening ?</h2>
                    <TwitterTweetEmbed tweetId={"858551177860055040"}/>
                    <TwitterTimelineEmbed sourceType={"profile"} sreenName={"cleverqazi"} options={{height:400}}/>

                </div>
            </div>
        );
    }
}

export default Widget;
