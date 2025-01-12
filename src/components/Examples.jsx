import { useState } from 'react';
import {EXAMPLES} from '../data.js'
import TabButton from './TabButton/TabButton.jsx'
function Examples() {
    const [selectedTopic, setSelectedTopic] = useState()
    function HandleSelect(selectedButton) {
        setSelectedTopic(selectedButton);
    }

    let tabContent = <p>Please select a topic.</p>;
    if(selectedTopic){
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
        <section id="examples">
            <h2>Examples</h2>
            <menu>
                <TabButton isSelected={selectedTopic === 'components'} label="Components" onSelect={() => HandleSelect('components')} />
                <TabButton isSelected={selectedTopic === 'jsx'} label="JSX" onSelect={() => HandleSelect('jsx')} />
                <TabButton isSelected={selectedTopic === 'props'} label="Props" onSelect={() => HandleSelect('props')} />
                <TabButton isSelected={selectedTopic === 'state'} label="State" onSelect={() => HandleSelect('state')} />
            </menu>
            {tabContent}
        </section>
    );
}

export default Examples;