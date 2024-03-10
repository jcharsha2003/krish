import React, { useState } from "react";
import "./styles.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import ReplyIcon from "@mui/icons-material/Reply";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";

import VideoSmall from "../videosmall/VideoSmall.js";
import { useNavigate } from "react-router-dom"; // Replace useHistory with useNavigate
import moment from "moment";
import { useAppContext } from "../../context/AppContextProvider.js";

const Watch = ({ video }) => {
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const [showDesc, setShowDesc] = useState(false);

  const { videos } = useAppContext();

  const formatted = moment
    .unix(video?.timestamp?.seconds)
    .format("MMM DD, YYYY  ");
  return (
    <div className="watch">
      <div className="watch__wrap">
        <div className="watch__left">
          <video className="watch__video" autoplay controls>
            <source src={video.videoURL} type="video/mp4" />
          </video>

          <div className="watch__leftBtm">
            <h1 className="watch__title">{video.title}</h1>

            <div className="watch__videoInfo">
              <div className="watch__videoInfoLeft">
                <p className="videothumb__text">123 views • {formatted}</p>
              </div>

              <div className="watch__videoInfoRight">
                <div className="watch__likeContainer">
                  <div className="watch__likeWrap">
                    <div className="watch__likeBtnContainer color--gray">
                      <ThumbUpAltIcon className="watch__icon" />
                      <p>15k</p>
                    </div>

                    <div className="watch__likeBtnContainer color--gray">
                      <ThumbDownAltIcon className="watch__icon" />
                      <p>200</p>
                    </div>
                  </div>

                  <div className="watch__likeDislikes" />
                </div>

                <div className="watch__likeBtnContainer color--gray">
                  <ReplyIcon className="watch__icon share-icon" />
                  <p>SHARE</p>
                </div>

                <div className="watch__likeBtnContainer color--gray">
                  <PlaylistAddIcon className="watch__icon play-addIcon" />
                  <p>SAVE</p>
                </div>

                <div className="watch__likeBtnContainer color--gray">
                  <MoreHorizIcon className="watch__icon play-addIcon" />
                  <p>MORE</p>
                </div>
              </div>
            </div>

            <div className="watch__details">
              <div className="watch__detailsContainer">
                <div className="videothumb__details watch__avatarWrap">
                  <div className="videothumb__channel">
                    <h1 className="videothumb__title">{video.channelName}</h1>
                  </div>
                </div>

                <div className="watch__description">
                  <p style={{ maxHeight: showDesc && "100%" }}>
                    {video.description}
                  </p>
                  <p
                    className="watch__showMore"
                    onClick={() => setShowDesc(!showDesc)}
                  >
                    SHOW {showDesc ? "LESS" : "MORE"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="watch__right">
          {videos.map((item) => (
            <VideoSmall key={item.id} video={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Watch;
