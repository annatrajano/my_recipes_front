import React, { createContext,  useState } from 'react';

// Create Context Object
const UserNameContext = createContext();

// Hook
export default function UserName() {
  // UserName states
  const [userName, setUserName] = useState("");
    
  return { userName, setUserName};
}

// Specific Context Provider
function UserNameProvider({ children }) {

  const { userName, setUserName } = UserName();

  return (
    <UserNameContext.Provider value={{ userName, setUserName }}>
      {children}
    </UserNameContext.Provider>
  );
}


export { UserNameContext, UserNameProvider };
