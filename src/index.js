import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/scss/utilities/_text.scss"
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

