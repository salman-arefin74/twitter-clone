import React from 'react';
import "./Notifications.css";
import NotificationItem from "./NotificationItem";

function Notifications() {
  return (
    <div className="notifications">
      <div className="notificationHeader">
        <h2>Notifications</h2>
      </div>

      <NotificationItem 
          person="Ahmed Hasan Ayon" 
          avatar="https://med.gov.bz/wp-content/uploads/2020/08/dummy-profile-pic.jpg" 
          activity="like"
        />
        <NotificationItem 
          person="Sadia Tasnim" 
          avatar="https://us.123rf.com/450wm/apoev/apoev1903/apoev190300039/124427555-person-gray-photo-placeholder-woman-in-shirt-on-white-background.jpg?ver=6" 
          activity="retweet"
        />
        <NotificationItem 
          person="Tariqul Islam Rizvi" 
          avatar="https://med.gov.bz/wp-content/uploads/2020/08/dummy-profile-pic.jpg" 
          activity="comment"
          commentText="Congratulations!"
        />
    </div>
  );
}

export default Notifications;