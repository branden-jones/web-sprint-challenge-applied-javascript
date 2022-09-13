  
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //

const Header = (title, date, temp) => {
  const headerContainer = document.createElement('div')
  
  const headerTitle = document.createElement('h1');
  const headerDate = document.createElement('span');
  const headerTemp = document.createElement('span');

  headerContainer.classList.add('header');

  headerDate.classList.add('date');
  headerTemp.classList.add('temp');
  
  headerContainer.appendChild(headerDate);
  headerContainer.appendChild(headerTitle);
  headerContainer.appendChild(headerTemp);
  // headerTitle.appendChild(headerDate);
  // headerTitle.appendChild(headerTemp);

  headerDate.textContent = date;
  headerTitle.textContent = title;
  headerTemp.textContent = temp;

  return headerContainer;
}
// console.log(Header);

 // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  
const headerAppender = (selector) => {
 const headerContainer = document.querySelector(selector);
 const headerObj = headerContainer.appendChild(Header());
 return headerObj;
}

export { Header, headerAppender }
