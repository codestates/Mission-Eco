import React, { useRef } from "react";
import { Button } from "../Preview/PreviewStyle";

import { Form, Input, Select, FileInput } from "./LogAddFormStyle";

const LogAddForm = ({
  logs,
  addLog,
  resetLog,
  setImg,
  fileSelectedHandler,
}) => {
  const nicknameRef = useRef();
  const challengeRef = useRef();
  const contentsRef = useRef();

  const { nickname, challenge, contents, fileName, fileURL } = logs;

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
    <Form>
      <Select
        name="challenge"
        placeholder="challenge"
        value={challenge}
        ref={challengeRef}
        onChange={onChange}
      >
        <option value="플로깅">플로깅</option>
        <option value="용기내">용기내</option>
        <option value="캔뿌셔">캔뿌셔</option>
      </Select>
      <Input
        type="text"
        name="nickname"
        placeholder="nickname"
        value={nickname || ""}
        ref={nicknameRef}
        onChange={onChange}
      />
      <Input
        name="contents"
        placeholder="contents"
        value={contents || ""}
        ref={contentsRef}
        onChange={onChange}
      />
      <FileInput
        type="file"
        accept="image/*"
        onChange={fileSelectedHandler}
      ></FileInput>
    </Form>
  );
};

export default LogAddForm;
