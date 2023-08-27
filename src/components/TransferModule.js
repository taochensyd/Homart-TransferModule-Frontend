import React, { useState } from "react";
import UserLogin from "./UserLogin";
// import TransferPage from "./TransferPage";
// import TransferForm from "./TransferForm";
import TransForm from "./TransForm";

const TransferModule = () => {
  const [userData, setUserData] = useState("");

  const handleUserData = (data) => {
    setUserData(data);
  };

  return (
    <div>
      <h1>SAP Transfer Module</h1>
      {/* {userData ? (
        <TransferForm username={userData.sapusername} />
      ) : (
        <UserLogin onUserData={handleUserData} />
      )} */}
{/* 
      {userData ? (
        <TransferPage username={userData.sapusername} />
      ) : (
        <UserLogin onUserData={handleUserData} />
      )} */}

{userData ? (
        <TransForm username={userData.sapusername} />
      ) : (
        <UserLogin onUserData={handleUserData} />
      )}
    </div>
  );
};

export default TransferModule;
