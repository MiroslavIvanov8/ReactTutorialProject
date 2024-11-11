import { Fragment } from 'react';

import Header from './components/Header/Header.jsx';
import CoreConcepts from './components/CoreConcept/CoreConcepts.jsx';
import Examples from './components/TabButton/Examples.jsx';

function App() {  
  return (
    <Fragment>
      <Header />
      <main>
        <CoreConcepts/>
        <Examples/>
      </main>
    </Fragment>
  );
}

export default App;
