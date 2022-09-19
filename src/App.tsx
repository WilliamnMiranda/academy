import React from 'react';
import GlobalStyle from './style';
import { BrowserRouter } from "react-router-dom";
import RoutesApplication from './routes';
import Contexts from './contexts'
function App() {
  return (
    <Contexts>
      <BrowserRouter>
        <GlobalStyle />
        <RoutesApplication />
      </BrowserRouter>
    </Contexts>
  );
}

export default App;
