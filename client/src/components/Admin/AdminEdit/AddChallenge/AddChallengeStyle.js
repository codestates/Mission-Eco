import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffe081;
  height: 550px;
  border-radius: 25px;
`;
export const Title = styled.h1`
  font-size: 25px;
  padding-top: 50px;
`;
export const Form = styled.form`
  margin-top: 20px;
  background-color: white;
  width: 40em;
  height: 23em;
  border: 1px solid black;
`;
export const TitleWrapper = styled.div`
  border-bottom: 1px solid black;
`;
export const TitleInput = styled.input`
  width: 100%;
  height: 2.5em;
  border: 0;
`;
export const FileInputContainer = styled.div`
  //background-color: white;
`;
export const TAWrapper = styled.div`
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  width: 100%;
  height: 50%;
`;
export const TextArea = styled.textarea`
  width: 100%;
  height: 100%;
  border: 0;
  overflow: auto;
  font-size: 15px;
`;
export const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
`;
export const Btn = styled.button`
  margin-top: 10px;
  width: 100%;
  height: 41px;
  border: 0;
  outline: none;
  text-decoration: none;
  padding: 2px 5px 0 5px;
  font-size: 19px;
  background: #ffa928;
  white-space: nowrap;
  color: #010606;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
