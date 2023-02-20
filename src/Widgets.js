import React from 'react';
import "./Widgets.css";
import {TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search"

function Widgets(){
    return(
        <div className="Widgets">
            <div className="widgets_input">
                <SearchIcon className="widgets_searchIcon"/>
                <input type="text" placeholder="Search Twitter"/>
            </div>

            <div className="widgets_widgetContainer">
                <h2>What's happening</h2>

                <TwitterTweetEmbed tweetId={"1627450888099966976"}/>
                <TwitterTimelineEmbed sourceType="profile" screenName="cfcpys" options={{height: 400}}/>
            </div>
        </div>
    );
}

export default Widgets;