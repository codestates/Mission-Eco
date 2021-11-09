import styled from "styled-components";
import blob1 from "../../../imges/blob1.svg";

export const MypageEditContainer = styled.div`
  padding: 10em;
  @media screen and (max-width: 768px) {
  }

  @media screen and (max-width: 480px) {
  }

  background-image: url(${blob1});
  height: 100%;
  background-position: center;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  position: relative;
  background-attachment: fixed;
`;

export const MypageEditWrap = styled.div`
  justify-content: center;
  /* background-color: #fff; */
  border: solid #aaa;
  border-radius: 20px;
  padding: 50px;
  /* margin: 5px; */
  background-color: #ddede0;
`;

export const TitleH1 = styled.h1`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`;

export const Wrapper = styled.div`
  @media screen and (max-width: 400px) {
    height: 80%;
  }
  border: solid silver;
  border-radius: 20px;
  margin-bottom: 50px;
  padding: 50px;
  background-color: #f9f9f9;
`;

export const TitleH2 = styled.h2`
  margin: 1em 0 3em 0;
  color: #555;
`;
export const FormInput = styled.input`
  /* margin: 1em; */
  width: 100%;
  padding: 0.8rem;
  border: none;
  border-bottom: 1px solid #aaa;
  background-color: #f9f9f9;
  font-size: 18px;
`;
export const FormLabel = styled.label`
  display: block;
  text-align: left;
  color: #aaa;
  margin: 1.6rem 0 10px 0;
`;
export const Span = styled.span`
  display: block;
  text-align: left;
  color: #aaa;
  font-size: 15px;
  margin: 15px 0 10px 0;
`;
export const P = styled.p``;

export const Btn = styled.button`
  margin: 1em;
  /* border: solid #9dbfa5; */
  border: none;
  border-radius: 4px;
  background: #9dbfa5;
  white-space: nowrap;
  padding: 10px 22px;
  color: #f9f9f9;
  font-size: 13px;
  font-weight: bold;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: 0.2s;
    color: #555;
    cursor: pointer;
    border-radius: 4px;
    background-color: #cbddd0;
  }
`;

export const DelUserBtnWrapper = styled.div`
  @media screen and (max-width: 400px) {
    height: 80%;
  }
  display: flex;
  justify-content: right;
  margin-top: 20px;
`;

export const DelUserBtn = styled.button`
  /* margin: 1em; */
  /* border: solid #9dbfa5; */
  border: none;
  border-radius: 4px;
  background: #9dbfa5;
  white-space: nowrap;
  padding: 10px 22px;
  color: #f9f9f9;
  font-size: 13px;
  font-weight: bold;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: 0.2s;
    color: #f9f9f9;
    cursor: pointer;
    border-radius: 4px;
    background-color: gray;
  }
`;
