import React from "react";
import "../stylesheets/Sidebar.css";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import TagIcon from "@mui/icons-material/Tag";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import IconButton from "@mui/material/IconButton";
import { BsPencil } from "react-icons/bs";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__Icons">
        <Link to="/" style={{ color: "black", textDecoration: "none" }}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/2491px-Twitter-logo.svg.png"
            alt="Twitter logo"
            className="sidebar__twitterLogo"
          ></img>
        </Link>
        <Link to="/" style={{ color: "black", textDecoration: "none" }}>
          <div className="sidebar__Home sidebar__Icon">
            <IconButton
              className="sidebar__IconButton"
              sx={{
                "&:hover": {
                  backgroundColor: "#E5E4E2",
                },
              }}
              disableRipple={true}
            >
              <HomeOutlinedIcon fontSize="large" />
              <p>Home</p>
            </IconButton>
          </div>
        </Link>
        <Link to="/explore" style={{ color: "black", textDecoration: "none" }}>
          <div className="sidebar__Explore sidebar__Icon">
            <IconButton
              className="sidebar__IconButton"
              sx={{
                "&:hover": {
                  backgroundColor: "#E5E4E2",
                },
              }}
              disableRipple={true}
            >
              <TagIcon fontSize="large" />
              <p>Explore</p>
            </IconButton>
          </div>
        </Link>
        <div className="sidebar__Notifications sidebar__Icon">
          <IconButton
            className="sidebar__IconButton"
            sx={{
              "&:hover": {
                backgroundColor: "#E5E4E2",
              },
            }}
            disableRipple={true}
          >
            <NotificationsOutlinedIcon fontSize="large" />
            <p>Notifications</p>
          </IconButton>
        </div>
        <div className="sidebar__Messages sidebar__Icon">
          <IconButton
            className="sidebar__IconButton"
            sx={{
              "&:hover": {
                backgroundColor: "#E5E4E2",
              },
            }}
            disableRipple={true}
          >
            <MailOutlineIcon fontSize="large" />
            <p>Messages</p>
          </IconButton>
        </div>
        <div className="sidebar__Bookmarks sidebar__Icon">
          <IconButton
            className="sidebar__IconButton"
            sx={{
              "&:hover": {
                backgroundColor: "#E5E4E2",
              },
            }}
            disableRipple={true}
          >
            <BookmarkBorderOutlinedIcon fontSize="large" />
            <p>Bookmarks</p>
          </IconButton>
        </div>
        <div className="sidebar__Lists sidebar__Icon">
          <IconButton
            className="sidebar__IconButton"
            sx={{
              "&:hover": {
                backgroundColor: "#E5E4E2",
              },
            }}
            disableRipple={true}
          >
            <ArticleOutlinedIcon fontSize="large" />
            <p>Lists</p>
          </IconButton>
        </div>
        <div className="sidebar__Profile sidebar__Icon">
          <IconButton
            className="sidebar__IconButton"
            sx={{
              "&:hover": {
                backgroundColor: "#E5E4E2",
              },
            }}
            disableRipple={true}
          >
            <PersonOutlinedIcon fontSize="large" />
            <p>Profile</p>
          </IconButton>
        </div>
        <div className="sidebar__More sidebar__Icon">
          <IconButton
            className="sidebar__IconButton"
            sx={{
              "&:hover": {
                backgroundColor: "#E5E4E2",
              },
            }}
            disableRipple={true}
          >
            <MoreHorizIcon fontSize="large" className="sidebar__More__Icon" />
            <p>More</p>
          </IconButton>
        </div>
        <h3 className="sidebar__Tweet desk">Tweet</h3>
        <BsPencil className="mobile" />
      </div>
      <div className="sidebar__Avatar">
        <IconButton
          className="sidebar__IconButton"
          sx={{
            "&:hover": {
              backgroundColor: "#E5E4E2",
            },
          }}
          disableRipple={true}
        >
          <img
            src="https://pbs.twimg.com/media/E2Rqt-cXoAM0Yzd.jpg"
            alt="Hasbullah"
            className="sidebar__AvatarImage"
          />
          <div className="sidebar__AvatarInfo">
            <div>
              <p className="avatar__name">Hasbullah</p>
              <p className="avatar__userName">@Hasbullah</p>
            </div>
            <MoreHorizIcon />
          </div>
        </IconButton>
      </div>
    </div>
  );
}

export default Sidebar;
