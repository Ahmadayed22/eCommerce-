import Footer from '@layouts/footer/Footer';
import Header from '@layouts/header/Header';
import React from 'react';
import { Outlet } from 'react-router';

const MainLayOut = () => {
  return (
    <div className="container mx-auto flex flex-col h-screen">
      <Header />
      <div className="mt-7">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayOut;
