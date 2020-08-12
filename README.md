# Memory Game
Learning how to use react components by building a memory game app. This excercise helped me how to use state handlers across components by using props (aka properties). 

## Link to deployed Memory App
Check out how the application works here!
[Memory-App](https://crackedsnowboard.github.io/memory-game/)


## Game Rules

* The application keeps track of the user's score. 
* The user's score should be incremented when clicking an image for the first time. The user's score should be reset to 0 if they click the same image more than once.
* Every time an image is clicked, the images rendered to the page should shuffle themselves in a random order.
* Once the user's score is reset after an incorrect guess, the game should restart.

## Installation
I used react to generate the components and dynamically generating content in response to user clicks. 

Check out React docs [React](https://reactjs.org/docs/getting-started.html)


A few key code snippets that helped to build the program:

Setting up the React module 
```
npx create-react-app <appname>
```
Using sort to randomly display the cards after each user click. This took me some time to think through to understand the sort function
```
this.state.friends.sort(() => Math.random() - 0.5)
```
Passing properties to the friend card.
```
<FriendCard
              handleCardClick={this.handleCardClick}
              id={friend.id}
              key={friend.id}
              name={friend.name}
              image={friend.image}
            />
```


#### GIF of Applicaton

![App](https://media.giphy.com/media/WREu4V4Dm5KTkzjFrw/giphy.gif)


#### Author Links
[LinkedIn](linkedin.com/in/joel-mathen/) <br>
[GitHub](https://github.com/crackedsnowboard)
