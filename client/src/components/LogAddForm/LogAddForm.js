import React, { useRef, useState, useEffect } from "react";
import { useSelector } from "react-redux";
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
  resetLog,
  Img,
  fileUploadHandler,
  selectedFile,
  fileSelectedHandler,
}) => {
  const isLogin = useSelector((state) => state.infoReducer.isLogin);
  const userInfo = useSelector((state) => state.infoReducer.userInfo);
  const [selectMission, setSelectMission] = useState(false);
  const [addContents, setAddContents] = useState(false);
  const challengeRef = useRef();
  const contentsRef = useRef();
  const { challenge, contents } = logs;
  const { nickname } = userInfo;
  console.log(userInfo);

  useEffect((el) => {}, [logs]);
  console.log(challenge, contents, "loadddform");
  const resetInput = (e) => {
    resetLog();
  };

  const onChange = (event) => {
    if (event.currentTarget === null) {
      return;
    }
    event.preventDefault();
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

  return (
    <Form onSubmit={(e) => e.preventDefault()}>
      <Select
        name="challenge"
        placeholder={"challenge를 선택해주세요."}
        value={challenge || "challenge"}
        //ref={challengeRef}
        onChange={onChange}
      >
        <option value="선택">챌린지 선택</option>
        <option value="플로깅">플로깅</option>
        <option value="용기내">용기내</option>
        <option value="캔뿌셔">캔뿌셔</option>
      </Select>
      <Input
        type="text"
        name="nickname"
        placeholder={nickname || "nickname"}
        readOnly
        value={nickname || "nickname"}

        //ref={nicknameRef}
        //onChange={onChange}
      />
      <Input
        name="contents"
        placeholder="contents"
        value={contents || ""}
        //ref={contentsRef}
        onChange={onChange2}
      />
      <ImgSelect>
        <label htmlFor="file-input">
          <ClickImg src={imgUpload} alt="select img" />
        </label>
        <FileInput
          id="file-input"
          type="file"
          accept="image/*"
          onChange={fileSelectedHandler}
        ></FileInput>
      </ImgSelect>
      {/**로그인 true && 위에칸 모두 채워져 있으면 && 예측 결과 80퍼 이상시에만 업로드 가능 */}
      {selectMission && addContents && selectedFile && isLogin ? (
        <Button onClick={fileUploadHandler}>업로드 하기!</Button>
      ) : (
        <Button onClick={resetInput}>업로드전 위 항목을 채워주세요!</Button>
      )}
    </Form>
  );
};

export default LogAddForm;
