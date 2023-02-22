import React from 'react';
import "./Feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";

function Feed() {
  return (
    <div className="feed">
      <div className="feedHeader">
        <h2>Home</h2>
      </div>

      <TweetBox />

      <Post displayName="Salman Arefin"
        username="salman_arefin"
        verified
        text="The player that gets Potter out of this mess will have a fan in me forever"
        image="https://pbs.twimg.com/media/FpbG_eHXgAIRdgI?format=jpg&name=large"
        avatar="https://med.gov.bz/wp-content/uploads/2020/08/dummy-profile-pic.jpg"
      />
      <Post displayName="Sadia Tasnim"
        username="tasnim_sharna"
        verified
        text="Lets make a twitter clone"
        image="https://blog.logrocket.com/wp-content/uploads/2020/08/8-ways-deploy-react-app-free.png"
        avatar="https://us.123rf.com/450wm/apoev/apoev1903/apoev190300039/124427555-person-gray-photo-placeholder-woman-in-shirt-on-white-background.jpg?ver=6"
      />
      <Post displayName="Salman Arefin"
        username="salman_arefin"
        verified
        text="How is my setup ?"
        image="https://cdn.pixabay.com/photo/2020/01/26/20/14/computer-4795762__340.jpg"
        avatar="https://med.gov.bz/wp-content/uploads/2020/08/dummy-profile-pic.jpg"
      />
      <Post displayName="Shamima Akhter"
        username="shamima_akter"
        text="What can you do with a B.Tech degree ?"
        image="https://leverageedublog.s3.ap-south-1.amazonaws.com/blog/wp-content/uploads/2019/12/23174648/B-Tech-Degree.jpg"
        avatar="https://us.123rf.com/450wm/apoev/apoev1903/apoev190300039/124427555-person-gray-photo-placeholder-woman-in-shirt-on-white-background.jpg?ver=6"
      />
      <Post displayName="Rahinul Islam Mridul"
        username="iammridul"
        verified
        text="Keep the blue flag flying high"
        image="http://res.cloudinary.com/chelsea-production/image/upload/c_fit,h_630,w_1200/v1/site-assets/Backgrounds/Screensaver"
        avatar="https://med.gov.bz/wp-content/uploads/2020/08/dummy-profile-pic.jpg"
      />
      <Post displayName="Sadia Tasnim"
        username="tasnim_sharna"
        verified
        text="Lets make a twitter clone"
        image="https://blog.logrocket.com/wp-content/uploads/2020/08/8-ways-deploy-react-app-free.png"
        avatar="https://us.123rf.com/450wm/apoev/apoev1903/apoev190300039/124427555-person-gray-photo-placeholder-woman-in-shirt-on-white-background.jpg?ver=6"
      />
      <Post displayName="Salman Arefin"
        username="salman_arefin"
        verified
        text="Bring back Jose Mourinho to Chelsea"
        image="https://images.teamtalk.com/content/uploads/2023/02/21094212/Jose-Mourinho-Chelsea1.jpg"
        avatar="https://med.gov.bz/wp-content/uploads/2020/08/dummy-profile-pic.jpg"
      />
    </div>
  );
}

export default Feed;