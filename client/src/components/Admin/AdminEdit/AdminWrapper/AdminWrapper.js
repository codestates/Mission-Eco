import React, { useEffect, useState } from "react";
import LogEdit from "../LogEdit/LogEdit";
import { useDispatch } from "react-redux";
import { adminList } from "../../../../Redux/actions";
import LoadingIndicator from "../../../Loading/LoadingIndicator";
import { Container, Title1, Title2, TitleWrapper } from "./AdminWrapperStyle";
const AdminWrapper = (props) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  //로그 삭제 시 다시 리로드되게 하는 방법을 찾아보자
  useEffect(() => {
    setIsLoading(true);
    dispatch(adminList()).then(() => setIsLoading(false));
  }, [dispatch]);

  return (
    <>
      {isLoading ? (
        <Container>
          <LoadingIndicator />
        </Container>
      ) : (
        <Container>
          <TitleWrapper>
            <Title1 to="/admin/log">Log 관리</Title1>
            <Title2 to="/admin/challenge">Challenge 관리</Title2>
          </TitleWrapper>
          <LogEdit />
        </Container>
      )}
    </>
  );
};

export default AdminWrapper;
