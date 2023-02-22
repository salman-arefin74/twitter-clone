import React from "react";
import "./Sidebar.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Button } from "@material-ui/core"

function Sidebar() {
  return (
    <div className="sidebar">
      <TwitterIcon className="twitterIcon" />
      <SidebarOption active Icon={HomeIcon} text="Home" link="/" />
      <SidebarOption Icon={SearchIcon} text="Explore" link="/explore" />
      <SidebarOption Icon={NotificationsNoneIcon} text="Notifications" link="/notifications" />
      <SidebarOption Icon={MailOutlineIcon} text="Inbox" link="/inbox" />
      <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks" link="/bookmarks" />
      <SidebarOption Icon={ListAltIcon} text="Lists" link="/lists" />
      <SidebarOption Icon={PermIdentityIcon} text="Profile" link="/profile" />
      <SidebarOption Icon={MoreHorizIcon} text="More" link="/more" />

      <Button variant="outlined" className="sidebarTweet" fullWidth>Tweet</Button>



    </div>
  );
}

export default Sidebar