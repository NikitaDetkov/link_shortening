import { BrowserRouter } from 'react-router-dom';

import React, { useState, useEffect } from 'react';
import AppRouter from './components/AppRouter'; 
import { AuthContext } from './context';
import './styles/App.css';

function App() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('access_token')) {
      setIsAuth(true);
    }
  }, []);

  return (
    <AuthContext.Provider value={{isAuth, setIsAuth}}>
      <BrowserRouter>
        <div className="App">
          <AppRouter/>
        </div>
      </BrowserRouter>
    </AuthContext.Provider>
  );

}

export default App;

