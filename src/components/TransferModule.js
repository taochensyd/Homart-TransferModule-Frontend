import React, { useState } from "react";
import UserLogin from "./UserLogin";
import TransferPage from "./TransferPage";
import TransferForm from "./TransferForm";

const TransferModule = () => {
  const [userData, setUserData] = useState("");

  const handleUserData = (data) => {
    setUserData(data);
  };

  return (
    <div>
      <h1>SAP Transfer Module</h1>
      {userData ? (
        <TransferForm username={userData.sapusername} />
      ) : (
        <UserLogin onUserData={handleUserData} />
      )}
    </div>
  );
};

export default TransferModule;
