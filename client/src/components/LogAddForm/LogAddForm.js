import React, { useRef } from "react";
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
  setImg,
  fileSelectedHandler,
}) => {
  const userInfo = useSelector((state) => state.infoReducer.userInfo);

  const challengeRef = useRef();
  const contentsRef = useRef();
  const { challenge, contents } = logs;
  const { nickname } = userInfo;
  console.log(userInfo);
  const changeImage = (e) => {
    e.preventDefault();

    const imgSrc = e.target.value;
    console.log(imgSrc);
    setImg(imgSrc);
  };

  const resetInput = (e) => {
    e.target.value = "";
  };

  const onChange = (event) => {
    if (event.currentTarget == null) {
      return;
    }
    event.preventDefault();
    addLog({ ...logs, [event.currentTarget.name]: event.currentTarget.value });
  };

  return (
    <Form onSubmit={(e) => e.preventDefault()}>
      <Select
        name="challenge"
        placeholder="challenge를 선택해주세요."
        value={challenge}
        ref={challengeRef}
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
        readonly
        value={nickname || ""}
        //ref={nicknameRef}
        //onChange={onChange}
      />
      <Input
        name="contents"
        placeholder="contents"
        value={contents || ""}
        ref={contentsRef}
        onChange={onChange}
      />
      <ImgSelect>
        <label for="file-input">
          <ClickImg src={imgUpload} alt="select img" />
        </label>
        <FileInput
          id="file-input"
          type="file"
          accept="image/*"
          onChange={fileSelectedHandler}
        ></FileInput>
      </ImgSelect>

      <Button>업로드 하기!</Button>
    </Form>
  );
};

export default LogAddForm;
