import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import { connect } from 'react-redux';

const App = ({count, increment, decrement, incrementByTwo, decrementByTwo}) => {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> React Redux Counter</p>
      </header>
      <body>
        <Counter 
          count={count}
          increment={increment}
          decrement={decrement}
          incrementByTwo={incrementByTwo}
          decrementByTwo={decrementByTwo}
        />
      </body>
    </div>
  );
}

function mapStateToProps(state) {
  return { count: state }
}

export default connect(mapStateToProps, null)(App)
