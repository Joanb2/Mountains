
var prefix = "https://cors-anywhere.herokuapp.com/";
var url = prefix + "http://recruitment-api.pyt1.stg.jmr.pl";


/* {

  login : "correct_login@example.com",
  password : "C0rr3Ct_P@55w0rd"

}*/


document.getElementById('send').addEventListener('click', function(e) {
	e.preventDefault();

	var params = {
		login : document.getElementById('login').value,
 		password : document.getElementById('password').value
	}

	var xhr = new XMLHttpRequest();

	xhr.open('POST', url + '/login', true);
	xhr.setRequestHeader('Content-Type', 'application/json');
	xhr.onload = function() {
			console.log(responseText);
		}
	xhr.send(JSON.stringify(params));
});



var form = document.getElementById('form');

function openForm() {
	form.style.display = 'block';
}

var close = document.getElementById('close');

close.onclick = function() {
	form.style.display = 'none';
}

document.getElementById('enter').addEventListener('click', function() {
	openForm();
});
