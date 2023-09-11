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
 const pauseBtn = document.querySelector('#pause')

function timer(){
  //counter
  return setInterval(()=>{
  let counter = counterElement.textContent
  let parsedCount = parseInt(counter)
  counterElement.textContent = parsedCount + 1
  }, 1000)
}
const interval = timer()

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

let trackLikes = {}
likeBtn.addEventListener('click',()=>{
 const ul = document.querySelector('.likes')
/*
 check to see if trackLikes has a property with the number that was liked
 if it exist, update the number of times that number has been liked in the trackLikes obj and the li element
 if it doesn't exist, 
 --create an li, set the li id to the number that was liked
 -- create a property in the trackLikes obj. Set the property to the number that was liked and its value as 1
 -- in the li add the text with the number that was liked and number of times it was liked
 append the li to the ul
*/
//grab the number from the h1 element
const numberThatWasLiked = parseInt(counterElement.textContent)
//check to see if the number that was liked is a property in the trackLikes obj
if(trackLikes.hasOwnProperty(numberThatWasLiked)){
  //if trackLikes has a property of the number that was liked
  //-- grab the li that has the number that was liked by id
  const li = document.getElementById(numberThatWasLiked)
  //if the li exist
  if(li){
    //access the number that was liked property in the trackLikes obj and increase the number by 1
    trackLikes[numberThatWasLiked] ++
  }
  //update the text with the updated number of times the number was liked
  li.textContent = `${numberThatWasLiked} was liked ${trackLikes[numberThatWasLiked]} times`
}else{
  //if trackLikes doesn't have a property of the number that was liked
  //create an li and set the id to the number that was liked
  const li = document.createElement('li')
  li.setAttribute('id', numberThatWasLiked)
  //add the number that was liked to the trackLikes obj as a property and set it to 1
  trackLikes[numberThatWasLiked] = 1
  //in the li add a text with the numberthatwasliked and the number of times it was liked
  li.textContent = `${numberThatWasLiked} was liked ${trackLikes[numberThatWasLiked]} times`
  //add li to DOM
  ul.appendChild(li)
}
})

