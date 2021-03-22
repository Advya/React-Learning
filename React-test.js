// started

class MyComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return ( <div id = "challenge-node" >
            <h1> My First React Component! </h1> 
            </div>
        );
    }
};
ReactDOM.render( < MyComponent / > , document.getElementById("challenge-node"));


//Pass Props to a Stateless Functional Component

const CurrentDate = (props) => {
  return (
    <div>
      <p>The current date is: {props.date}</p>
    </div>
  );
};

class Calendar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>What date is it?</h3>
        <CurrentDate date={Date()} />
      </div>
    );
  }
};

// Pass an Array as PropsPassed

const List = props => {
  return <p>{props.tasks.join(", ")}</p>;
};
class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>
        <List tasks={["Walk", "Cook", "Bake"]} />
        <h2>Tomorrow</h2>
        <List tasks={["Study", "Code", "Eat"]} />
      </div>
    );
  }
}

// Default props

const ShoppingCart = (props) => {
  return (
    <div>
      <h1>Shopping Cart Component {props.items}</h1>
    </div>
  )
};
ShoppingCart.defaultProps = { items: 0 }

//Override Default Props

const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
}
Items.defaultProps = {
  quantity: 0
}
class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {    
    return <Items quantity = {10}/>    
  }
};
    
//Use PropTypes to Define the Props You Expect
    
const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
};
Items.propTypes = {
  quantity: PropTypes.number.isRequired
}
Items.defaultProps = {
  quantity: 0
};
class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Items />
  }
};

//
    
    
    
