import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const UserDataContext = createContext();
const UserContext = ({ children }) => {
  const serverUrl = "http://localhost:8000";
  const [userData, setuserData] = useState(null);

  const handleCurrentUser = async () => {
    try {
      const result = await axios.get(`${serverUrl}/api/user/current`, {
        withCredentials: true,
      });
      setuserData(result);
      console.log(result)
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    handleCurrentUser()
  },[])

  const value = {
    serverUrl,
  };

  return (
    <div>
      <UserDataContext.Provider value={value}>
        {children}
      </UserDataContext.Provider>
    </div>
  );
};

export default UserContext;
