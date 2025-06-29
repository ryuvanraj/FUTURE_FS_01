import React, { useState } from 'react';
import Menu from './components/Menu.jsx';
import Nav from './components/Nav.jsx';
import Header from './components/Header.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import personalDetails from './data/personalDetails.jsx';

const App = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
      <Menu showMenu={showMenu ? 'active' : 'deactive'} toggleMenu={toggleMenu} />
      <Nav toggleMenu={toggleMenu} showMenu={showMenu ? 'active' : 'deactive'} />
      <Header personalDetails={personalDetails} />
      <About personalDetails={personalDetails} />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;