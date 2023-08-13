// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const errorModal = document.getElementById('modal');
errorModal.classList.add('hidden');

let likeButtons = document.querySelectorAll('.like');

for (e of likeButtons) {
  e.addEventListener("click", function likeFunction(e) {
    const heart = e.target;
    mimicServerCall()
      .then(function() {
        if (heart.innerText === EMPTY_HEART) {
          //then we have to change from empty heart to full heart
          heart.innerText = FULL_HEART;
          heart.className = "activated-heart";
        } else {
          heart.innerText = EMPTY_HEART;
          heart.className = '';
        }
      })
      .catch(function(error) {
        const modal = document.getElementById("modal");
        modal.className = '';
        modal.innerText = error;
        setTimeout(function() {
          modal.className = "hidden"
        }, 3000);
      });
  })
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}