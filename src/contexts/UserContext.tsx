import { ReactNode, createContext, useContext, useState } from "react";

type UserContext = {
  user: string;
  setUser: (newUser: string) => void;
}
// CONTEXTO
export const UserContext = createContext<UserContext | null>(null);

// PROVIDER
export const UserProvider = ({ children } : { children: ReactNode }) => {
  const [user, setUser] = useState('');

  return (
    <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>
  );
}

// HOOK
export const useUser = () => useContext(UserContext);