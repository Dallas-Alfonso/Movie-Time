import React, { useState, useEffect } from 'react';
import firebase from "../util/firebase";

/***************************************************************************************
*    Title: LikesCounter
*    Author: Rafael Castellanos-Welsh
*    Date: 2021
*    Code version: 2.0
*    Availability: https://github.com/rafawelsh/MovieAPI_Project/blob/main/src/components/LikesCounter/LikesCounter.js
*
***************************************************************************************/


function Popup({ selected, closePopup, imdbID }) {
	const [likes, setLikes] = useState(0);
	const [dislikes, setDislikes] = useState(0);
	const [movieData, setMovieData] = useState({});

	useEffect(() => {
		if (!imdbID) return null;
		console.log(imdbID)
		// retrieve likes/dislikes from Firebase and set data
		// ELSE set a new entry in Firebase with movieID and set data
		const movieRef = firebase.database().ref(`${imdbID}/`);
		movieRef.on("value", (data) => {
			console.log(data)
			if (data.val() !== null) {
				setMovieData({
					...data.val(),
				});
			} else {
				firebase.database().ref(`${imdbID}/`).set({
					likes: 0,
					dislikes: 0,
				});
			}
		});
	},[imdbID]);

	useEffect(() => {
		if (!movieData) return null;
		const { dislikes: down, likes: up } = movieData;

		console.log(down, up)
		console.log(movieData)

		setDislikes(down);
		setLikes(up);
	}, [dislikes, likes, movieData]);

	const handleLikeClick = () => {
		const updates = {};
		updates[`${imdbID}/likes`] = firebase.database.ServerValue.increment(1);
		firebase.database().ref().update(updates);
	};

	const handleDislikeClick = (e) => {
		const updates = {};
		updates[`${imdbID}/dislikes`] = firebase.database.ServerValue.increment(1);
		firebase.database().ref().update(updates);
	};

	console.log({ likes }, { dislikes });


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

			{/* Voting Portion */}

			<div class="voting">

				<button onClick={() => handleLikeClick(imdbID)} className='counter'>
					{/* <i class="fas fa-thumbs-up"></i> */}👍 {likes}
				</button>
					{/* <input type="number" id="input1" value="0"name=""></input> */}
				<button onClick={() => handleDislikeClick(imdbID)} className='counter'>
					{/* <i class="fas fa-thumbs-down"></i> */}👎 {dislikes}
				</button>
					{/* <input id="dislikeCount" type="number" id="input2" value="0"name=""></input> */}
					
			</div>
			
		</section>
	)
}

export default Popup 
