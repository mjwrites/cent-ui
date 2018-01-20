import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// css
import style from './public/css/style.css'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
