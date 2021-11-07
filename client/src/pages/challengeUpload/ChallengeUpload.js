import React, { useEffect, useState } from "react";
import { upload } from "../../utils/imgUploader";
import { useSelector } from "react-redux";
import Modal from "../../components/Modal/Modal";
import axios from "axios";
import {
  ChallengeUploadCT,
  Container,
  UploaderWrapper,
  Button,
  Input,
  BtnWrapper,
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
  const [isVideo, setIsVideo] = useState(false);
  const [results, setResults] = useState([]);
  const [isUpload, setIsUpload] = useState(false);
  const [img, setImg] = useState("");
  const [logs, setLogs] = useState({});

  useEffect(() => {}, [isVideo, results]);

  const addLog = (log) => {
    setLogs(log);
  };

  const resetLog = (log) => {
    setResults([]);
    setLogs({});
    setSelectedFile(null);
    setUploadFile(null);
  };

  const clickVideoHandler = () => {
    setIsVideo(true);
    resetLog();
  };
  const clickImgHandler = () => {
    setIsVideo(false);
    resetLog();
  };

  const imageModelURL =
    "https://teachablemachine.withgoogle.com/models/961H1RAK0/model.json";

  const fileSelectedHandler = (e) => {
    setSelectedFile(URL.createObjectURL(e.target.files[0]));
    setUploadFile(e.target.files[0]);
    URL.revokeObjectURL(selectedFile);
  };

  const fileUploadHandler = async () => {
    setIsUpload(true);
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
        URL.revokeObjectURL(selectedFile);
        setImg(res.data.new_post.img);
        setResults([]);
        resetLog();
        setIsUpload(false);
      });
  };
  return (
    <ChallengeUploadCT>
      <ServicesContiner>
        <Container>
          <h2>챌린지 업로드 미리보기</h2>
          <BtnWrapper>
            <Button onClick={clickVideoHandler}>Video Click!</Button>
            <Button onClick={clickImgHandler}>Image Click!</Button>
          </BtnWrapper>
          <UploaderWrapper>
            <Preview
              logs={logs}
              selectedFile={selectedFile}
              imageModelURL={imageModelURL}
              isVideo={isVideo}
              results={results}
              setResults={setResults}
            />
            <LogAddForm
              logs={logs}
              addLog={addLog}
              resetLog={resetLog}
              setImg={setImg}
              results={results}
              selectedFile={selectedFile}
              fileSelectedHandler={fileSelectedHandler}
              fileUploadHandler={fileUploadHandler}
            />
          </UploaderWrapper>
          {isUpload ? <Modal msg={"참여완료!"} setState={false} /> : null}
          {/**  <Uploader setImg={setImg} fileSelectedHandler={fileSelectedHandler} /><Classifier
          img={img}
          imageModelURL={imageModelURL}
          selectedFile={selectedFile}
        /> */}
        </Container>
      </ServicesContiner>
    </ChallengeUploadCT>
  );
}

export default ChallengeUpload;
