import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authSuccess } from "../Redux/actions";
/*eslint-disable */
function Auth() {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(authSuccess());

    history.push("/");
  }, []);

  return <></>;
}

export default Auth;
