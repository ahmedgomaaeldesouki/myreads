import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import App from './App'

import './css/index.css'

const dsestination = document.querySelector ("#root");

ReactDOM.render(
   
     <BrowserRouter>
     <App/>
     </BrowserRouter>
    , dsestination
    
)
    
