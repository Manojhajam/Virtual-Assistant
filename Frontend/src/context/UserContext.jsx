import React, { createContext } from 'react'

export const UserDataContext = createContext();
const UserContext = ({ children }) => {
    const serverUrl = "http://localhost:8000"
    const value = {
        serverUrl
    }
  return (
      <div>
          <UserDataContext.Provider>
              
          </UserDataContext.Provider>
      {children}
    </div>
  )
}

export default UserContext
