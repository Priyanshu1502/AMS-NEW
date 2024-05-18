import React, { useState } from "react";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import { Button, Divider, TextField } from "@mui/material";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import EventIcon from "@mui/icons-material/Event";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import { styled } from "@mui/material/styles";
import ImageInput from "./ImageInput";
import { Modal } from "@mui/joy";
import ImageCropper from "./ImageCropper";
import PostWithImage from "./PostWithImage";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const CreatePostModal = () => {
  const [openPicker, setOpenPicker] = useState(false);
  const [text, setText] = useState("");
  const [image, setImage] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [imgAfterCrop, setImageAfterCrop] = useState("");
  const [currentPage, setCurrentPage] = useState("choose-img");
  const [post, setPost] = useState(false);

  const modalOpen = () => {
    if (cropDone == dataUrl) {
      setPost(true);
    }
  };

  const cropDone = (imgCropped) => {
    const canvasEle = document.createElement("canvas");
    canvasEle.width = imgCropped.width;
    canvasEle.height = imgCropped.height;

    const context = canvasEle.getContext("2d");

    let imageObj1 = new Image();
    imageObj1.src = image;
    imageObj1.onload = function () {
      context.drawImage(
        imageObj1,
        imgCropped.x,
        imgCropped.y,
        imgCropped.width,
        imgCropped.height,
        0,
        0,
        imgCropped.width,
        imgCropped.height
      );
      const dataURL = canvasEle.toDataURL("image/jpeg");
      console.log("data", dataURL);

      setImageAfterCrop(dataURL);
      setCurrentPage("img-cropped");
    };
  };

  const cropCancel = () => {
    setCurrentPage("choose-img");
    setImage("");
  };

  const onImageSelected = (selectedImg) => {
    setImage(selectedImg);
    setOpenModal(true);
    setCurrentPage("crop-img");
  };

  const addEmoji = (e) => {
    const sym = e.unified.split("_");
    console.log(sym);
    const codeArray = [];
    sym.forEach((element) => codeArray.push("0x" + element));
    let emoji = String.fromCodePoint(...codeArray);
    setText(text + emoji);
  };

  return (
    <div>
      <Sheet
        variant="outlined"
        sx={{
          borderRadius: "md",
          p: 3,
          boxShadow: "lg",
          msOverflowX: "none",
          msOverflowY: "scroll",
          maxHeight: "100vh",
          maxWidth: "100vh",
        }}
      >
        <ModalClose variant="plain" sx={{ m: 1 }} />

        <Typography
          component="h2"
          id="modal-title"
          level="h4"
          textColor="inherit"
          fontWeight="lg"
          mb={1}
          marginRight={20}
        >
          What's on your mind.
        </Typography>

        <TextField
          multiline
          variant="standard"
          rows={10}
          fullWidth
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <Button
          startIcon={<InsertEmoticonIcon />}
          onClick={() => setOpenPicker(!openPicker)}
        ></Button>
        {openPicker && (
          <div className="">
            <Picker data={data} onEmojiSelect={addEmoji} maxFrequentRows={0} />
          </div>
        )}
        <div className="mt-3 flex flex-row">
          <div>
            {currentPage === "choose-img" ? (
              <ImageInput onImageSelected={onImageSelected} />
            ) : currentPage === "crop-img" ? (
              <Modal
                open={openModal}
                image={image}
                onClose={() => setOpenModal(false)}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  bgcolor: "white",
                }}
              >
                <ImageCropper
                  image={image}
                  cropDone={cropDone}
                  cropCancel={cropCancel}
                />
              </Modal>
            ) : (
              <div>
                <img src={imgAfterCrop} alt="cropped-img"></img>
              </div>
            )}
          </div>

          <Button startIcon={<EventIcon />}></Button>
          <Button startIcon={<InsertDriveFileIcon />}></Button>
        </div>
        <Divider />
        <div className="flex items-center">
          <Button
            variant="contained"
            sx={{
              marginTop: "1rem",
              width: "10rem",
              marginLeft: "12rem",
            }}
          >
            Post
          </Button>
        </div>
      </Sheet>
    </div>
  );
};

export default CreatePostModal;
