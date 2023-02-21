import React from 'react';
import "./Widgets.css";
import { TwitterTimelineEmbed, TwitterTweetEmbed } from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search"

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgetsInput">
        <SearchIcon className="widgetsSearchIcon" />
        <input type="text" placeholder="Search Twitter" />
      </div>

      <div className="widgetsWidgetContainer">
        <h2>What's happening</h2>

        <TwitterTweetEmbed tweetId={"1627450888099966976"} />
        <TwitterTimelineEmbed sourceType="profile" screenName="cfcpys" options={{ height: 400 }} />
      </div>
    </div>
  );
}

export default Widgets;