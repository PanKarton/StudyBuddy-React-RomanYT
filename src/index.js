import React from 'react';
import ReactDOM from 'react-dom';
import 'index.css';
import Root from 'views/Root';
import { worker } from 'mocks/browser';
import AppProviders from 'providers/AppProviders';

worker.start().then(() => {
  ReactDOM.render(
    <AppProviders>
      <Root />
    </AppProviders>,
    document.getElementById('root'),
  );
});
