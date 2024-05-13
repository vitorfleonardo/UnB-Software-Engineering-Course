import Highlight from '@site/src/components/Highlight';
import React from 'react';

const TopicsList = ({ topics }) => (
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
    {topics.map((topic, index) => (
      <div key={index}>
        <Highlight color='#25c2a0'>{topic}</Highlight>
      </div>
    ))}
  </div>
);

export default TopicsList;
