import React from 'react';

import { Routes, Route } from 'react-router'
import { Navigation } from './components/Navigation';
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
          <Route path={'/:id'} element={<UserDetails />} />
          <Route path={'/add'} element={<AddUser />} />
        </Routes>
      </main>
    </section>
  );
}
