import { useState, createContext, useContext } from "react";
import type { AuthContextType, AuthProviderProps } from "../types/types";

export const AuthContext = createContext<AuthContextType | null>(null);

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("No context")
  }
  return context
}

export default function AuthProvider({ children }: AuthProviderProps) {
  const [token, setToken] = useState<string | null>(() => {
    const storedToken = sessionStorage.getItem("token");
    return storedToken ? JSON.parse(storedToken) : null;
  });

  function login(newToken: string | null) {
    setToken(newToken);
    sessionStorage.setItem("token", JSON.stringify(newToken));
  }

  function logout() {
    setToken(null);
    sessionStorage.removeItem("token");
  }

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}