import { CORE_CONCEPTS } from './data';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept/CoreConcept.jsx';
import TabButton from './components/TabButton/TabButton.jsx'

function App() {
  function clickHandler(){
    console.log('Hello World! - selected');
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
            <TabButton onSelect={clickHandler}>Component</TabButton>
            <TabButton onSelect={clickHandler}>JSX</TabButton>
            <TabButton onSelect={clickHandler}>Props</TabButton>
            <TabButton onSelect={clickHandler}>State</TabButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
