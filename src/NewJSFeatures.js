// ES6 class features
import React from "react";

class NewJSFeatures extends React.Component {
  state = {
    count: 0,
    greeting: "INCREMENT/DECREMENT"
  };
  //you can use this paradigm also
  // increment = () => {
  //   this.setState((prevState) => {
  //     return {
  //       count: prevState.count + 1
  //     };
  //   });
  // };
  //or this->
  increment = () => {
    //arrow function
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  // decrement(){
  //     this.setState(prevState=>{
  //         return {
  //             count:prevState.count-1
  //         }
  //     })
  // }

  decrement = () => {
    //using arrow function
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      };
    });
  };
  render() {
    const { count: number, greeting } = this.state;
    return (
      <>
        <h1>{greeting}</h1>
        <h2>{number}</h2>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </>
    );
  }
}

export default NewJSFeatures;
