// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
const Header = () => {

  //  <div class="header">
  const header = document.createElement('div')
  header.classList.add('header')
  //    <span class="date">SMARCH 28, 2019</span>
  const date = document.createElement('span')
  date.classList.add('date')
  date.textContent = 'SMARCH 28, 2019'
  header.appendChild(date)
  //    <h1>Lambda Times</h1>
  const h1 = document.createElement('h1')
  h1.textContent = 'Lambda Times'
  header.appendChild(h1)
  //    <span class="temp">98°</span>
  const temp = document.createElement('span')
  temp.classList.add('temp')
  header.appendChild(temp)
  //  </div >
  return header
}

// And add it to the DOM in the .header-container component
const headerContainer = document.querySelector('.header-container')
headerContainer.appendChild(Header())
