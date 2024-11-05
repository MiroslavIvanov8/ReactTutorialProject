import { useState } from 'react';
import { CORE_CONCEPTS } from './data-with-examples.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept/CoreConcept.jsx';
import TabButton from './components/TabButton/TabButton.jsx'
import { EXAMPLES } from './data-with-examples.js';

function App() {
  const [ selectedTopic, setSelectedTopic ] = useState('components');

  function clickHandler(selectedButton){
    setSelectedTopic(selectedButton);
    
    } 
    // shorter syntax with spread ... operator. Works only if prop names in component are the same as the given from the data array
  return (
    <div>
      <Header/>
      <main>
        <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          <CoreConcept
          title={CORE_CONCEPTS[0].title}
          image={CORE_CONCEPTS[0].image}
          description={CORE_CONCEPTS[0].description}
          />
          <CoreConcept {...CORE_CONCEPTS[1]}/> 
          <CoreConcept {...CORE_CONCEPTS[2]}/>
          <CoreConcept {...CORE_CONCEPTS[3]}/>      
        </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => clickHandler('components')}>Component</TabButton>
            <TabButton onSelect={() => clickHandler('jsx')}>JSX</TabButton>
            <TabButton onSelect={() => clickHandler('props')}>Props</TabButton>
            <TabButton onSelect={() => clickHandler('state')}>State</TabButton>
          </menu>
          <div id='examples'>
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
