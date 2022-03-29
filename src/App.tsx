   
import React, { useEffect, useState } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const storedUserLoggedInInfo = localStorage.getItem("isLoggedIn");
    if (storedUserLoggedInInfo === "1") {
      setIsLoggedIn(true); //-> if we don't do this in useEffect, then it will create infinite loop
    }
  }, []); //will run only [] -> dependency changes
  
//@ts-ignore
  const loginHandler = (email:string, password:string) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem("isLoggedIn", "1")
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn")
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;
