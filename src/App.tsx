import React from 'react';
import GlobalStyle from './style';
import { BrowserRouter } from "react-router-dom";
import RoutesApplication from './routes';
function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <RoutesApplication />
    </BrowserRouter>
  );
}

export default App;
