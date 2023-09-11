/**
 As a user, I can:

--See the timer increment every second once the page has loaded.
--Manually increment and decrement the counter using the plus and minus buttons.
--"Like" an individual number of the counter. I should see the count of the number of "likes" associated with that number displayed.
  (e.g 3 has been liked 1 time)
--Pause the counter, which should:
   -pause the counter
   -disable all buttons except the pause button
   -switch the label on the button from "pause" to "resume"
Click the "resume" button to restart the counter and re-enable the buttons.
Leave comments on my gameplay, such as: "Wow, what a fun game this is."

 */
 const counterElement = document.querySelector('#counter')
 const minusBtn = document.querySelector('#minus')
 const plusBtn = document.querySelector('#plus')
 const likeBtn = document.querySelector('#heart')

function timer(){
  //counter
  setInterval(()=>{
  let counter = counterElement.textContent
  let parsedCount = parseInt(counter)
  counterElement.textContent = parsedCount + 1
  }, 1000)
}
timer()

minusBtn.addEventListener('click',()=>{
  //grab the current count 
  let currentCount = counterElement.textContent
  //parse it
  let counterNumber = parseInt(currentCount)
  //subtract 1
  let newCountNumber = counterNumber - 1
  //set it the new count to the counterElement
  counterElement.textContent = newCountNumber
})

plusBtn.addEventListener('click', ()=>{
  let currentCount = counterElement.textContent
  let counterNumber = parseInt(currentCount)
  let newCountNumber = counterNumber + 1
  counterElement.textContent = newCountNumber
})

let trackLikes= {}

likeBtn.addEventListener('click',()=>{
  /*
  <li data-num='2'>
    "2 has been liked "
    <span>data-num </span>
    " time"
  */
/*
set a number that represent the amount of times the count number was liked
if the same number is liked add it to the set number
*/
 
 //grab ul element
 const ul = document.querySelector('.likes')
 //create an li element
 const li = document.createElement('li')
 const span = document.createElement('span')
 //current count number
 let countNumber = parseInt(counterElement.textContent)
 //add text "current number has been liked"
 li.setAttribute('data-num', countNumber)
//if property already exist in the trackLikes obj with the countNumber
 if(trackLikes.hasOwnProperty(countNumber)){
    let numberOfLikes = trackLikes[countNumber]++
    span.textContent = numberOfLikes
 
  }else{
    trackLikes[countNumber] = 1
    li.textContent = trackLikes[countNumber]
  }


    li.textContent = `${countNumber} has been liked  `
    span.textContent = `${trackLikes[countNumber]} times`
    li.appendChild(span)
    ul.appendChild(li)
 


})