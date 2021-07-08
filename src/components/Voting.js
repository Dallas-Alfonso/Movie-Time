// import React from 'react'

// function Voting() {
//   return (
//     <div>
//       let likebtn = document.querySelector('#likebtn');
//       let dislikebtn = document.querySelector('#dislikebtn');
//       let input1 = document.querySelector('#input1');
//       let input2 = document.querySelector('#input2');
      
//       likebtn.addEventListener('click', ()=>{
//       input1.value = parseInt(input1.value) + 1;
//       input1.style.color = "#12ff00"
//       })
  
//       dislikebtn.addEventListener('click', ()=>{
//       input2.value = parseInt(input2.value) + 1;
//       input2.style.color = "##ff0000"
//   })
//     </div>
//   )
// }

// export default Voting

import React from 'react'


 
function Voting() {
  let likebtn = document.querySelector('#likebtn');
  let dislikebtn = document.querySelector('#dislikebtn');
  let input1 = document.querySelector('#input1');
  let input2 = document.querySelector('#input2');

  likebtn.addEventListener('click', ()=>{
    input1.value = parseInt(input1.value) + 1;
    input1.style.color = "#12ff00"
  })
  
  dislikebtn.addEventListener('click', ()=>{
    input2.value = parseInt(input2.value) + 1;
    input2.style.color = "##ff0000"
  })
  return (
    <div>
      <div class="voting">

<button id="likebtn">
  <i class="fas fa-thumbs-up"></i>
</button>
  <input type="number" id="input1" value="0"name=""></input>
<button id="dislikebtn">
  <i class="fas fa-thumbs-down"></i>
</button>
  <input id="dislikeCount" type="number" id="input2" value="0"name=""></input>
  <script type="text/javascript" src="App.js"></script>
</div>
    </div>
  )
}

export default Voting



// Method 2

// var likeCount = document.querySelector('#likeCount');
//   var dislikeCount = document.querySelector('#dislikeCount');

// function count(){
//   likeCount.value = parseInt(likeCount.value) + 1;
// }

// function count1(){
//   dislikeCount.value = parseInt(dislikeCount.value) + 1;
// }


// Method 1

/* <script type="text/Javascript">
  let likebtn = document.querySelector('#likebtn');
  let dislikebtn = document.querySelector('#dislikebtn');
  let input1 = document.querySelector('#input1');
  let input2 = document.querySelector('#input2');

  likebtn.addEventListener('click', ()=>{
    input1.value = parseInt(input1.value) + 1;
    input1.style.color = "#12ff00"
  })
  
  dislikebtn.addEventListener('click', ()=>{
    input2.value = parseInt(input2.value) + 1;
    input2.style.color = "##ff0000"
  })

</script>
     */





// function Voting() {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Voting
