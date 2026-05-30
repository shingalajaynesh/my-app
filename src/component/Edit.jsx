import { useState } from "react";
import Registration from "../pages/Registration";

const Edit = () => {
  const [userData, setUserData] = useState(() => {
    const editUser = localStorage.getItem("editUser");
    return editUser
      ? JSON.parse(editUser)
      : JSON.parse(localStorage.getItem("loginUser"));
    setUserData(editUser);
  });
  return <Registration userData={userData} />;
};

export default Edit;
