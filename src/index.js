import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import {createStore} from "redux";
import rootReducer from "./services/Reducers/index.js";
import App from './components/App';


const store = createStore(rootReducer);
console.warn("store data",store);

ReactDOM.render(
  <Provider store={store}> <App /> </Provider>
   ,
  document.getElementById('root')
);
