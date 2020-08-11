import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import Footer from "./components/Footer";


class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends: friends,
    count: 0,
    topScore: 0,
    cardTracker: []
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

  // new function to check if the id of a card has been clicked twice. filter the friend array of objects 

  removeFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    // var cardTracker = []
    if (this.state.cardTracker.includes(id)) {
      console.log(this.state.cardTracker);
    console.log("you lost");
  } else {
    this.state.cardTracker.push(id)
  }
    
    
    const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends: friends });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
        <Navbar 
        
        topScore={this.state.topScore}
        count={this.state.count}
        />
        {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul>
            <li>
              <a className="navbar-brand" href="#">Memory Game</a>
            </li>
            <span className="navbar-text">
              Click an image to begin but don't click the same image twice!
            </span>
            <li className="nav-item justify-end">Score: {this.state.count} | Top Score: {this.state.topScore} card clicke: {this.state.cardTracker}</li>
          </ul>
        </nav> */}
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
