import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AbButton } from '../.';

const App = () => {
  return (
    <div>
      <AbButton variant='primary'>Hello my button</AbButton>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
