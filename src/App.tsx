import React from 'react';
import GlobalStyle from './style';
import Routes from './routes'
import Login from './pages/access'
import Store from '../src/store'
import { useSelector } from 'react-redux'
import { RootState } from './types/RootState';
import { IUser } from './interfaces/user';
function App() {
  const auth: any= useSelector<RootState>((state)=> state.user);
  console.log(auth.token)
  return (
    <>
        <GlobalStyle />
        { auth.token !== '' && auth.authenticate ? <Routes /> : <Login />}
    </>
  );
}

export default App;
