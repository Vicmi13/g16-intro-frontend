import React from 'react';
import Navbar from './components/Navbar';
import Badge from './components/Badge';

function App() {
  return (
    <>
      <Navbar/>
      <Badge firstName="Octavio" lastName="Lopez" jobTitle="Frontend" username="octavio123"/>
    </>
  );
}

export default App;
