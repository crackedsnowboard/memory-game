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

  handleIncrement = (id) => {
    console.log(id);
    this.state.friends.find((object, index) => {
      // console.log(object);
      if (object.id === id) {
        console.log(object.count);
        // console.log(object);
        if (object.id === 0) {
          // gameover
          object.count = 1
          
        }
        else {
          console.log("game over");
        }

      }
    })

    // We always use the setState method to update a component's state
    this.setState({ count: this.state.count + 1 });

    // This wouldn't work as expected
    // this.state.count = this.state.count + 1;
    if (this.state.count > this.state.topScore) {
      this.setState({ topScore: this.state.count + 1 })
    }
    // cardTracker.push()
    // console.log(this.state);
    this.state.friends.sort(() => Math.random() - 0.5)
  };

  // new function to check if the id of a card has been clicked twice. filter the friend array of objects 

  removeFriend = event => {
    // Get the data-value of the clicked button
    const btnType = event.target.attributes.getNamedItem("data-value").value;
    // Clone this.state to the newState object
    // We'll modify this object and use it to set our component's state
    const newState = { ...this.state };

    if (btnType === "pick") {
      // Set newState.match to either true or false depending on whether or not the dog likes us (1/5 chance)
      newState.match = 1 === Math.floor(Math.random() * 5) + 1;

      // Set newState.matchCount equal to its current value or its current value + 1 depending on whether the dog likes us
      newState.matchCount = newState.match
        ? newState.matchCount + 1
        : newState.matchCount;
    } else {
      // If we thumbs down'ed the dog, we haven't matched with it
      newState.match = false;
    }
    // Replace our component's state with newState, load the next dog image
    this.setState(newState);

    // Filter this.state.friends for friends with an id not equal to the id being removed
    // var cardTracker = []
    //   if (this.state.cardTracker.includes(id)) {
    //     console.log(this.state.cardTracker);
    //   console.log("you lost");
    // } else {
    //   this.setState({ cardTracker: this.state.cardTracker.push(id) })
    // }


    // const friends = this.state.friends.filter(friend => friend.id !== id);
    // // Set this.state.friends equal to the new friends array
    // this.setState({ friends: friends });
  };

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
              removeFriend={this.removeFriend}
              id={friend.id}
              key={friend.id}
              name={friend.name}
              image={friend.image}
            // occupation={friend.occupation}
            // location={friend.location}
            />
          ))}
        </Wrapper>
        <Footer />
      </div>
    );
  }
}

export default App;
