const tweets = [
  {
    id: 1,
    content: 'Lorem ipsum',
    author: 'Ada',
    likes: 10
  },
  {
    id: 2,
    content: 'Dolor sit amet',
    author: 'Steve',
    likes: 8
  },
  {
    id: 3,
    content: 'Consectetur adipiscing elit',
    author: 'Grace',
    likes: 12
  },
  {
    id: 4,
    content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    author: 'Alan',
    likes: 2
  },
  {
    id: 5,
    content: 'Ut enim ad minim veniam',
    author: 'Ada',
    likes: 20
  }
]

const tweetList = document.getElementById('tweets-list');

const addTitle = (title) => {
  const tweeter = document.createElement('h1');
  tweeter.textContent = title;
  tweetList.prepend(tweeter);
}
addTitle("TOUIT'HAIR")


// tweets.forEach((e) => {
//   //Création d'un élément li
//   const tweet = document.createElement('li');
//   tweet.classList.add('tweet');
//   tweetList.appendChild(tweet);

//   // création des élément p : content, likes et author
//   const content = document.createElement('p');
//   const likes = document.createElement('p');
//   const author = document.createElement('p');

//   //modification du contenu de content, likes et author
//   content.textContent = e.content;
//   likes.textContent = "by " + e.author;
//   author.textContent = e.likes + " likes";

//   //Ajout des class au éléments p
//   content.classList.add('content');
//   likes.classList.add('likes');
//   author.classList.add('author');

//   //Injection des nouveaux élément p dans l'élément li
//   tweet.appendChild(content);
//   tweet.appendChild(author);
//   tweet.appendChild(likes);

// //Add class favorite si likes > 10
//   e.likes > 10 ? tweet.classList.add('favorite') : 0 ;
// });


//CARRECTION REFACTO :
const tweetParts = ["content", "author", "likes"];

const createSingleTweet = (tweet) => {
  const tweetItem = document.createElement("li");
  tweetItem.classList.add("tweet");
  tweetParts.forEach((part) => {
    const el = document.createElement("p");
    el.classList.add(part);
    el.textContent = tweet[part];
    tweetItem.appendChild(el);
  });
  return tweetItem;
};

const tweetsList = document.getElementById("tweets-list");

tweets.map(createSingleTweet).forEach((tweet) => {
  tweetsList.appendChild(tweet);
});


const allTweets = document.getElementsByClassName('tweet');
Array.from(allTweets).forEach((tweet) => {
  tweet.addEventListener('click', () => {

    tweet.classList.toggle('favorite');
  })
})
