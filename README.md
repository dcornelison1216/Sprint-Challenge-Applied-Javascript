# Sprint-Challenge Applied Javascript - Lambda Times

This challenge allows you to practice the concepts and techniques learned over the past week and apply them in a concrete project. This Sprint explored the DOM and the concept of components. During this Sprint, you studied the DOM, DOM Events, and Components, as well as HTTP GET requests, and the axios library. In your challenge this week, you will demonstrate proficiency by creating an online Lambda newspaper called "Lambda Times."

## Instructions

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This is an individual assessment. All work must be your own. Your challenge score is a measure of your ability to work independently using the material covered through this sprint. You need to demonstrate proficiency in the concepts and objectives introduced and practiced in preceding days.

You are not allowed to collaborate during the Sprint Challenge. However, you are encouraged to follow the twenty-minute rule and seek support from your Tead Lead and Instructor in your cohort help channel on Slack. Your work reflects your proficiency in Applied JavaScript.

You have three hours to complete this challenge. Plan your time accordingly.

## Commits

Commit your code regularly and meaningfully. This helps both you (in case you ever need to return to old code for any number of reasons) and your Team Lead.

## Description

You are going to create a Lambda Newspaper. Your job is going to be to create the components that make up the newspaper's home page. You will do this at first with static data, then you will request data from a server to create dynamic components.

In meeting the minimum viable product (MVP) specifications listed below, you should have a console full of correct responses to the problems given.

## Self-Study Questions

Demonstrate your understanding of this week's concepts by answering the following free-form questions.

Edit this document to include your answers after each question. Make sure to leave a blank line above and below your answer so it is clear and easy to read by your project manager

1. What is the DOM?

DOM is an acronym that means "Document Object Model". HTML is parsed by browsers and turned into the DOM. In a lot of cases, the DOM will look just like the HTML file that the browser parsed into the webpage. We also use JavaScript to manipulate the DOM, so in those instances, the DOM will look very different from the original HTML file. Javascript is the language that the browser interprets to make changes to the DOM.

2. What is an event?

An event is a broad term for many different actions that a user might take while using a webpage. The list of events includes things like click, mouseover, drag, drop, copy, paste, and keypress.

3. What is an event listener?

An event listener is a tool used in JavaScript that waits for a specific event to occur and then triggers a block of code to execute. For example, a mouseenter event listener might trigger a button to become slightly larger, then a mouseleave event listener would return the button back to its original size when the cursor leaves that element.

4. Why would we convert a NodeList into an Array?

A NodeList object is an array-like list of objects and has access to a length property and indexed entries. Properties of specific nodes can be changed in a NodeList too. However, NodeLists do not have access to the list of array methods like push, pop, splice, etc...We would convert a NodeList to an Array so that we could manipulate the data contained in the NodeList using array methods.

5. What is a component?

A component is a small and possibly reusable block of code that creates an element to display on a website. If there is a mostly blank HTML file, we can use JavaScript to create elements, piece them together, and set their values. Those pieces, once brought together, are a component. Once assembled, a component can be added to the DOM and displayed in a browser.

### Git Set up

* [ ] Fork the project into your GitHub user account
* [ ] Clone the forked project into a directory on your machine
* [ ] Create a pull request before you start working on the project requirements.  You will continuously push your updates throughout the project.
* [ ] You are now ready to build this project with your preferred IDE

## Minimum Viable Product

Your finished project must include all of the following requirements:

* [ ] Look through the HTML code and familiarize yourself with the different sections. Some of them already exist, but some need to be filled in. DO NOT add any code to the HTML file itself.

* [ ] Following the instructions in the `Header/index.js` file, create the Header component.

* [ ] Following the instructions in the `Tabs/index.js` file, create individual Tabs components.

* [ ] Following the instructions in the `Cards/index.js` file, create individual Cards components.

## Stretch Problems

Your stretch challenge is to write the functionality of a `Carousel` component. This is an advanced challenge, so you are not expected to be able to complete it. If you begin and don't finish, you should still submit with what you have. This is going to be a bit different because you are going to need to create some advanced functionality for the carousel. There is no need to request data for this exercise.

* [X] Complete the carousel functionality in `Carousel.js`

* [ ] If you complete the Carousel, add functionality so that the carousel slides when the buttons are pressed instead of just appearing.

* [X] Create an 'infinite loop' carousel. In which as long as you click on an arrow, the array of images will loop over itself.

* [ ] If you have finished the above, research `data attributes`. Implement data attributes within your tabs as well as your cards. Give the tabs functionality so that when they are clicked they filter the cards to only display the cards that contain that topic.
