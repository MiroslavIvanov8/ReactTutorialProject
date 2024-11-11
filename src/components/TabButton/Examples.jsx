import { useState } from 'react';
import TabButton from './TabButton';
import { EXAMPLES } from '../../data-with-examples';
import Section from '../Section';

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

    return (
        <Section id="examples"
            title="Examples">
            <menu>
                <TabButton
                    isSelected={selectedTopic === 'components'}
                    onClick={() => clickHandler('components')}>Component
                </TabButton>
                <TabButton
                    isSelected={selectedTopic === 'jsx'}
                    onClick={() => clickHandler('jsx')}>JSX
                </TabButton>
                <TabButton
                    isSelected={selectedTopic === 'props'}
                    onClick={() => clickHandler('props')}>Props
                </TabButton>
                <TabButton
                    isSelected={selectedTopic === 'state'}
                    onClick={() => clickHandler('state')}>State
                </TabButton>
            </menu>
            {tabContent}
        </Section>)
}
