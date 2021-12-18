import React from 'react';
import '../App.css';
import { increment, incrementByTwo, decrement, decrementByTwo } from '../actions';
import { connect } from 'react-redux';


const Counter = ({count, increment, decrement, incrementByTwo, decrementByTwo}) => {

  return (
    <div >
      <div className='numberDisplay'>
      <p>The number is: {count}</p>
      </div>
      <div className='gridLayout'>
        <div><button className='clickBoxGreen' onClick={increment}> + 1 </button></div>
        <div><button className='clickBoxRed' onClick={decrement}> - 1 </button></div>
        <div><button className='clickBoxGreen' onClick={incrementByTwo}> + 2 </button></div>
        <div><button className='clickBoxRed' onClick={decrementByTwo}> - 2 </button></div>
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(increment(1)),
    decrement: () => dispatch(decrement(1)),
    incrementByTwo: () => dispatch(incrementByTwo(2)),
    decrementByTwo: () => dispatch(decrementByTwo(2)),
  }
};

export default connect(null, mapDispatchToProps)(Counter);

