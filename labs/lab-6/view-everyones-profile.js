$(document).ready(function(){
	$.ajax({
		url: 'https://web.iiit.ac.in/~harshit.harchani/itws2/profiles/',
		method: 'POST',

		data: {},

		success: function(response){
			var str = "";
			for(var i=0;i<response.length;i++){
				str += '<li>' + '<a href=\ "#\" onclick=\'show(\"' + response[i].url + '\");\'>' + response[i].name + '</a></li>';
			}
			$("ul").html(str);
		},
	});
});

var show = function (elem) {
	$.ajax({
		url: 'https://web.iiit.ac.in/~harshit.harchani/itws2/' + elem,
		method: 'GET',

		data: {},

		success: function(response){
			$(".profile").html("<img src=\"" + response.image_url + "\"><h2>" + response.name + "</h2><div><p>Works at</p><p>" + response.company + "</p></div><div><p>Lives at</p><p>" + response.address + "</p></div><div><p>Contact</p><p>" + response.phoneNumber + "</p></div>");			
		},
	});
}