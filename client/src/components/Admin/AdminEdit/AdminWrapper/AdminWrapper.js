import React, { useEffect, useState } from "react";
import LogEdit from "../LogEdit/LogEdit";
import { useDispatch } from "react-redux";
import { adminList } from "../../../../Redux/actions";
import LoadingIndicator from "../../../Loading/LoadingIndicator";
import {
  Container,
  Title1,
  Title2,
  TitleWrapper,
  LoadingContainer,
} from "./AdminWrapperStyle";
const AdminWrapper = (props) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    dispatch(adminList()).then(() => setIsLoading(false));
  }, [dispatch]);

  return (
    <>
      {isLoading ? (
        <LoadingContainer>
          <LoadingIndicator />
        </LoadingContainer>
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
