import React from "react";
import { LIST } from "./PageItemStyle";

const PageItem = ({ num, pageHandler }) => {
  return <LIST onClick={() => pageHandler(num)}>{num}</LIST>;
};

export default PageItem;
