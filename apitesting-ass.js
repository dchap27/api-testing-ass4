var source = "https://api.icndb.com/jokes/random/"

function jokesApplication(value){
	this.value = value;

	this.getJoke = function(){
		var xhr = new XMLHttpRequest();
		xhr.open("GET", source + value, false);
		xhr.send();
		//console.log(xhr.response);
		var resp = JSON.parse(xhr.response);
		console.log(resp.value[0].joke)
		return resp.value[0].joke;

        //return (this.notes.push(this.content));// adds new content to the list of notes
		};
}


$(document).ready(function() {


  $('.joke-button').click(function() {
  	var jokesapp = new jokesApplication(1);
	
    $('.new-jokes').html(jokesapp.getJoke());
  });
});
