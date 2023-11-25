import './App.css';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const { isLoading, error } = useAuth0();

  return (
    <div className="column">
      <h1>Auth0 App!</h1>
      {error && <p>Authentication Failed!</p>}
      {!error && isLoading && <p>Loading...</p>}
      {!error && !isLoading && (
        <>
          <LoginButton />
          <Profile />
          <LogoutButton />
        </>
      )}
    </div>
  );
}

export default App;
