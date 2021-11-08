import React from "react";
import PageItem from "./PageItem/PageItem";
import { UL } from "./PagenationStyle";

const Pagination = ({ totalList, pageHandler }) => {
  console.log("totalList--", totalList);
  const totalPage = Math.ceil(totalList / 5);
  const pageNum = [];
  for (let i = 1; i <= totalPage; i++) {
    pageNum.push(i);
  }
  console.log("page---", pageNum);

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
