import React, { createContext, useState } from "react";
import constants from "../../constants";

import { UserContextType, User } from "./User";

export const UserContext = createContext<UserContextType | null>(null);

const UserProvider = ({ children }: any) => {
  const [token, setToken] = useState("");
  const [user, setUser] = useState<User>(constants.DEFAULT_USER);

  return (
    <UserContext.Provider value={{ token, setToken, user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
