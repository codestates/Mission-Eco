import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Modal from "../../components/Modal/Modal";
import imgUpload from "../../imges/imageUpload.png";
import {
  Form,
  Input,
  Select,
  FileInput,
  Button,
  ClickImg,
  ImgSelect,
} from "./LogAddFormStyle";

const LogAddForm = ({
  logs,
  addLog,
  openModal,
  setOpenModal,
  closeModalHandler,
  results,
  fileUploadHandler,
  selectedFile,
  fileSelectedHandler,
}) => {
  const isLogin = useSelector((state) => state.infoReducer.isLogin);
  //const openModal = useSelector((state) => state.infoReducer.isOpenModal);
  const logList = useSelector((state) => state.infoReducer.challengeLogList);
  const { challengeList } = logList;
  const userInfo = useSelector((state) => state.infoReducer.userInfo);
  const [selectMission, setSelectMission] = useState(false);
  const [addContents, setAddContents] = useState(false);
  const [uploadBtn, setUploadBtn] = useState("");
  const [errMsg, setErrMsg] = useState("위 항목을 먼저 입력해주세요.");
  const [modalMsg, setModalMsg] = useState("");
  const { challenge, contents } = logs;
  const { nickname } = userInfo;
  const missionName = challenge && challenge.split(",");
  useEffect(() => {}, [logs, openModal, modalMsg]);

  const onChange = (event) => {
    if (event.currentTarget === null) {
      return;
    }
    if (challengeList) event.preventDefault();
    addLog({ ...logs, [event.currentTarget.name]: event.currentTarget.value });

    setSelectMission(true);
  };

  const onChange2 = (event) => {
    if (event.currentTarget === null) {
      return;
    }
    event.preventDefault();
    addLog({ ...logs, [event.currentTarget.name]: event.currentTarget.value });
    setAddContents(true);
  };

  const errMsgHandler = () => {
    setErrMsg("미션 참여!");
    // dispatch(isOpenModal(!openModal));
    // setErrMsg("미션 참여!");
  };

  const modalHandler = () => {
    if (!isLogin) {
      setModalMsg("로그인이 필요합니다.");
      setOpenModal(!openModal);
    } else {
      if (results.length === 0) {
        return;
      }
      if (
        selectMission &&
        addContents &&
        selectedFile &&
        results.length !== 0 &&
        missionName[0] === results[0].label &&
        results[0].confidence > 0.8
      ) {
        setModalMsg(`해당 이미지는 ${results[0].label} 
        ${Math.floor(results[0].confidence * 100)}%로 업로드 가능합니다. `);
        setOpenModal(!openModal);
        setUploadBtn("업로드 하기");
        setErrMsg("참여가능!");
      } else {
        setModalMsg(`해당 이미지는 ${results[0].label}
        ${Math.floor(
          results[0].confidence * 100
        )}%이므로 업로드 할 수 없습니다. `);
        setOpenModal(!openModal);
        setUploadBtn("");
        setErrMsg("참여불가!");
      }
    }
  };

  return (
    <Form onSubmit={(e) => e.preventDefault()}>
      <Select
        name="challenge"
        placeholder={"challenge를 선택하세요."}
        value={challenge || "challenge"}
        onChange={onChange}
      >
        <option value="" hidden>
          challenge를 선택하세요.
        </option>
        {challengeList &&
          challengeList.map((mission) => {
            return (
              <option value={[mission.name, mission.id]} key={mission.id}>
                {mission.name ? mission.name : "미션 무라벨"}
              </option>
            );
          })}
      </Select>
      <Input
        type="text"
        name="nickname"
        placeholder={nickname || "nickname"}
        readOnly
        value={nickname || "nickname"}
      />
      <Input
        name="contents"
        placeholder="contents 최대 20글자까지 가능합니다."
        value={contents || ""}
        maxLength="20"
        //ref={contentsRef}
        onChange={onChange2}
      />
      {selectMission && addContents ? (
        <ImgSelect>
          <label htmlFor="file-input">
            <ClickImg src={imgUpload} alt="select img" />
          </label>
          <FileInput
            id="file-input"
            type="file"
            accept="image/*"
            onChange={fileSelectedHandler}
            onClick={errMsgHandler}
          ></FileInput>
        </ImgSelect>
      ) : (
        <ImgSelect>
          <label htmlFor="file-input">
            <ClickImg src={imgUpload} alt="select img" />
          </label>
          <FileInput id="file-input" accept="image/*"></FileInput>
        </ImgSelect>
      )}

      <Button onClick={modalHandler}>{errMsg}</Button>
      {openModal ? (
        <Modal
          msg={modalMsg}
          msg2={isLogin ? null : "로그인"}
          link={isLogin ? null : "/login"}
          closeModalHandler={closeModalHandler}
          uploadBtn={!uploadBtn ? null : uploadBtn}
          fileUploadHandler={fileUploadHandler}
        />
      ) : null}
    </Form>
  );
};

export default LogAddForm;
