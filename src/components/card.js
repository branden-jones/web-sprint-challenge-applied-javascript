// TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

import axios from "axios";

const Card = (article) => {
      const card = document.createElement('div');        
      const headline = document.createElement('div');
      const authorWrapper = document.createElement('div');
      const imageWrapper = document.createElement('div');
      const imageAuthor = document.createElement('img');
      const authorName = document.createElement('span');

      card.appendChild(headline);
      card.appendChild(authorWrapper);
        authorWrapper.appendChild(imageWrapper);
        authorWrapper.appendChild(authorName);
          imageWrapper.appendChild(imageAuthor);

          headline.textContent = article.headline;
          imageAuthor.src = article.authorPhoto;
          authorName.textContent = `By ${article.authorName}`;
  

      card.classList.add('card');
      headline.classList.add('headline');
      authorWrapper.classList.add('author');
        imageWrapper.classList.add('img-container');

      card.addEventListener('click', () => {
        console.log(obj.headline);
      })

      return card;
}
  
const cardAppender = (selector) => {
 axios.get(`http://localhost:5001/api/articles`)
 .then(res => {
  console.log(res)
  const articleNode = res.data.articles;
  for (let key in articleNode){
    // console.log(key);
    articleNode[key].forEach((el) => {
      // console.log()
      const container = document.querySelector(selector);
      container.append(Card(el));
    })
  }
}) 
 .catch(err => {
  console.log(`Error:`,err);
 })
}
 // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //


export { Card, cardAppender }
