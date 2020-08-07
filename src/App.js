import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/navigation';
import Reducers from './components/Redux/reducers/index';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

 
const store = createStore(Reducers);


function App() {
  return (
    <Provider store={store}>
      <Navigation/>
    </Provider>
  );
}

export default App;
