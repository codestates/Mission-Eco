import React, { useState } from "react";
import { upload } from "../../utils/imgUploader";
import { useSelector } from "react-redux";
import axios from "axios";
import {
  Container,
  H1,
  Input,
  Img,
  UploadBtn,
  InputBox,
} from "./ChallengeUploadStyle";

function ChallengeUpload() {
  const userInfo = useSelector((state) => state.infoReducer.userInfo);
  console.log("img", userInfo);
  const [selectedFile, setSelectedFile] = useState(null);
  const [img, setImg] = useState("");

  const fileSelectedHandler = (e) => {
    console.log(e.target.files[0]);
    setSelectedFile(e.target.files[0]);
  };

  const fileUploadHandler = async () => {
    const uploaded = await upload(selectedFile);
    console.log(uploaded);
    //fd.append("img", selectedFile, selectedFile.name, fd);
    axios
      .post(
        "https://localhost:4000/challenge/post",
        {
          userId: userInfo.id,
          challengeId: 1,
          img: `${uploaded.url}`,
          contents: "할수있다!",
        },
        { "Content-Type": "multipart/form-data" }
      )
      .then((res) => {
        console.log(res);
        setImg(res.data.data.img);
      });
  };
  return (
    <Container>
      <H1>hello:)</H1>
      <InputBox>
        <Input
          type="file"
          accept="image/*"
          onChange={fileSelectedHandler}
        ></Input>
      </InputBox>
      <UploadBtn onClick={fileUploadHandler}>upload</UploadBtn>
      <Img alt="sample" src={selectedFile} style={{ margin: "auto" }} />

      <Img src={img} />
    </Container>
  );
}

export default ChallengeUpload;
