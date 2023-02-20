import React from 'react';
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";

function TweetBox() {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox_input">
          <Avatar src="https://med.gov.bz/wp-content/uploads/2020/08/dummy-profile-pic.jpg" />
          <input type="text" placeholder="What's happening?" />
          {/*<input type="text" placeholder="Enter image URL."/>*/}
        </div>
        <Button className="tweetBox_button">Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;