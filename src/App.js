import React, {useContext} from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from "./Storage/auth-context";

function App() {
    const Authctx = useContext(AuthContext);
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  //
  // useEffect(()=>{
  //     const storeLoginInfo = localStorage.getItem('isLoggedIn');
  //     if (storeLoginInfo === '1'){
  //       setIsLoggedIn(true)
  //     }
  // },[]);
  //
  // const loginHandler = (email, password) => {
  //   // We should of course check email and password
  //   // But it's just a dummy/ demo anyway
  //   localStorage.setItem('isLoggedIn','1');
  //   setIsLoggedIn(true);
  // };
  //
  // const logoutHandler = () => {
  //   localStorage.removeItem('isLoggedIn');
  //   setIsLoggedIn(false);
  // };

  return (
      <React.Fragment>
      <MainHeader />
      <main>
        {!Authctx.isLoggedIn && <Login />}
        {Authctx.isLoggedIn && <Home/>}
      </main>
      </React.Fragment>

  );
}

export default App;
