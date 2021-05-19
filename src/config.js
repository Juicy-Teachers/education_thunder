const APIurl =
	window.location.hostname === 'localhost'
		? 'https://localhost:5000'
		: 'https://stark-savannah-12914.herokuapp.com/trivia';
export default APIurl;