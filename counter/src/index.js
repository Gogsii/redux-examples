import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';

const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App 
        // Object shorthand form
        // increment={() => store.dispatch(increment(1))}
        // decrement={() => store.dispatch(decrement(1))}
        // incrementByTwo={() => store.dispatch(incrementByTwo(2))}
        // decrementByTwo={() => store.dispatch(decrementByTwo(2))}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


