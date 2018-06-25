import React from 'react';
import ReactDOM from 'react-dom';
import {Cadastro} from './Components/Cadastro';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Cadastro />, document.querySelector('.root'));
registerServiceWorker();
