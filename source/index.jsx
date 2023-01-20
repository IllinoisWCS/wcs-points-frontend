import React from 'react';
import { render } from 'react-dom';
import Home from './pages/Home/Home.jsx';

require('normalize.css');
require('./styles.scss');

render(<Home />, document.getElementById('app'));
