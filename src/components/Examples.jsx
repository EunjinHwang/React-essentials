import { useState } from 'react';
import { EXAMPLES } from '../data.js'
import TabButton from './TabButton/TabButton.jsx'
import Tabs from './Tabs.jsx'
import Section from './Section.jsx';

function Examples() {
    const [selectedTopic, setSelectedTopic] = useState()
    function HandleSelect(selectedButton) {
        setSelectedTopic(selectedButton);
    }

    let tabContent = <p>Please select a topic.</p>;
    if (selectedTopic) {
        tabContent = (<div id='tab-content'>
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
                <code>
                    {EXAMPLES[selectedTopic].code}
                </code>
            </pre>
        </div>);
    }

    return (
        <Section id="examples" title="Examples">
            <Tabs buttons={<><TabButton isSelected={selectedTopic === 'components'} label="Components" onClick={() => HandleSelect('components')} />
                <TabButton isSelected={selectedTopic === 'jsx'} label="JSX" onClick={() => HandleSelect('jsx')} />
                <TabButton isSelected={selectedTopic === 'props'} label="Props" onClick={() => HandleSelect('props')} />
                <TabButton isSelected={selectedTopic === 'state'} label="State" onClick={() => HandleSelect('state')} /></>}>
                {tabContent}
            </Tabs>
        </Section>
    );
}

export default Examples;