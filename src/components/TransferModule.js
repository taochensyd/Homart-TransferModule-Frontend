import React, { useState } from "react";
import UserLogin from "./UserLogin"; // make sure to import the child component
import TransferPage from "./TransferPage"; // make sure to import the TransferPage component

const TransferModule = () => {
  const [userData, setUserData] = useState(null);

  const handleUserData = (data) => {
    setUserData(data);
  };

  return (
    <div>
      <h1>SAP Transfer Module</h1>
      {userData ? (
        <TransferPage username={userData.sapusername} />
      ) : (
        <UserLogin onUserData={handleUserData} />
      )}
    </div>
  );
};

export default TransferModule;
