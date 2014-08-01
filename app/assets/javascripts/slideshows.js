

$(document).ready(function(){
//	EVIL DRAG AND DROP MUST WAIT AGAIN
	// $('img').draggable({
	// 	containment: '#photoDiv', 
	// 	opacity: 0.85,
	// 	zIndex:10000, 
	// 	appendTo: 'body'
	// });

	$('#photoDiv').on('click', 'img', function(){
		if($(this).hasClass('inShow'))
		{
			$(this).remove();
			$(this).addClass('outShow').removeClass('inShow');
			$('#out').append($(this));
		}
		else
		{
			$(this).remove();
			$(this).addClass('inShow').removeClass('outShow');
			$('#in').append($(this));
		}
	})

	$('#update').click(function(){
		$.each($('#in').children('.inShow'),function(key, val){
			$('form').append("<input type='hidden' name=picture[picture_ids][] value='"+$(val).attr('id')+"'>");
			
		})
		
		$('form').append("<input type='hidden' name='picture[name]' value='"+$('#name').val()+"'>");
		$('form').submit();
	})



	// //allow only inserted pictures to be removed from the slideshow
	// $('#out').droppable({
	// 	//accept: '.inShow', 
	// 	drop: function(event, ui){
	// 		alert('here');
	// 		var id = ui.draggable[0].id;
	// 		$(ui.draggable).removeClass('outShow').addClass('inShow');
	// 		//$(ui.draggable);
	// 		//console.log(id);
	// 	}
	// })

	// //allow only the non-inserted pictures to be added to the slideshow
	// $('#in').droppable({
	// 	//accept: '.outShow', 
	// 	drop: function(event, ui){
	// 		var id = ui.draggable[0].id;
	// 		$('#'+id).addClass('outShow')
	// 		$('#'+id).removeClass('inShow');
	// 		console.log(id);
	// 	}
	// })
})