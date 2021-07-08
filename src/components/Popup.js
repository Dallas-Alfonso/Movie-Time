import React from 'react'

function Popup({ selected, closePopup }) {
	return (
		<section className="popup">
			<div className="content">
				<h2>{ selected.Title } <span>({ selected.Year })</span></h2>
				
				<p className="rating">Rating: {selected.imdbRating}</p>
				<p>{selected.Director}</p>
				<div className="plot">
				
					<img src={selected.Poster} alt=''/>
					
					<p>{selected.Plot}</p>
					
				</div>
				
				<button className="close" onClick={closePopup}>Close</button>
			</div>

			{/* Method 1 */}
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

			{/* Method 2 */}
			{/* <div class="wrapper">
			<div class="like">
				<i onclick= {count} class="fas fa-thumbs-up"></i>
				<br></br>
				<input type="number" id="likeCount" value="0" name=""></input>
			</div>
			<div class="dislike">
				<i onclick= {count1} class="fas fa-thumbs-down"></i>
				<br></br>
				<input type="number" id="dislikeCount" value="0" name=""></input>
			</div>
			</div> */}

		</section>

		
		)
	}

export default Popup