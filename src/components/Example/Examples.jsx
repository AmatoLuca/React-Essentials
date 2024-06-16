import { useState } from 'react';
import TabButton from '../Tabs/TabButton';
import TabsWrapper from '../Tabs/TabsWrapper';
import ExampleContent from './ExampleContent';
import './examples.css';

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState(null);

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  return (
    <TabsWrapper title="Examples">
      <menu>
        <TabsWrapper.TabsHeader>
          <TabButton
            isSelected={selectedTopic === 'components'}
            onClick={() => handleSelect('components')}
          >
            Components
          </TabButton>
          <TabButton
            isSelected={selectedTopic === 'jsx'}
            onClick={() => handleSelect('jsx')}
          >
            JSX
          </TabButton>
          <TabButton
            isSelected={selectedTopic === 'props'}
            onClick={() => handleSelect('props')}
          >
            Props
          </TabButton>
          <TabButton
            isSelected={selectedTopic === 'state'}
            onClick={() => handleSelect('state')}
          >
            State
          </TabButton>
        </TabsWrapper.TabsHeader>
      </menu>
      <TabsWrapper.TabsBody>
        <ExampleContent selectedTopic={selectedTopic} />
      </TabsWrapper.TabsBody>
    </TabsWrapper>
  );
}
