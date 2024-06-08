import React from 'react';
import NurseWorkPageTop from '../../components/nurseProfile/NurseWork/NurseWorkPageTop';
import NurseButtomNav from '../../components/nurseProfile/NurseButtomNav';

const
  NurseWorkLayout = ({ children }) => {
    return (
      <>
        <div className="main bg-creme min-h-screen fade-in">
      <NurseWorkPageTop />
            <main>
                {children}
            </main>
      <NurseButtomNav />
            </div>
        </>
  )
}

export default NurseWorkLayout
