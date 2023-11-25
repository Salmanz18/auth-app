import './App.css';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';

function App() {
  return (
    <div className="column">
      <h1>Auth0 App!</h1>
      <LoginButton />
      <Profile />
      <LogoutButton />
    </div>
  );
}

export default App;
