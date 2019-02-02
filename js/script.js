
var prefix = "https://cors-anywhere.herokuapp.com/";
var url = prefix + "http://recruitment-api.pyt1.stg.jmr.pl";


/* {

  login : "correct_login@example.com",
  password : "C0rr3Ct_P@55w0rd"

}*/

	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4) {
			if (xhr.status == 200) {
				console.log(xhr.responseText);
			}
		}

		if (xhr.status == 404) {
			console.log('file not found');
		}
	};

	var params = {

		  login : "correct_login@example.com",
		  password : "C0rr3Ct_P@55w0rd"

		}

	var data = JSON.stringify(params)
	xhr.open('POST', url + '/login');
	xhr.setRequestHeader('Content-Type', 'application/json');
	xhr.send(data);


/*document.getElementById('send').addEventListener('click', function(e) {
	e.preventDefault();

	var params = {
		login : "correct_login@example.com",
 		password : "C0rr3Ct_P@55w0rd"
	}

	var xhr = new XMLHttpRequest();

	xhr.open('POST', url + '/login');
	xhr.setRequestHeader('Content-Type', 'application/json');
	xhr.onload = function() {
			console.log(this.responseText);
		}
	xhr.send(JSON.stringify(params));
});*/



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
