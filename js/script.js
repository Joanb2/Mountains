
var prefix = "https://cors-anywhere.herokuapp.com/";
var url = prefix + "https://recruitment-api.pyt1.stg.jmr.pl";


  /*login : "correct_login@example.com",
  password : "C0rr3Ct_P@55w0rd"*/

document.getElementById('send').addEventListener('click', function(e) {
	e.preventDefault();

	var params = {
		login : document.getElementById('login').value,
 		password : document.getElementById('password').value
	}

	var xhr = new XMLHttpRequest();

	xhr.open('POST', url + '/login');
	xhr.setRequestHeader('Content-Type', 'application/json');
	xhr.onload = function() {
			if (this.readyState == 4 && this.status == 200) {
				console.log(xhr.responseText);
				closeForm();
			} else {
				alert('wrong password or login')
			}
		}
	xhr.send(JSON.stringify(params));

});


//Open form to sign up
var form = document.getElementById('form');

function openForm() {
	form.style.display = 'block';
}

document.getElementById('enter').addEventListener('click', function() {
	openForm();
});

//Close form, set message in button

function closeForm() {

	form.style.display = 'none';
	var login = document.getElementById('login').value = '';
	var password = document.getElementById('password').value = '';
	var message = document.getElementById('enter');

}

var close = document.getElementById('close');

close.onclick = function () {
	form.style.display = 'none';
}