import React, { Component } from 'react';
import { Button, Container } from '../components';
import { HeroSection } from '../components/home';

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
        <HeroSection />
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
