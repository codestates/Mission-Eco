import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { upload } from "../../../../utils/imgUploader";
import axios from "axios";
import {
  Container,
  Title,
  Form,
  TitleInput,
  FileInputContainer,
  TextArea,
  SelectWrapper,
  TitleWrapper,
  TAWrapper,
  Btn,
} from "./AddChallengeStyle";

axios.defaults.withCredentials = true;

const AddChallenge = (props) => {
  const [chName, setChName] = useState(null);
  const [selectImg, setSelectImg] = useState(null);
  const [chContents, setChContents] = useState(null);
  const [chLevel, setChLevel] = useState(null);
  const [chUpload, setChUpload] = useState(false);
  const history = useHistory();

  const changeNameHandler = (e) => {
    setChName(e.target.value);
  };
  const fileSelectHandler = (e) => {
    if (e.target.files.length !== 0) {
      setSelectImg(e.target.files[0]);
    } else {
      return;
    }
  };
  console.log("ing--", selectImg);
  const changeContentsHandler = (e) => {
    setChContents(e.target.value);
  };
  const changeLevelHandler = (e) => {
    setChLevel(Number(e.target.value));
  };
  const changeUploadHandler = (e) => {
    if (e.target.value === "true") {
      setChUpload(true);
    } else {
      setChUpload(false);
    }
  };
  const fileUploadHandler = async () => {
    console.log("img--", selectImg);
    const uploaded = await upload(selectImg);
    console.log("uploaded--", uploaded);
    /**axios
      .post(
        `${process.env.REACT_APP_API_URL}/challenge`,
        {
          img: `${uploaded.url}`,
          name: chName,
          contents: chContents,
          level: chLevel,
          upload: chUpload,
        },
        { "Content-Type": "multipart/form-data" }
      )
      .then((res) => {
        if (res.status === 201) {
          history.push("/admin/log");
        }
      }); */
  };
  return (
    <Container>
      <Title>챌린지 추가</Title>
      <Form>
        <TitleWrapper>
          <TitleInput
            type="text"
            name="name"
            placeholder="제목을 입력하세요..."
            onChange={changeNameHandler}
          />
        </TitleWrapper>
        <FileInputContainer>
          <input
            id="file-input"
            type="file"
            accept="image/*"
            onChange={fileSelectHandler}
          ></input>
        </FileInputContainer>
        <TAWrapper>
          <TextArea
            placeholder="challenge 설명글 작성"
            onChange={changeContentsHandler}
          ></TextArea>
        </TAWrapper>
        <SelectWrapper>
          <span>챌린지 레벨</span>
          <select
            name="level"
            placeholder="Level 선택"
            onChange={changeLevelHandler}
          >
            <option value="선택">Level 선택</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <span>업로드 기능 여부</span>
          <select
            name="upload"
            placeholder="Log 기능 선택"
            onChange={changeUploadHandler}
          >
            <option value="선택">Log 기능 선택</option>
            <option value="true">가능</option>
            <option value="false">불가능</option>
          </select>
        </SelectWrapper>
        <Btn name="Add" onClick={fileUploadHandler}>
          챌린지 업로드
        </Btn>
      </Form>
    </Container>
  );
};

export default AddChallenge;
