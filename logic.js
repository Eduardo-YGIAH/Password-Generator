//FUNCTION DEFINITION TO CREATE RANDOM PASSWORD
function randomPassword(string, n) {
	let str = '';
	while (str.length < n) {
		str += string[Math.floor(Math.random() * string.length)];
	}
	return str;
}

//FUNCTION DEFINITION TO VALIDATE IF INPUT IS NUMBER
function isNumber(value) {
	return typeof value === 'number' && isFinite(value);
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

//LOGIC ON BUTTON CLICK
generateButton.addEventListener('click', function() {
	//DEFINING NUMBER OF CHARACTERES FOR PASSWORD
	tempN = prompt(
		'Please select your desired password length between 8 and 128 characters.',
	);
	if (false) {
		alert('You need to answer the question to generate your new password.');
		tempN = prompt(
			'Please select your desired password length between 8 and 128 characters.',
		);
		setUp();
	} else {
		setUp();
	}
});

//FUNCTION DEFINITION FOR SETTINGS LOGIC
function setUp() {
	num = Number(tempN);
	while (num < 8 || num > 128 || !isNumber(num)) {
		tempN = prompt('Invalid! please select a number between 8 and 128.');
		num = Number(tempN);
	}
	console.log(num);

	//DEFINING BOOLEAN VALUES FOR CHARACTER SETS
	let uppercaseSelection = confirm(
		'Your password will be using lowercases. Would you like it to have uppercases as well?',
	);
	let numbersSelection = confirm('Would you like it to have Numbers?');
	let specialcharsSelection = confirm(
		'Would you like it to have special characteres?',
	);

	//LOGIC FOR THE USE OF DIFFERENT CHARACTER SETS, NOTE: LOWERCASE IS ALWAYS USED

	//USE LOWERCASE ONLY
	if (!uppercaseSelection && !numbersSelection && !specialcharsSelection) {
		password = randomPassword(charset.lowerCase, num);
	}
	// USE LOWERCASE AND UPPERCASE ONLY
	else if (
		uppercaseSelection &&
		!numbersSelection &&
		!specialcharsSelection
	) {
		password = randomPassword(charset.lowerCase + charset.upperCase, num);
	}
	//USE LOWERCASE AND NUMBERS ONLY
	else if (
		!uppercaseSelection &&
		numbersSelection &&
		!specialcharsSelection
	) {
		password = randomPassword(charset.lowerCase + charset.nums, num);
	}
	//USE LOWERCASE, UPPERCASE AND NUMBERS
	else if (uppercaseSelection && numbersSelection && !specialcharsSelection) {
		password = randomPassword(
			charset.lowerCase + charset.upperCase + charset.nums,
			num,
		);
	}
	//USE LOWERCASE, UPPERCASE, NUMBERS AND SPECIAL CHARACTERES
	else if (uppercaseSelection && numbersSelection && specialcharsSelection) {
		password = randomPassword(charset.fullSet, num);
	}
	//USE LOWERCASE AND SPECIAL CHARACHTERES ONLY
	else if (
		!uppercaseSelection &&
		!numbersSelection &&
		specialcharsSelection
	) {
		password = randomPassword(
			charset.lowerCase + charset.specialCharacters,
			num,
		);
	}
	//USE LOWERCASE, NUMBERS AND SPECIAL CHARACTERES
	else if (!uppercaseSelection && numbersSelection && specialcharsSelection) {
		password = randomPassword(
			charset.lowerCase + charset.nums + charset.specialCharacters,
			num,
		);
	}
	//USE LOWERCASE, UPPERCASE AND SPECIAL CHARACTERES
	else if (uppercaseSelection && !numbersSelection && specialcharsSelection) {
		password = randomPassword(
			charset.lowerCase + charset.upperCase + charset.specialCharacters,
			num,
		);
	}
	//ERROR CATCHING - ANY OTHER CONDITION NOT COVERED
	else {
		return alert(
			'Oopps, I failed to cover those settings... Please try again with different settings.',
		);
	}
	return (passwordViewer.value = password);
}

//COPY GENERATED PASSWORD TO CLIPBOARD
copyButton.addEventListener('click', function() {
	let copyPassword = document.querySelector('#password');
	copyPassword.select();
	copyPassword.setSelectionRange(0, 99999);
	document.execCommand('copy');
	alert('Password has been copied to your Clipboard!');
});
