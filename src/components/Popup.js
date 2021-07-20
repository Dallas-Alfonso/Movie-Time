import React, { useState } from 'react';
  
  
class App extends React.Component {
	state = {
		like: 0,
		dislike: 0,
		likeActive: true,
		dislikeActive: true
	  };
	
	  setDislike() {
		this.setState({
		  dislikeActive: !this.state.dislikeActive,
		  dislike: this.state.dislike + 1 
		});
	  }
	  setLike() {
		this.setState({
		  likeActive: !this.state.likeActive,
		  like: this.state.like + 1
		});
	  }
	
	  handleLike() {
		if (this.state.dislikeActive) {
		  this.setLike();
		}
		this.setLike();
	  }
	
	  handleDislike() {
		if (this.state.likeActive) {
		  this.setDislike();
		  
		}
		this.setDislike();
	  }
	

// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 		  quantity: 1,
// 		  show: true,
// 		  max: 5,
// 		  min: 0
// 		};
// 	  }

//   IncrementItem = () => {
// 	this.setState(prevState => {
// 	  if(prevState.quantity < 9) {
// 		return {
// 		  quantity: prevState.quantity + 1
// 		}
// 	  } else {
// 		return null;
// 	  }
// 	});
// }
// DecreaseItem = () => {
//   this.setState(prevState => {
// 	if(prevState.quantity > 0) {
// 	  return {
// 		quantity: prevState.quantity - 1
// 	  }
// 	} else {
// 	  return null;
// 	}
//   });
// }
// handleChange = (event) => {
//     this.setState({quantity: event.target.value});
//   }
	

	// constructor(props) {
	// 	super(props)
	// 	this.state = {
	// 	  counter: 0
	// 	}
	// 	this.handleIncrement = this.handleIncrement.bind(this);
	// 	this.handleDecrement = this.handleDecrement.bind(this);

	//   }

	//   incrementMe = () => {
	// 	var newCount = this.state.coun
	// 	function like () {
	// 		if (newCount !== 0) {
	// 		  return newCount+=1
	// 		}
	// 		else {
	// 		  return 1
	// 		}
	// 	}
	// 	this.setState({
	// 	  count: like()
	//    })
	// }

	// decrementMe = () => {
	// 	var newCount = this.state.count
	// 	function dislike () {
	// 	  if (newCount !== 0) {
	// 		return newCount-=1
	// 	  }
	// 	  else {
	// 	   return -1
	// 	 }
	//    }
	// 	this.setState({
	// 	  count: dislike()
	// 	})
	//  }

  
//   constructor(props) {
//     super(props)
//     this.state = {
//       counter: 0
//     }
//     this.myFunction = this.myFunction.bind(this);
//   }
  
//   myFunction(e) {
//     alert("The value of counter is " + this.state.counter)
//     this.setState({ counter: this.state.counter + 1 })
//   }

// myFunction = () => {
// 	let newCount = this.state.count + 1
//     this.setState({
//       count: newCount
//     })
// }

	//  handleIncrement = () => {
	// 	this.setState(prevCount => prevCount + 1);
	//   };
	  
	//  handleDecrement = () => {
	// 	this.setState(prevCount => prevCount - 1);
	//   };


  render() {
	  const {selected, closePopup} = this.props;
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


				<div >
				
					<div class="voting">
						<button  onClick={() => this.handleLike()} id="likebtn"  >
							<i class="fas fa-thumbs-up"></i>
							<h5>your count is{this.state.like}</h5>
						</button>
						<button  onClick={() => this.handleDislike()} id="dislikebtn" className={({ ["active"]: this.state.dislikeActive })}>
							<i class="fas fa-thumbs-down">your count is{this.state.dislike}</i>
						</button>
					</div>


					{/* <p>Hello From GFG</p>
					<button onClick={this.myFunction}>Click me!</button> */}
				</div>
		</div>
	</section>
	);
}
}
  
export default App;

			

// function Popup({ selected, closePopup }) {

// 	const [count, setCount] = useState(0);

// 	// const handleIncrement = () => {
// 	// 	setCount(prevCount => prevCount + 1);
// 	//   };
	  
// 	// const handleDecrement = () => {
// 	// 	setCount(prevCount => prevCount - 1);
// 	//   };

// 	return (
// 		<section className="popup">
// 			<div className="content">
// 				<h2>{ selected.Title } <span>({ selected.Year })</span></h2>
				
// 				<p className="rating">Rating: {selected.imdbRating}</p>
// 				<p>{selected.Director}</p>
// 				<div className="plot">
				
// 					<img src={selected.Poster} alt=''/>
					
// 					<p>{selected.Plot}</p>
					
// 				</div>
				
// 				<button className="close" onClick={closePopup}>Close</button>
				
		
// 				{/* onClick={handleIncrement} */}
// 				{/* onClick={handleDecrement} */}
// 			 {/* Method 1 */}
// 			<div class="voting">
// 				<button onClick={() =>setCount(count + 1)} id="likebtn" >
// 					<i class="fas fa-thumbs-up"></i>
// 					<h5>your count is {count}</h5>
// 				</button>
					
// 				<button onClick={() =>setCount(count - 1)} id="dislikebtn">
// 					<i class="fas fa-thumbs-down">your count is {count}</i>
// 				</button>
					
// 			</div>

			 

		
// 			</div>
// 		</section>
// 		)
// 	}
		
// export default Popup



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