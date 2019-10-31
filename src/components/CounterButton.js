import React, { Component } from 'react';
// import React, { PureComponent } from 'react';

class CounterButton extends Component {
// class CounterButton extends Pureomponent {
// updates Component only when props or state changed
   constructor() {
      super();
      this.state = {
         count: 0
      }
   }

   shouldComponentUpdate(nextProps, nextState) {
      if ( this.state.count !== nextState.count) {
         return true;
      }
      return false;
   }

   updateCount = () => {
      this.setState(state => {
         return {count: state.count + 1}
         })
   }

   render() {
      return (
         <button color={this.props.color} onClick={this.updateCount}>
            Count: {this.state.count}
         </button>
      )
   }
}

export default CounterButton;