import React from 'react';
import { HashRouter } from 'react-router-dom';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import HomePage from './pages/HomePage';

function App() {
  return (
    <HashRouter>
      <div className="bg-background min-h-screen text-gray-200 font-sans selection:bg-primary/30 selection:text-primary">
        <Header />
        <main>
          <HomePage />
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
