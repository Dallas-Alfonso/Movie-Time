import React from 'react'

var likeCount = document.querySelector('#likeCount');
var dislikeCount = document.querySelector('#dislikeCount');

function count(){
  likeCount.value = parseInt(likeCount.value) + 1;
}

function count1(){
  dislikeCount.value = parseInt(dislikeCount.value) + 1;
}

return (
<div class="voting">
<button id="likebtn">
    <i onclick="count()" class="fas fa-thumbs-up"></i>
</button>
<input id="likeCount" type="number" id="input1" value="0"
name=""></input>
<button id="dislikebtn">
    <i onclick="count1()" class="fas fa-thumbs-down"></i>
</button>
<input id="likeCount" type="number" id="input2" value="0"
name=""></input>
</div>
)

export default {count, count1};