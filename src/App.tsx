import React from 'react';
import './App.css';
import { Home } from './app/components/Home';
interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement;
}

function App() {
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;