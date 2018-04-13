import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import 'ress/dist/ress.min.css';
import 'font-awesome/css/font-awesome.min.css';

const render = () => {
  const Main = require('containers').default;

  ReactDOM.render(
    <AppContainer>
      <Main />
    </AppContainer>,
    document.getElementById('app')
  );
};

render();

// migrate by this guide
// https://github.com/gaearon/react-hot-loader/tree/master/docs#migration-to-30
if (module.hot) {
  module.hot.accept('containers/', () => {
    render();
  });
}
