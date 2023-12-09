"use client"

import { createContext, useState } from "react";
export const Message_data = createContext(null);
export function ContextProvider({ children }) {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
  
    return (
      <Message_data.Provider value={{ username, setUsername, password, setPassword }}>
        {children}
      </Message_data.Provider>
    );
  }