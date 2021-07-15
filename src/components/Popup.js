import React, { useState } from 'react'



function Popup({ selected, closePopup }) {

	const [count, setCount] = useState(0);

	const handleIncrement = () => {
		setCount(prevCount => prevCount + 1);
	  };
	  
	const handleDecrement = () => {
		setCount(prevCount => prevCount - 1);
	  };

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
				
		
			
			 {/* Method 1 */}
			<div class="voting">
				<button onClick={handleIncrement} id="likebtn" >
					<i class="fas fa-thumbs-up">your count is {count}</i>
					</button>
					<input type="number" id="input1" value="0"name=""></input>
					<button id="dislikebtn">
						<i class="fas fa-thumbs-down"></i>
						</button>
						<input id="dislikeCount" type="number" id="input2" value="0"name=""></input>
						
						</div>

			 

		
			</div>
		</section>
		)
	}
		
			

			

export default Popup



{/* <div class="wrapper">
			<div class="like">
				<i  onclick ={handleIncrement} class="fas fa-thumbs-up"></i>
				<h5>count is {count}</h5>
				
				<br></br>
				<input type="number" id="likeCount" value="0" name=""></input>
			</div>
			<div class="dislike">
				<i class="fas fa-thumbs-down"></i>
				<br></br>
				<input type="number" id="dislikeCount" value="0" name=""></input>
			</div>
			</div>  */}