import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    imageUrl: "https://picsum.photos/200",
    tags: ["tag1", "tag2", "tag3", "tag4"],
  };

  // COMMENT: you use constructor() and super() to be enssure you can appropriately extend off Component and bind functions
  // constructor() {
  //   super();
  //   console.log("hi");
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  // handleIncrement() {
  //   console.log("Increment Clicked", this);
  // }

  // ALTNERATIVELY - INSTEAD of Consturctor/Super/Bind -- You can use the below approach for functions/methods for components
  // you can use arrow es6 functions to avoid the binding issue -- arrow functions inherit the "this" - they don't rebind it
  handleIncrement = () => {
    alert("Sup ph'magh-gyt");
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
