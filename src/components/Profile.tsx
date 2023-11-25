import { useAuth0 } from '@auth0/auth0-react';

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <div className="column">
        {user?.picture && <img src={user?.picture} alt={user?.name} />}
        <h2>{user?.name}</h2>
        <ul>
          <p>{user?.email}</p>
          <p>{user?.email_verified ? 'Email Verified' : 'Email not verified'}</p>
          <p>{user?.sub}</p>
        </ul>
      </div>
    )
  );
};

export default Profile;
