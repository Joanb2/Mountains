
var prefix = "https://cors-anywhere.herokuapp.com/";
var url = prefix + "http://recruitment-api.pyt1.stg.jmr.pl";


/* {

  login : "correct_login@example.com",
  password : "C0rr3Ct_P@55w0rd"

}*/





	var params = {
		login : "correct_login@example.com",
 		password : "C0rr3Ct_P@55w0rd",
	}

	var xhr = new XMLHttpRequest();
	xhr.open('POST', url + '/login', true);
	xhr.setRequestHeader('Content-type', 'application/json');
	xhr.send(JSON.stringify(params));
	xhr.onload = function() {
		if (this.status === 200) {
			console.log('ok')
		} else {
			console.log('not ok')
		}
	}
	





var form = document.getElementById('form');

function openForm() {
	form.style.display = 'block';
}


document.getElementById('login').addEventListener('click', function() {
	openForm();
});
