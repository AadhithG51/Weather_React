import React, { useState } from 'react';
import LoginPage from './components/Login';
import WeatherApp from './components/weather';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = (user) => {
    setUsername(user);
    setLoggedIn(true);
  };

  return (
    <div>
      {!loggedIn ? (
        <LoginPage onLogin={handleLogin} />
      ) : (
        <WeatherApp username={username} />
      )}
    </div>
  );
};

export default App;
