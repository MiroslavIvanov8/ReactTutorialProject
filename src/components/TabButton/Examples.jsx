import { useState } from 'react';
import TabButton from './TabButton';
import { EXAMPLES } from '../../data-with-examples';

export default function Examples() {
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

    return (<section id="examples">
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
    </section>)
}
