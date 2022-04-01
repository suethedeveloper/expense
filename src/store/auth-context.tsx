import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => {},
    //@ts-ignore
    onLogin: (email: string, password: string) => {}
})

export const AuthContextProvider = (props: any) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const storedUserLoggedInInfo = localStorage.getItem("isLoggedIn");
        if (storedUserLoggedInInfo === "1") {
          setIsLoggedIn(true); //-> if we don't do this in useEffect, then it will create infinite loop
        }
      }, []); //will run only [] -> dependency changes

    const logoutHandler = () => {
        localStorage.removeItem("isLoggedIn");
        setIsLoggedIn(false);
    }
    
    const loginHandler = () => {
        localStorage.setItem("isLoggedIn", "1")
        setIsLoggedIn(true);
    }
    return <AuthContext.Provider value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler
    }}>{props.children}</AuthContext.Provider>
};

export default AuthContext;