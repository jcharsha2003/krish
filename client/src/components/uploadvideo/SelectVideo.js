import {
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  Slide,
  Button,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import PublishIcon from "@mui/icons-material/Publish";
  import React, { useState } from "react";
  import { useAppContext } from "../../context/AppContextProvider";
  import "./styles.css";
  import UploadVideo from "./UploadVideo";
  
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  
  const SelectVideo = () => {
    const { showUploadVideo, setShowUploadVideo } = useAppContext();
  
    const [video, setVideo] = useState(null);
  
    const handleVideoChange = (e) => {
      if (e.target.files[0]) {
        setVideo(e.target.files[0]);
      }
    };
  
    console.log(video);
  
    const handleClose = () => setShowUploadVideo(false);
  
    return (
      <div>
        <Dialog
          TransitionComponent={Transition}
          open={showUploadVideo}
          keepMounted
        >
          {video ? (
            <UploadVideo
              video={video}
              setVideo={setVideo}
              handleClose={handleClose}
            />
          ) : (
            <>
              <div className="SelectVideo__header">
                <DialogTitle>Upload Video</DialogTitle>
                <CloseIcon className="selectvideo__closeIcon" onClick={handleClose} />
              </div>
  
              <Divider />
  
              <DialogContent className="selectvideo__dialog">
                <div className="selectvideo__publishWrap">
                  <PublishIcon className="selectvideo__publishIcon" />
                </div>
  
                <div className="selectvideo__texts">
                  <p className="sv__texts__title">
                    Drag and drop video files to upload
                  </p>
  
                  <p className="sv__texts__subtitle">
                    Your videos will be private until you publish them.
                  </p>
                </div>
  
                <input
                  onChange={handleVideoChange}
                  type="file"
                  className="custom-file-input"
                />
  
                <p className="sv__texts__prpo">
                  By submitting your videos to YouTube, you acknowledge that you
                  agree to YouTube's Terms of Service and Community Guidelines.
                  Please be sure not to violate others' copyright or privacy
                  rights. Learn more
                </p>
              </DialogContent>
            </>
          )}
        </Dialog>
      </div>
    );
  };
  
  export default SelectVideo;