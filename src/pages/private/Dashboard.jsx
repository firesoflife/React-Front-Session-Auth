import { useNavigate } from 'react-router-dom';

const Dashboard = ({ loggedInStatus, userData }) => {
  const user = userData;

  const navigate = useNavigate();

  if (loggedInStatus === 'NOT_LOGGED_IN') {
    navigate('/login');
  }

  return (
    <div>
      <div>
        <h1 className='text-white text-6xl'>Dashboard</h1>
        <h2 className='text-white text-4xl'>{loggedInStatus}</h2>
        <h3 className='text-white text-2xl'>welcome here: {user.username}</h3>
        <h3 className='text-white text-2xl'>welcome here: {user.email}</h3>
      </div>
    </div>
  );
};

export default Dashboard;
