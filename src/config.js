const APIurl =
	window.location.hostname === 'localhost'
		? 'https://localhost:5000'
		: 'https://quisbee.herokuapp.com/trivia';
export default APIurl;