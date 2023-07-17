import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Post.scss";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Comments from "../comments/Comments";

const Post = ({ post }) => {
  const [liked, setliked] = useState(false);
  const [openComments, setopenComments] = useState(false);
  console.log(liked);
  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="userInfo">
            <img src={post.profilePic} alt="" />
            <div className="details">
              <Link
                to={`/profile/${post.userId}`}
                style={{ textDecoration: "none" }}
              >
                <span className="name">{post.name}</span>
              </Link>
              <span className="date">1 min ago</span>
            </div>
          </div>
          <MoreHorizIcon />
        </div>
        <div className="content">
          <p className="desc">{post.desc}</p>
          <img src={post.img} alt="" />
        </div>
        <div className="info">
          <div
            className={liked ? "item liked-item" : "item"}
            onClick={() => setliked(!liked)}
          >
            {liked ? <FavoriteOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
            <span> 12 Likes</span>
          </div>
          <div className="item" onClick={() => setopenComments(!openComments)}>
            <TextsmsOutlinedIcon />
            12 comments
          </div>
          <div className="item">
            <ShareOutlinedIcon />
            Share
          </div>
        </div>
        {openComments && <Comments />}
      </div>
    </div>
  );
};

export default Post;
