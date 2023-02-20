import React from 'react';
import "./Post.css";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";

function Post(displayName, username, verified, text, image) {
  return (
    <div className="post">
      <div className="post_avatar">
        <Avatar src="https://med.gov.bz/wp-content/uploads/2020/08/dummy-profile-pic.jpg" />
      </div>

      <div className="post_body">
        <div className="post_header">
          <div className="post_headerText">
            <h3>
              Salman Arefin {" "}
              <span className="post_headerIcon">
                <VerifiedUserIcon className="post_badge" /> @salman_arefin
              </span>
            </h3>
          </div>
          <div className="post_headerDescription">
            <p> Lets make a twitter clone</p>
          </div>
        </div>
        <img src="https://blog.logrocket.com/wp-content/uploads/2020/08/8-ways-deploy-react-app-free.png" alt="" />
        <div className="post_footer">
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