import React from "react";
import PageItem from "./PageItem/PageItem";
import { UL } from "./PagenationStyle";

const Pagination = ({ totalList, pageHandler }) => {
  const totalPage = Math.ceil(totalList / 5);
  const pageNum = [];
  for (let i = 1; i <= totalPage; i++) {
    pageNum.push(i);
  }

  return (
    <div>
      <UL>
        {pageNum.map((num) => (
          <PageItem key={num} num={num} pageHandler={pageHandler} />
        ))}
      </UL>
    </div>
  );
};

export default Pagination;
