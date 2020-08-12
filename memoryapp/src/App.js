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
  };

  handleIncrement = (id) => {
    console.log(id);
    this.state.friends.find((object, index) => {
      // console.log(object);
      if (object.id === id) {
        console.log(object.count);
        // console.log(object);
        if (object.count === 0) {
          // gameover
          object.count = 1
          
        }
        else {
          console.log("game over");
          this.resetGame()
        }
      }
    })

    // We always use the setState method to update a component's state
    this.setState({ count: this.state.count + 1 });

    // This wouldn't work as expected
    // this.state.count = this.state.count + 1;
    
    // reshuffle the deck of cards
    this.state.friends.sort(() => Math.random() - 0.5)
  };

  resetGame = () => {
    if (this.state.count > this.state.topScore) {
      this.setState({ topScore: this.state.count + 1 })
    }
    this.state.friends.forEach(friend => {
      friend.count = 0;
    });
    this.setState({count: 0})
  }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
        <Navbar

          topScore={this.state.topScore}
          count={this.state.count}
          cardTracker={this.state.cardTracker}
        />

        <Wrapper>
          <Title></Title>
          {this.state.friends.map(friend => (
            <FriendCard
              handleIncrement={this.handleIncrement}
              id={friend.id}
              key={friend.id}
              name={friend.name}
              image={friend.image}
            
            />
          ))}
        </Wrapper>
        <Footer />
      </div>
    );
  }
}

export default App;
