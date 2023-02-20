import React from 'react';
import "./Feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";

function Feed() {
  return (
    <div className="feed">
      <div className="feed_header">
        <h2>Home</h2>
      </div>

      <TweetBox />

      <Post displayName="Salman Arefin"
        username="salman_arefin"
        verified
        text="The player that gets Potter out of this mess will have a fan in me forever"
        image="https://pbs.twimg.com/media/FpbG_eHXgAIRdgI?format=jpg&name=large"
      />
      <Post displayName="Sadia Tasnim"
        username="tasnim_sharna"
        verified
        text="Lets make a twitter clone"
        image="https://blog.logrocket.com/wp-content/uploads/2020/08/8-ways-deploy-react-app-free.png"
      />
      <Post displayName="Salman Arefin"
        username="salman_arefin"
        verified
        text="The player that gets Potter out of this mess will have a fan in me forever"
        image="https://pbs.twimg.com/media/FpbG_eHXgAIRdgI?format=jpg&name=large"
      />
      <Post displayName="Sadia Tasnim"
        username="tasnim_sharna"
        verified
        text="Lets make a twitter clone"
        image="https://blog.logrocket.com/wp-content/uploads/2020/08/8-ways-deploy-react-app-free.png"
      />
      <Post displayName="Salman Arefin"
        username="salman_arefin"
        verified
        text="The player that gets Potter out of this mess will have a fan in me forever"
        image="https://pbs.twimg.com/media/FpbG_eHXgAIRdgI?format=jpg&name=large"
      />
      <Post displayName="Sadia Tasnim"
        username="tasnim_sharna"
        verified
        text="Lets make a twitter clone"
        image="https://blog.logrocket.com/wp-content/uploads/2020/08/8-ways-deploy-react-app-free.png"
      />
      <Post displayName="Salman Arefin"
        username="salman_arefin"
        verified
        text="The player that gets Potter out of this mess will have a fan in me forever"
        image="https://pbs.twimg.com/media/FpbG_eHXgAIRdgI?format=jpg&name=large"
      />
      <Post displayName="Sadia Tasnim"
        username="tasnim_sharna"
        verified
        text="Lets make a twitter clone"
        image="https://blog.logrocket.com/wp-content/uploads/2020/08/8-ways-deploy-react-app-free.png"
      />
    </div>
  );
}

export default Feed;