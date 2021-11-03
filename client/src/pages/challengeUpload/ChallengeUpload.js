import React, { useState } from "react";
import { upload } from "../../utils/imgUploader";
import { useSelector } from "react-redux";
import Uploader from "../../components/Upload/Uploader/Uploader";

import axios from "axios";
import {
  Container,
  UploaderWrapper,
  H1,
  Input,
  Img,
  UploadBtn,
  InputBox,
  ServicesContiner,
} from "./ChallengeUploadStyle";
import Preview from "../../components/Preview/Preview";
import LogAddForm from "../../components/LogAddForm/LogAddForm";

function ChallengeUpload() {
  const userInfo = useSelector((state) => state.infoReducer.userInfo);
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadFile, setUploadFile] = useState(null);
  const [img, setImg] = useState("");
  const [logs, setLogs] = useState({});
  const addLog = (log) => {
    setLogs(log);
  };
  const resetLog = (log) => {
    setLogs({});
  };

  const imageModelURL =
    "https://teachablemachine.withgoogle.com/models/A8TWqY6z6/model.json";

  const fileSelectedHandler = (e) => {
    console.log(e.target.files[0]);
    setSelectedFile(URL.createObjectURL(e.target.files[0]));
    setUploadFile(e.target.files[0]);
    URL.revokeObjectURL(selectedFile);
  };

  const fileUploadHandler = async () => {
    const uploaded = await upload(uploadFile);
    console.log(uploaded);
    //fd.append("img", selectedFile, selectedFile.name, fd);
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/challenge-log`,
        {
          userId: userInfo.id,
          challengeId: 1,
          img: `${uploaded.url}`,
          contents: `${logs.contents}`,
        },
        { "Content-Type": "multipart/form-data" }
      )
      .then((res) => {
        console.log(res);

        URL.revokeObjectURL(selectedFile);
        setImg(res.data.new_post.img);
      });
  };
  return (
    <ServicesContiner>
      <Container>
        <UploaderWrapper>
          <Preview
            logs={logs}
            selectedFile={selectedFile}
            imageModelURL={imageModelURL}
            fileUploadHandler={fileUploadHandler}
          />
          <LogAddForm
            logs={logs}
            addLog={addLog}
            resetLog={resetLog}
            setImg={setImg}
            fileSelectedHandler={fileSelectedHandler}
          />
        </UploaderWrapper>
        <Uploader setImg={setImg} fileSelectedHandler={fileSelectedHandler} />
        {/** <Classifier
        img={img}
        imageModelURL={imageModelURL}
        selectedFile={selectedFile}
      />*/}
      </Container>
    </ServicesContiner>
  );
}

export default ChallengeUpload;
