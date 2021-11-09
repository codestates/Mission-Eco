import React from "react";
import { ReactComponent as NodataImg } from "../../imges/nodata.svg";
import { Container, Contents } from "./NodataStyle";

const Nodata = (props) => {
  return (
    <Container>
      <NodataImg width="300" height="200" />
      <Contents>
        이런...
        <br />
        아직 미션을 완수한 사람이 없군요...
        <br /> 지금 도전해보세요!
      </Contents>
    </Container>
  );
};

export default Nodata;
