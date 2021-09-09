import React from "react";
import "../assets/styles/components/sidebar.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import SidebarOpt from "./sidebarOpt";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Button } from "@material-ui/core";

function sidebar() {
  return (
    <div>
      <TwitterIcon className="sidebar__twitterIcon" />
      <SidebarOpt Icon={HomeIcon} active={true} text="Home" />
      <SidebarOpt Icon={SearchIcon} text="Explore" />
      <SidebarOpt Icon={NotificationsIcon} text="Notification" />
      <SidebarOpt Icon={MailOutlineIcon} text="Mail" />
      <SidebarOpt Icon={BookmarkBorderIcon} text="Book" />
      <SidebarOpt Icon={ListAltIcon} text="List" />
      <SidebarOpt Icon={PermIdentityIcon} text="Profile" />
      <SidebarOpt Icon={MoreHorizIcon} text="More" />
      <Button variant="outlined" className="sidebar__tweet" fullWidth>
        Tweet
      </Button>
    </div>
  );
}

export default sidebar;
