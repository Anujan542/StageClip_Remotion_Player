/* eslint-disable */
import React, { useEffect, useState } from "react";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import * as LottiePlayer from "@lottiefiles/lottie-player";
import { isMobileOnly } from "react-device-detect";
import { useSelector, useDispatch } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import ButtonComponent from "kudos/component/buttonComponent";
import CloseIcon from "@material-ui/icons/Close";
import {
  Typography,
  Button,
  Card,
  IconButton,
  useMediaQuery,
} from "@material-ui/core";
import { HelloWorld } from "../../Remotioncomponents/HelloWorld";
import { Player } from "@remotion/player";
import { StageClipRemotion } from "app/main/StageClipRemotionComponents/HelloWorld";

const PreviewAwardVideo = ({ openPreviewVideo, handleClose }) => {
  const lottieJson = useSelector(({ awards }) => awards.awardInfo.lottieJson);
  const [openPreviewJson, setOpenPreviewJson] = useState("");
  const styles = (theme) => ({
    root: {
      borderRadius: "5px",
    },
    closeButton: {
      position: "absolute",
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });

  const DialogContent = withStyles((theme) => ({
    root: {
      width: "50vw",
      // height: '150px',
      padding: 0,
    },
  }))(MuiDialogContent);

  const DialogContentMobile = withStyles((theme) => ({
    root: {
      width: "100%",
      height: "100%",
      padding: "10px",
    },
  }))(MuiDialogContent);

  const DialogTitle = withStyles(styles)((props) => {
    const { classes, onClose, ...other } = props;
    return (
      <MuiDialogTitle disableTypography className={classes.root} {...other}>
        {onClose ? (
          <IconButton
            aria-label="close"
            className={classes.closeButton}
            onClick={onClose}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
        {/* <Typography className="font-bold" style={{ fontSize: '16px'}}>{children}</Typography>*/}
      </MuiDialogTitle>
    );
  });

  const isSmallDevice = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  return isSmallDevice ? (
    <Dialog fullScreen open={openPreviewVideo}>
      <div>
        <DialogTitle onClose={() => handleClose()} />
      </div>
      <DialogContentMobile>
        <div className="flex flex-col relative justify-between h-full">
          <div className="w-full flex-col pb-15  px-10">
            <div className="bg-custom-defaultBg h-2 w-full px-20 my-20" />
            <div className="items-center ">
              {/* <lottie-player
								autoplay
								controls
								mode="normal"
								src={JSON.stringify(lottieJson.default)}
								width="100%"
								height="100%"
							/> */}
              <Player
                component={StageClipRemotion}
                durationInFrames={2800}
                compositionWidth={1280}
                compositionHeight={720}
                fps={36}
                controls
                style={{
                  maxWidth: 700,
                  maxHeight: 400,
                }}
              />
            </div>
          </div>
        </div>
      </DialogContentMobile>
    </Dialog>
  ) : (
    <Dialog
      open={openPreviewVideo}
      onClose={handleClose}
      maxWidth={false}
      classes={{
        paper: "bg-transparent rounded-sm",
      }}
    >
      <DialogContent
        classes={{
          root: "p-0 first:pt-0",
        }}
      >
        <div className="w-full flex-col pb-15 h-full">
          <div className="items-center">
            {/* <lottie-player autoplay controls mode="normal" src={JSON.stringify(lottieJson.default)} /> */}
            <Player
              component={StageClipRemotion}
              durationInFrames={2800}
              compositionWidth={1280}
              compositionHeight={720}
              fps={36}
              controls
              style={{
                maxWidth: 700,
                maxHeight: 400,
              }}
            />
          </div>
        </div>

        {/* remotion player */}
      </DialogContent>
    </Dialog>
  );
};
export default PreviewAwardVideo;
