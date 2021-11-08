import React from "react";
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

const AddChallenge = (props) => {
  return (
    <Container>
      <Title>챌린지 추가</Title>
      <Form>
        <TitleWrapper>
          <TitleInput
            type="text"
            name="name"
            placeholder="제목을 입력하세요..."
          />
        </TitleWrapper>
        <FileInputContainer>
          <input
            id="file-input"
            type="file"
            accept="image/*"
            //onChange={fileSelectedHandler}
          ></input>
        </FileInputContainer>
        <TAWrapper>
          <TextArea placeholder="challenge 설명글 작성"></TextArea>
        </TAWrapper>
        <SelectWrapper>
          <span>챌린지 레벨</span>
          <select name="level" placeholder="Level 선택">
            <option value="선택">Level 선택</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <span>업로드 기능 여부</span>
          <select name="upload" placeholder="Log 기능 선택">
            <option value="선택">Log 기능 선택</option>
            <option value="true">가능</option>
            <option value="false">불가능</option>
          </select>
        </SelectWrapper>
        <Btn name="Add">챌린지 업로드</Btn>
      </Form>
    </Container>
  );
};

export default AddChallenge;
