var wordArray = ["Earth", "Wind", "Fire", "Water", "Ether", "Nature", "Plants", "Trees",
				"Sky", "Light", "Darkness", "Vitality", "Soul", "Spirit", "Star", "Gate"];
var wordSymb = "";

function randomWord() {

	var word = wordArray[Math.floor(Math.random() * wordArray.length)];
	console.log(word);
	console.log(typeof(word));
	console.log(word.length);

	var symbol = ' _';	

	for (var i = 0; i < word.length; i++) {
		wordSymb += symbol;
	}	

	var randWordVarMessages = document.getElementById('word');
	console.log(typeof(wordSymb));
	randWordVarMessages.innerHTML = wordSymb;

	if (word.length == 3) {
		randWordVarMessages.style.marginLeft = '450px';
	}

	else if (word.length == 4) {
		randWordVarMessages.style.marginLeft = '420px';
	}

	else if (word.length == 5) {
		randWordVarMessages.style.marginLeft = '370px';
	}

	else if (word.length == 6) {
		randWordVarMessages.style.marginLeft = '300px';
	}

	else if (word.length == 7) {
		randWordVarMessages.style.marginLeft = '240px';
	}

	else if (word.length == 8) {
		randWordVarMessages.style.marginLeft = '240px';
		randWordVarMessages.style.marginTop = '220px';
		randWordVarMessages.style.fontSize = '120px';
	}

};
