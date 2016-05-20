var source = "https://api.icndb.com/jokes/random/"

function jokesApplication(value){
	this.value = value;

	this.getJoke = function(){
		var xhr = new XMLHttpRequest();
		xhr.open("GET", source + value, false);
		xhr.send();
		console.log(xhr.response);

        //return (this.notes.push(this.content));// adds new content to the list of notes
		};
}

var jokesapp = new jokesApplication(prompt('input the number of jokes to display'));
jokesapp.getJoke();