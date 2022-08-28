import React from 'react';
import GlobalStyle from './style';
import Routes from './routes'
import Login from './pages/access'
import { Provider } from 'react-redux';
import Store from '../src/store'
function App() {
  const auth = false;
  return (
    <>
      <Provider store={Store}>
        <GlobalStyle />
        {auth ? <Routes /> : <Login />}
      </Provider>
    </>
  );
}

export default App;
