import React, { useEffect, useState } from "react";
import LogItem from "../LogItem/LogItem";
const LogEdit = ({ logList }) => {
  const [logs, setLogs] = useState(logList);
  console.log("logs--", logs);
  const [condition, setCondition] = useState("");
  const [filter, setFilter] = useState("");

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
  return (
    <div>
      <input type="text" value={condition} onChange={handleChange}></input>
      <button onClick={handleFilter}>검색</button>
      <div>
        {logs &&
          logs.map((log, idx) => {
            return <LogItem key={idx} log={log} />;
          })}
      </div>
    </div>
  );
};

export default LogEdit;
