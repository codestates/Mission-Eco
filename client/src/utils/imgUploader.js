import axios from "axios";

axios.defaults.withCredentials = true;

export const upload = async (file) => {
  const formdata = new FormData();
  formdata.append("file", file);
  formdata.append("upload_preset", "xm2ekjdp");

  const result = await fetch(
    "https://api.cloudinary.com/v1_1/dbsequcxl/upload",
    {
      method: "post",
      body: formdata,
    }
  );
  return await result.json();
};
