import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Routes from '../Routes';
import './Template.scss';

const Template = () => {
  return (
    <div className="app">
      <Header />
      <main className="app-content">
        <Routes />
      </main>
      <Footer />
    </div>
  );
};

export default Template;
