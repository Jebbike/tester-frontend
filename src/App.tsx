import React from 'react';
import { TestContainer } from './components/test/TestContainer';
import { NavBar } from './components/NavBar';

const App: React.FunctionComponent = () => { 
  
  return (
    <>
      {/* <NavBar /> */}
      <div className="container mt-5 pt-5">
        <TestContainer />
      </div>
    </>
  );
}

export default App;
