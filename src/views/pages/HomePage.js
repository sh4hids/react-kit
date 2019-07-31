import React, { Component } from 'react';
import { Button, Container } from '../components';

class HomePage extends Component {
  state = {
    count: 0,
  };

  handleIncrease = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleDecrease = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <Container variant="fixed">
        <h1>Hello there,</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis fuga
          aliquam autem vel. Cupiditate distinctio, consectetur quisquam unde
          qui, nostrum nulla earum minima rem doloribus incidunt perferendis
          commodi voluptatum, dolorum!
        </p>
        <p>
          Go to <a href="/profile">profile</a>
        </p>
        <h4>Counter: {this.state.count}</h4>
        <Button onClick={this.handleIncrease} mr={16}>
          +
        </Button>
        <Button onClick={this.handleDecrease}>-</Button>
      </Container>
    );
  }
}

export default HomePage;
