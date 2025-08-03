import React, { useEffect, useState } from 'react';

const Header = (props) => {
  const [username, setUsername] = useState('Admin');

  useEffect(() => {
    const userData = localStorage.getItem('loggedInUser');
    if (userData) {
      try {
        const parsedUser = JSON.parse(userData);
        if (parsedUser.role === 'employee' && parsedUser.data?.firstName) {
          setUsername(parsedUser.data.firstName);
        }
      } catch (err) {
        console.error('Error parsing loggedInUser from localStorage:', err);
      }
    }
  }, []);

  const logOutUser = () => {
    localStorage.removeItem('loggedInUser');
    props.changeUser('');
  };

  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>
        Hello <br />
        <span className='text-3xl font-semibold'>{username} 👋</span>
      </h1>
      <button
        onClick={logOutUser}
        className='bg-red-600 text-base font-medium text-white px-5 py-2 rounded-sm'
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;

