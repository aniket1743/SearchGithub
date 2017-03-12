var ego = document.getElementById("ego");
var tgo = document.getElementById("tgo");


function printTagResult() {
	var responseObj = JSON.parse(this.responseText);
	objects = responseObj.items;
	document.getElementById("stag").innerHTML = '';
	for(i = 0;i < objects.length;i++){
		document.getElementById("stag").innerHTML += '<br><img src=' + objects[i].avatar_url + ' height="100" width="100">';
		document.getElementById("stag").innerHTML += '<br>'+ objects[i].login;
		document.getElementById("stag").innerHTML += '<br><a href="'+ objects[i].html_url +'"> Overview </a>';
		document.getElementById("stag").innerHTML += '<br/>';
	}
}

function printEmailResult(){
	var responseObj = JSON.parse(this.responseText);
	objects = responseObj.items;
	document.getElementById("semail").innerHTML = '';
	for(i = 0;i < objects.length;i++){
		document.getElementById("semail").innerHTML += '<br><img src=' + objects[i].avatar_url + ' height="100" width="100">';
		document.getElementById("semail").innerHTML += '<br>'+ objects[i].login;
		document.getElementById("semail").innerHTML += '<br><a href="'+ objects[i].html_url +'"> Overview </a>';
		document.getElementById("semail").innerHTML += '<br/>';
	}	
}

function search_email(){
	console.log("Search by Email");
	var email = document.getElementById("email").value;
	console.log(email);
	var request = new XMLHttpRequest();
	var url = 'https://api.github.com/search/users?q='+ email +'in:email';
	console.log(url);
	request.onload = printEmailResult;
	request.open('get', url, true);
	request.send();
	document.getElementById("email").value = "";
}

function search_tag(){
	console.log("Search by Tag");
	var tag = document.getElementById("tag").value;
	console.log(tag);
	var request = new XMLHttpRequest();
	var url = 'https://api.github.com/search/users?q=language:'+ tag;
	console.log(url);
	request.onload = printTagResult;
	request.open('get', url, true);
	request.send();
	document.getElementById("tag").value = "";
}

ego.onclick = search_email;
tgo.onclick = search_tag;