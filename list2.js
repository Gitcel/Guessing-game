var wordsList;
var wordSymb = [];
var word;
var wordArray = [];

function randomWord() {

	var wordsList = ["Earth", "Wind", "Fire", "Water", "Ether", "Nature", "Plants", "Trees",
				"Sky", "Light", "Darkness", "Vitality", "Soul", "Spirit", "Star", "Gate"];
	/*var wordsList = ["Darkness", "Vitality"];*/

	var word = wordsList[Math.floor(Math.random() * wordsList.length)];
	console.log(word);

	for (var strToArr = 0; strToArr < word.length; strToArr++) {

		wordArray[strToArr] = word.charAt(strToArr);

	}
	
	console.log(wordArray);
	console.log(typeof(wordArray));
	console.log(wordArray.length);

	var symbol = ' _';
	var symbolFirst = '_';
	wordSymb[0] = symbolFirst;		

	for (var i = 1; i < wordArray.length; i++) {

		wordSymb[i] = symbol;

	}

	console.log(wordSymb);

};

function wordSize() {

	var randWordVarMessages = document.getElementById('word');

	if (wordArray.length == 3) {

		randWordVarMessages.style.marginLeft = '450px';

	}

	else if (wordArray.length == 4) {

		randWordVarMessages.style.marginLeft = '420px';

	}

	else if (wordArray.length == 5) {

		randWordVarMessages.style.marginLeft = '370px';

	}

	else if (wordArray.length == 6) {

		randWordVarMessages.style.marginLeft = '310px';
		randWordVarMessages.style.fontSize = '140px';

	}

	else if (wordArray.length == 7) {

		randWordVarMessages.style.marginLeft = '240px';
		randWordVarMessages.style.fontSize = '110px';

	}

	else if (wordArray.length == 8) {

		randWordVarMessages.style.marginLeft = '320px';
		randWordVarMessages.style.marginTop = '220px';
		randWordVarMessages.style.fontSize = '100px';
		
	}

}