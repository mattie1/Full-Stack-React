import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { Intro, Btns, Particles } from './comps/'
ReactDOM.render(
    <React.StrictMode>
        <div className='app'>
        	<Intro/>
        	<Btns/>
        	<Particles/>
        </div>
    </React.StrictMode>,
document.getElementById('root')
);
