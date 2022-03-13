import React from 'react';

import { Routes, Route } from 'react-router'
import { Navigation } from './components/Navigation';
import { UserMsg } from './components/UserMsg';
import { AboutUs } from './pages/AboutUs';
import { AddUser } from './pages/AddUser';
import { HomePage } from './pages/HomePage';
import { UserDetails } from './pages/UserDetails';

export function RootCmp() {
  return (
    <section className="App main-container">
      <header className='full'>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path={'/'} element={<HomePage />} />
          <Route path={'/About'} element={<AboutUs />} />
          <Route path={'/:id'} exact={true} element={<UserDetails />} />
          <Route path={'/add'} element={<AddUser />} />
          <Route path={'/add/:id'} element={<AddUser />} />
        </Routes>
      </main>
      <UserMsg />
    </section>
  );
}
