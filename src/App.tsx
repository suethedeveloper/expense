import { Fragment } from 'react';
import { useSelector } from 'react-redux';

import Counter from './components/Counter';
import Header from './components/Header';
import Auth from "./components/Auth";
import UserProfile from './components/UserProfile';


function App() {
  const isAuth = useSelector((state: any) => state.auth.isAuthenticated); //from store/index
  return (
    <Fragment>
      <Header />
      {!isAuth && <Auth />}
      <Counter />
      {isAuth && <UserProfile />}
    </Fragment>
  );
}

export default App;
