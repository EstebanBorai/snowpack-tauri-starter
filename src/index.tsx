import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <h1>Hello</h1>
  </React.StrictMode>,
  document.getElementById('root'),
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}
