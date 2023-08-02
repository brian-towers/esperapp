import { ReactNode } from 'react';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';

const Dashboard = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="flex flex-col">
        <Navbar />
        <div className="flex">
          <Sidebar />
          <div className="flex justify-center w-full">{children}</div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
