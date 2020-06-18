import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { ContextProvider } from './components/ContextProvider'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <ContextProvider>
      <App />
  </ContextProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
