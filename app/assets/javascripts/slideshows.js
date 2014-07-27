//= require jquery-ui
//= require touchpunch.js
$(document).ready(function(){
	$('img').draggable({containment: '.row'});

	//allow only the non-inserted pictures to be added to the slideshow
	$('#inDiv').droppable({
		accept: '.outShow', drop: function(event, ui){
			alert('added!')
		}
	})


	//allow only inserted pictures to be removed from the slideshow
	$('#outDiv').droppable({
		accept: '.inShow', drop: function(event, ui){
			alert('dropped!')
		}
	})
})