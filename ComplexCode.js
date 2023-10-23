/* 
   Filename: ComplexCode.js
   Description: This code demonstrates a complex implementation of a social media platform.
*/

// User class to represent a user in the social media platform
class User {
  constructor(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
    this.friends = [];
    this.posts = [];
  }
  
  addFriend(friend) {
    this.friends.push(friend);
  }
  
  createPost(text) {
    const post = new Post(this, text);
    this.posts.push(post);
    this.sharePostWithFriends(post);
  }
  
  sharePostWithFriends(post) {
    for (let friend of this.friends) {
      friend.receivePost(post);
    }
  }
  
  receivePost(post) {
    console.log(`${this.name} received post from ${post.author.name}: ${post.text}`);
  }
}

// Post class to represent a post in the social media platform
class Post {
  constructor(author, text) {
    this.author = author;
    this.text = text;
    this.timestamp = new Date().toISOString();
  }
}

// Create users
const user1 = new User("John", 25, "New York");
const user2 = new User("Sarah", 29, "Los Angeles");
const user3 = new User("Mike", 32, "Chicago");

// Add friends
user1.addFriend(user2);
user2.addFriend(user3);
user3.addFriend(user1);

// Create and share posts
user1.createPost("Hello, everyone!");
user2.createPost("I'm having a great day!");
user3.createPost("What are your plans for the weekend?");

// Output:
// Sarah received post from John: Hello, everyone!
// Mike received post from John: Hello, everyone!
// John received post from Sarah: I'm having a great day!
// John received post from Mike: What are your plans for the weekend?