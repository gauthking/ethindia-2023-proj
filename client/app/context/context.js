"use client"

import { createContext, useState } from "react";
export const Message_data = createContext(null);
export function ContextProvider({ children }) {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [title, setTitle] = useState();
  
    return (
      <Message_data.Provider value={{ username, setUsername, password, setPassword, title, setTitle }}>
        {children}
      </Message_data.Provider>
    );
  }