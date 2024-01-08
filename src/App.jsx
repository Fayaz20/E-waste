import { useState } from 'react';
import Grid from './components/grid';
import './app.css';
import Navbar from './components/nav';
import Home from './components/home';
import Loc from './components/location';
import Notify from './components/notify';

function App() {
  const [count, setCount] = useState(0);

  const scrollToSection0 = () => {
    const section0 = document.getElementById('hub-section');
    if (section0) {
      section0.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSection1 = () => {
    const section = document.getElementById('grid-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSection2 = () => {
    const section2 = document.getElementById('notify-section');
    if (section2) {
      section2.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className='back'>
        <Navbar
        scrollToSection0={scrollToSection0}
          scrollToSection1={scrollToSection1}
          scrollToSection2={scrollToSection2}
        />
        <Home />
        <Loc />
        <Grid />
        <Notify />
      </div>
    </>
  );
}

export default App;