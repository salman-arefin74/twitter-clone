import React from 'react';
import "./Post.css";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";

function Post({ displayName, username, verified, text, image }) {
  return (
    <div className="post">
      <div className="postAvatar">
        <Avatar src="https://med.gov.bz/wp-content/uploads/2020/08/dummy-profile-pic.jpg" />
      </div>

      <div className="postBody">
        <div className="postHeader">
          <div className="postHeaderText">
            <h3>
              {displayName} {" "}
              <span className="postHeaderIcon">
                <VerifiedUserIcon className="postBadge" /> @{username}
              </span>
            </h3>
          </div>
          <div className="postHeaderDescription">
            <p> {text}</p>
          </div>
        </div>
        <img src={image} alt="" />
        <div className="postFooter">
          <FavoriteBorderIcon fontSize="small" />
          <RepeatIcon fontSize="small" />
          <PublishIcon fontSize="small" />
          <ChatBubbleOutlineIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
}

export default Post;