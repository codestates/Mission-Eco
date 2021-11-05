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
    /*
    axios
      .get(`${process.env.REACT_APP_API_URL}/mypage/auth`, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data.userInfo);
      })
      .catch((err) => console.log(err));
*/
    history.push("/");
  }, []);

  return <></>;
}

export default Auth;
