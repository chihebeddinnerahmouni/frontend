import React from 'react';
import UserButtomNavBar from '../components/UserProfile/UserButtomNavBar';

const UserLayout = ({children}) => {
  return (
      <div>
          <main>
          {children}
          </main>
    <UserButtomNavBar />

    </div>
  )
}

export default UserLayout
