import React from 'react';
import {
  Home,
  About,
  Services,
  Projects,
  Contacts,
  Navbar,
} from './utils/Links';
import ScrollTop from './components/ScrolltoTop/ScrollTop';
function App() {
  return (
    <section>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Projects />
      <Contacts />
      <ScrollTop />
    </section>
  );
}

export default App;
