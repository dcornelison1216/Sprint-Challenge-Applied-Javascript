// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
axios.get('https://lambda-times-backend.herokuapp.com/topics')
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
.then(response => {
  response.data.topics.forEach(topic => {
    const topicTab = document.createElement('div')
    topicTab.classList.add('tab')
    if(topic == 'node.js') {
      topicTab.textContent = 'node'
    }else{
      topicTab.textContent = topic
    }

    const topicsElement = document.querySelector('.topics')
    topicsElement.appendChild(topicTab)
  })
  return topicsElement
})

// add filter functionality to tabs
.then(topicsElement => {
  setTimeout(() => {
    const cards = document.querySelectorAll('.card')
    const tabs = document.querySelectorAll('.tab')
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        console.log(tab)
        cards.forEach(card => {
          card.style.display = 'none'
        })
        const toDisplay = document.querySelectorAll(`.${tab.textContent}`)
        toDisplay.forEach(item => {
          item.style.display = 'block'
        })
      })
    })
  }, 100)
  return topicsElement
})

// add "ALL" tab
const topicsElement = document.querySelector('.topics')
const allTab = document.createElement('div')
allTab.classList.add('tab')
allTab.textContent = 'all'
topicsElement.appendChild(allTab)
