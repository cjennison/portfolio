import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './views/Home';
import Portfolio from './views/Portfolio';
import About from './views/About';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter, Route } from 'react-router-dom'

ReactDOM.render((
  <BrowserRouter>
    <App>
      <Route exact path='/' component={Home} />
      <Route path='/portfolio' component={Portfolio} />
      <Route path='/about' component={About} />
    </App>
  </BrowserRouter>
), document.getElementById('root'))
registerServiceWorker();
