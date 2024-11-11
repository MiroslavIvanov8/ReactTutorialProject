import { useState, Fragment } from 'react';
import { CORE_CONCEPTS } from './data-with-examples.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept/CoreConcept.jsx';
import TabButton from './components/TabButton/TabButton.jsx'
import { EXAMPLES } from './data-with-examples.js';

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function clickHandler(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  let tabContent = <p>Please select a topic.</p>;
  if (selectedTopic) {
    tabContent = <div id='tab-content'>
      <h3>{EXAMPLES[selectedTopic].title}</h3>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <pre>
        <code>{EXAMPLES[selectedTopic].code}</code>
      </pre>
    </div>
  }

  // shorter syntax with spread ... operator. Works only if prop names in component are the same as the given from the data array
  return (
    <Fragment>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => (<CoreConcept key= {conceptItem.title} {...conceptItem}/>))}            
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton 
            isSelected={selectedTopic === 'components'} 
            onSelect={() => clickHandler('components')}>Component
            </TabButton>
            <TabButton
             isSelected={selectedTopic === 'jsx'} 
              onSelect={() => clickHandler('jsx')}>JSX
            </TabButton>
            <TabButton 
            isSelected={selectedTopic === 'props'}  
            onSelect={() => clickHandler('props')}>Props
            </TabButton>
            <TabButton 
            isSelected={selectedTopic === 'state'} 
            onSelect={() => clickHandler('state')}>State
            </TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </Fragment>
  );
}

export default App;
