import styled from "styled-components";

export const MypageContainer = styled.div`
  margin-top: 10em;

  @media screen and (max-width: 768px) {
    //height: 1100px;
  }

  @media screen and (max-width: 480px) {
    //height: 1300px;
  }
`;

export const H1 = styled.h1`
  background-color: orange;
`;

export const Btn = styled.button`
  color: skyblue;
`;

export const Container = styled.div`
  background: green;
`;

export const Title = styled.p`
  background: darkgreen;
`;

export const ListContainer = styled.ul`
  background: brown;
  display: flex;
  flex-direction: row;
`;

export const ListItem = styled.li`
  background: midnightblue;
`;
