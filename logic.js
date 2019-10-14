//FUNCTION DEFINITION TO CREATE RANDOM PASSWORD
function randomPassword(string, n) {
	let str = '';
	while (str.length < n) {
		str += string[Math.floor(Math.random() * string.length)];
	}
	return str;
}

//OBJECT DEFINITION WITH DIFFERENT CHARACTER SETS
const charset = {
	fullSet:
		'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=',
	lowerCase: 'abcdefghijklmnopqrstuvwxyz',
	upperCase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
	nums: '0123456789',
	specialCharacters: '!@#$%^&*()_+~`|}{[]:;?><,./-=',
};

//SELECTION OF HTML ELEMENTS
const generateButton = document.querySelector('#generate');
const passwordViewer = document.querySelector('#password');
const copyButton = document.querySelector('#copy');

//SETTING VARIABLES
let tempN;
let num;
let password;
