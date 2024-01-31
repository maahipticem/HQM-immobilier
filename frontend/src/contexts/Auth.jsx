import { createContext, useState } from "react";

export const AuthContext = createContext();

export function Authprovider({ children }) {
  const [connected, setConnected] = useState({ role: null });

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <AuthContext.Provider value={{ connected, setConnected }}>
      {children}
    </AuthContext.Provider>
  );
}
