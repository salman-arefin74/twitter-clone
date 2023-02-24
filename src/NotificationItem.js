import React from 'react';
import "./NotificationItem.css";
import { Avatar } from "@material-ui/core";

function NotificationItem({ person, avatar, activity, commentText }) {
    let activityText = activity === "like" ? "liked your tweet" : 
            activity === "retweet" ? "retweeted your tweet ": 
            "replied to your tweet " + commentText;
    return (
        <div className="NotificationItem">
            <div className="notificationBody">
                <Avatar src={avatar} />
                    <div className="notificationText">
                        <h3>
                            {person} {" "} {activityText}
                        </h3>
                    </div>
            </div>
        </div>
    );
}

export default NotificationItem;