// started============================================================================================================================

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


//Pass Props to a Stateless Functional Component=======================================================================================

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

// Pass an Array as PropsPassed===========================================================================================================

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

// Default props================================================================================================================================

const ShoppingCart = (props) => {
  return (
    <div>
      <h1>Shopping Cart Component {props.items}</h1>
    </div>
  )
};
ShoppingCart.defaultProps = { items: 0 }

//Override Default Props======================================================================================================================

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
    
//Use PropTypes to Define the Props You Expect================================================================================================
    
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

//Access Props Using this.props========================================================================================================
    
class ReturnTempPassword extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <div>
            { /* Change code below this line */ }
            <p>Your temporary password is: 
              <strong>
                {this.props.tempPassword}
              </strong>
            </p>
            { /* Change code above this line */ }
        </div>
    );
  }
};

class ResetPassword extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <div>
          <h2>Reset Password</h2>
          <h3>We've generated a new temporary password for you.</h3>
          <h3>Please reset this password from your account settings ASAP.</h3>
          { /* Change code below this line */ }
           <ReturnTempPassword tempPassword = "8characterslong"/>
          { /* Change code above this line */ }
        </div>
    );
  }
};
    
// Review Using Props with Stateless Functional Components=======================================================================================

class CampSite extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Camper />
      </div>
    );
  }
};
// Change code below this line
const Camper =props=><p>{props.name}</p>;
Camper.defaultProps = {
  name: "CamperBot"
};
Camper.propTypes ={
  name: PropTypes.string.isRequired
};

//Create a Stateful Component===============================================================================================================

class StatefulComponent extends React.Component {
  constructor(props) {
    super(props);
    // Only change code below this line
    this.state={ name: "string"};
    // Only change code above this line
  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};

//Render State in the User Interface=======================================================================================

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'freeCodeCamp'
    }
  }
  render() {
    return (
      <div>
        { /* Change code below this line */ }
        <h1>{this.state.name}</h1>
        { /* Change code above this line */ }
      </div>
    );
  }
};

//Render State in the User Interface Another Way=======================================================================================

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'freeCodeCamp'
    }
  }
  render() {
    // Change code below this line
    const name = this.state.name;
    // Change code above this line
    return (
      <div>
        { /* Change code below this line */ }
        <h1>{name}</h1>
        { /* Change code above this line */ }
      </div>
    );
  }
};
    
//Set State with this.setState=======================================================================================

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Initial State'
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    // Change code below this line
    this.setState({
      name: "React Rocks!"
    });
    // Change code above this line
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click Me</button>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};

//Bind 'this' to a Class Method=======================================================================================

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Hello"
    };
    // Change code below this line
    this.handleClick = this.handleClick.bind(this);
    // Change code above this line
  }
  handleClick() {
    this.setState({
      text: "You clicked!"
    });
  }
  render() {
    return (
      <div>
        { /* Change code below this line */ }
        <button onClick = {this.handleClick}>Click Me</button>
        { /* Change code above this line */ }
        <h1>{this.state.text}</h1>
      </div>
    );
  }
};
