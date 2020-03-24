// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
axios.get('https://lambda-times-backend.herokuapp.com/articles')
// Stduy the response data you get back, closely.
.then(response => {
  return response.data.articles
})

// make cards for javascript
.then(response => {
  response.javascript.forEach(entry => {
    componentMaker(entry, 'javascript')
  })
  return response
})

// make cards for bootstrap
.then(response => {
  response.bootstrap.forEach(entry => {
    componentMaker(entry, 'bootstrap')
  })
  return response
})

// make cards for technology
.then(response => {
  response.technology.forEach(entry => {
    componentMaker(entry, 'technology')
  })
  return response
})

// make cards for jquery
.then(response => {
  response.jquery.forEach(entry => {
    componentMaker(entry, 'jquery')
  })
  return response
})

// make cards for node
.then(response => {
  response.node.forEach(entry => {
    componentMaker(entry, 'node')
  })
  return response
})

// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:

const componentMaker = (obj, className) => {
  // <div class="card">
  const card = document.createElement('div')
  card.classList.add('card')
  card.classList.add(className)
  card.classList.add('all')
  //   <div class="headline">{Headline of article}</div>
  const headline = document.createElement('div')
  headline.classList.add('headline')
  headline.textContent = obj.headline
  card.appendChild(headline)
  //   <div class="author">
  const author = document.createElement('div')
  author.classList.add('author')
  card.appendChild(author)
  //     <div class="img-container">
  const imgContainer = document.createElement('div')
  imgContainer.classList.add('img-container')
  author.appendChild(imgContainer)
  //       <img src={url of authors image} />
  const image = document.createElement('img')
  image.src = obj.authorPhoto
  imgContainer.appendChild(image)
  //     </div>
  //     <span>By {authors name}</span>
  const authName = document.createElement('span')
  authName.textContent = `By ${obj.authorName}`
  author.appendChild(authName)
  //   </div>
  // </div>

  // Create a card for each of the articles and add the card to the DOM.
  const cardsContainer = document.querySelector('.cards-container')
  cardsContainer.appendChild(card)
}
