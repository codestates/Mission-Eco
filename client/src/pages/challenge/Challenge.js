import React, { useState } from "react";
import axios from "axios";
import { Container, H1, Input, Img, UploadBtn } from "./ChallengeStyle";

function Challenge() {
  const [selectedFile, setSelectedFile] = useState(null);

  const fileSelectedHandler = (e) => {
    console.log(e.target.files[0]);
    setSelectedFile(URL.createObjectURL(e.target.files[0]));
  };

  const fileUploadHandler = () => {
    const fd = new FormData();
    fd.append("img", selectedFile, selectedFile.name, fd);
    axios
      .post("https://localhost:4000/challenge/post", {
        userId: 5,
        challengeId: 6,
        img:
          "https://cdn.discordapp.com/attachments/840550010826915841/901470411777273886/3e12b505019f4367a6be4b8d58a5bf65.jpg",
        contents: "짱짱",
      })
      .then((res) => {
        console.log(res);
      });
  };
  return (
    <Container>
      <H1>hello:)</H1>
      <Input type="file" onChange={fileSelectedHandler}></Input>
      <Img alt="sample" src={selectedFile} style={{ margin: "auto" }} />
      <UploadBtn onClick={fileUploadHandler}>upload</UploadBtn>
    </Container>
  );
}

export default Challenge;
