import 'core-js';
import 'regenerator-runtime/runtime';

import { render } from 'react-dom';
import App from './components/templates/App';
import Home from './components/pages/Home';

history.scrollRestoration = 'manual';

render(
  <App>
    <Home />
  </App>,
  document.getElementById('root'),
);
