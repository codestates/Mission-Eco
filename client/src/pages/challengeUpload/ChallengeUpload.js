/*eslint-disable */
import React, { useEffect, useState } from "react";
import { upload } from "../../utils/imgUploader";
import { useSelector, useDispatch } from "react-redux";
import { getChallengeLogList } from "../../Redux/actions";
import axios from "axios";
import {
  ChallengeUploadCT,
  Container,
  UploaderWrapper,
  Button,
  BtnWrapper,
  ServicesContiner,
  UploadH2,
} from "./ChallengeUploadStyle";

import Preview from "../../components/Preview/Preview";
import LogAddForm from "../../components/LogAddForm/LogAddForm";
import Modal from "../../components/Modal/Modal";

function ChallengeUpload() {
  const userInfo = useSelector((state) => state.infoReducer.userInfo);
  const dispatch = useDispatch();
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadFile, setUploadFile] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [isVideo, setIsVideo] = useState(false);
  const [results, setResults] = useState([]);
  const [isUpload, setIsUpload] = useState(false);
  const [img, setImg] = useState("");
  const [logs, setLogs] = useState({});

  useEffect(() => {
    dispatch(getChallengeLogList());
  }, [isVideo, results]);

  const closeModalHandler = () => {
    setOpenModal(!openModal);
  };

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
    "https://teachablemachine.withgoogle.com/models/LqVCsScNs/model.json";

  const fileSelectedHandler = (e) => {
    if (e.target.files.length !== 0) {
      setSelectedFile(URL.createObjectURL(e.target.files[0]));
      setUploadFile(e.target.files[0]);
      // URL.revokeObjectURL(selectedFile);
    } else {
      return;
    }
  };

  const fileUploadHandler = async () => {
    const missionName = logs.challenge.split(",");
    closeModalHandler();
    setIsUpload(true);
    const uploaded = await upload(uploadFile);

    axios
      .post(
        `${process.env.REACT_APP_API_URL}/challenge-log`,
        {
          userId: userInfo.id,
          challengeId: missionName[1],
          img: `${uploaded.secure_url}`,
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
      })
      .then(async () => {
        await axios
          .post(
            `${process.env.REACT_APP_API_URL}/badge`,
            {
              challengeId: missionName[1],
            },
            {
              withCredentials: true,
            }
          )
          .then((res) => {
            if (res.status === 201) {
              return;
            }
          })
          .catch((err) => console.log(err));
      });
  };

  return (
    <ChallengeUploadCT>
      <ServicesContiner>
        <Container>
          <UploadH2>챌린지 업로드 미리보기</UploadH2>
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
              closeModalHandler={closeModalHandler}
              openModal={openModal}
              setOpenModal={setOpenModal}
            />
          </UploaderWrapper>
          {isUpload ? (
            <Modal
              isUpload={isUpload}
              msg={"미션참여완료!"}
              msg3={"업로드중... 곧 모달창이 닫혀요!"}
              oncloseModalHandlerClick={closeModalHandler}
            />
          ) : null}
        </Container>
      </ServicesContiner>
    </ChallengeUploadCT>
  );
}

export default ChallengeUpload;
