import { NavigationContainer } from "@react-navigation/native";
import AuthNavigation from "./authStack";
import ProtectedNavigation from "./protectedStack";
import React, { useState, useEffect } from "react";
import { User, onAuthStateChanged } from "firebase/auth";
import { FireBaseAuth } from "../../FirebaseBaseConfig";

const AppNavigation = () => {
    const isAuthenticated = true;
  const [user, setUser] = useState<User | null | string>(null);

//   setUser("eifj");

  //   useEffect(() => {
  //     onAuthStateChanged(FireBaseAuth, (user) => {
  //       setUser(user);
  //     });
  //   });
  return isAuthenticated ? <ProtectedNavigation /> : <AuthNavigation />;
};

export default AppNavigation;
