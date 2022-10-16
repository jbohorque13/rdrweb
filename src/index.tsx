import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'containers/App';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App
        history={history}
    />,
  </React.StrictMode>
);
