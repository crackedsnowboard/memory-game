import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
// import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import Footer from "./components/Footer";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends: friends,
    count: 0,
    topScore: 0
  };

  handleIncrement = () => {
    // We always use the setState method to update a component's state
    this.setState({ count: this.state.count + 1 });
    // This wouldn't work as expected
    // this.state.count = this.state.count + 1;
    if (this.state.count > this.state.topScore) {
      this.setState({ topScore: this.state.count })
    }
  };

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends: friends });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul>
            <li>
              <a class="navbar-brand" href="#">Memory Game</a>
            </li>
            <span class="navbar-text">
              Click an image to begin but don't click the same image twice!
            </span>
            <li class="nav-item justify-right">Score: {this.state.count} | Top Score: {this.state.topScore}</li>
          </ul>
        </nav>
        <Wrapper>
          {/* <Title>Memory Game</Title> */}
          {this.state.friends.map(friend => (
            <FriendCard
              handleIncrement={this.handleIncrement}
              removeFriend={this.removeFriend}
              id={friend.id}
              key={friend.id}
              name={friend.name}
              image={friend.image}
              occupation={friend.occupation}
              location={friend.location}
            />
          ))}
        </Wrapper>
        <Footer />
      </div>
    );
  }
}

export default App;
