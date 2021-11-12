import React from "react";
import {
  LogCardContatainer,
  LogImg,
  LogImgContainer,
  NameNtime,
  LogHashP,
  LogContent,
  Button,
  LogH2,
  LogP,
} from "./MyLogListItemStyle";

// svg 아이콘으로 변경하기
import { ReactComponent as TrashIcon } from "../../../../imges/iconmonstr-trash-can-1.svg";

const MyLogListItem = ({ list, HandleDeleteLog }) => {
  const { id, img, challengelog_contents, user_id, name, createdAt } = list;

  return (
    <>
      <LogCardContatainer>
        <Button onClick={() => HandleDeleteLog(id)}>
          <TrashIcon fill="#333" />
        </Button>
        {/* <ServicesIcon>{list.img}</ServicesIcon> */}
        <LogImgContainer>
          <LogImg src={img} />
        </LogImgContainer>
        <LogContent>
          <LogHashP> {name}</LogHashP>
          <NameNtime>
            <LogP>닉네임:{user_id}</LogP>
            <LogP className="time">{createdAt.substring(0, 10)}</LogP>
          </NameNtime>
          <LogH2>{challengelog_contents}</LogH2>
        </LogContent>
      </LogCardContatainer>
    </>
  );
};

export default MyLogListItem;
