import React, { useEffect, useState } from "react";
import LogItem from "../LogItem/LogItem";
import Modal from "../../../Modal/Modal";
import { useSelector, useDispatch } from "react-redux";
import { deleteLog } from "../../../../Redux/actions";
import {
  LogContainer,
  Wrapper,
  InputContainer,
  Input,
  Btn,
} from "./LogEditStyle";

const LogEdit = () => {
  const dispatch = useDispatch();
  const logList = useSelector((state) => state.infoReducer.adminLogList);

  const [logs, setLogs] = useState(logList);
  const [condition, setCondition] = useState("");
  const [filter, setFilter] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  useEffect(() => {
    setLogs(logList);
  }, [logList]);

  useEffect(() => {
    const result = getLogs(filter);
    setLogs(result);
  }, [filter]);

  const getLogs = (filterBy = "") => {
    return logList.filter((log) => log.challenge.name.includes(filterBy));
  };
  const handleChange = (e) => {
    setCondition(e.target.value);
  };
  const handleFilter = () => {
    setFilter(condition);
  };
  const openModalHandler = (id) => {
    setOpenModal(!openModal);
    setDeleteId(id);
  };
  const deleteHandler = () => {
    //모달도 켜지게 해야함
    dispatch(deleteLog(deleteId));
    setOpenModal(!openModal);
    setDeleteId(null);
  };
  const closeModalHandler = () => {
    setOpenModal(!openModal);
    setDeleteId(null);
  };

  return (
    <Wrapper>
      <InputContainer>
        <Input
          type="text"
          placeholder="검색하세요..."
          value={condition}
          onChange={handleChange}
        />
        <Btn onClick={handleFilter}>검색</Btn>
      </InputContainer>
      <LogContainer>
        {logs &&
          logs.map((log, idx) => {
            return (
              <LogItem
                key={idx}
                log={log}
                openModalHandler={openModalHandler}
              />
            );
          })}
      </LogContainer>
      {openModal ? (
        <Modal
          msg={"해당 로그를 삭제하시겠습니까?"}
          closeModalHandler={closeModalHandler}
          uploadBtn={"Yes"}
          fileUploadHandler={deleteHandler}
        />
      ) : null}
    </Wrapper>
  );
};

export default LogEdit;
