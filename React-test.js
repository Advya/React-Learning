// started

class MyComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return ( <
            div id = "challenge-node" >
            <
            h1 > My First React Component! < /h1> <
            /div>
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
// Change code below this line
ShoppingCart.defaultProps = { items: 0 }
