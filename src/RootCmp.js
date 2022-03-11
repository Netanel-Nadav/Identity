import React from 'react';

import { Routes, Route } from 'react-router'
import { Navigation } from './components/Navigation';
import { AboutUs } from './pages/AboutUs';
import { HomePage } from './pages/HomePage';
import routes from './routes'

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
        </Routes>
      </main>
    </section>
  );
}
