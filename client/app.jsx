import React from 'react';
import ReactDom from 'react-dom';


// class App extends React.Component {
//   // constructor (props) {
//   //   super (props);
//   //   this.state = {lat: null, errorMessage: '' };
//   // }
//   state = { };


//   render () {
//     <Form />
//     return (
//       <div>rendering</div>
//     )

//   }
// }


// ReactDOM.render(<App />, document.getElementById('app'));

// 'use strict';

// const e = React.createElement;

// class LikeButton extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { liked: false };
//   }

//   render() {
//     if (this.state.liked) {
//       return 'You liked this.';
//     }

//     return e(
//       'button',
//       { onClick: () => this.setState({ liked: true }) },
//       'Like'
//     );
//   }
// }

// const domContainer = document.querySelector('#like_button_container');
// ReactDOM.render(e(LikeButton), domContainer);

function Clock(props) {
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {props.date.toLocaleTimeString()}.</h2>
    </div>
  );
}

function tick() {
  ReactDOM.render(
    <Clock date={new Date()} />,
    document.getElementById('root')
  );
}

setInterval(tick, 1000);