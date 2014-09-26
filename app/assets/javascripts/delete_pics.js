$(document).ready(function(){
	$('.delete-checkbox').click(function(){
		//if the button is hidden, show it:
		if($('#delete-btn').css('display') == 'none'){
			//$('#delete-btn').show();
		}
		//check if there are no more checked checkboxes
		else if(!$('.delete-checkbox').is(':checked'))
		{
			//$('#delete-btn').hide();
		}	

		var id = $(this).attr('value');
		var input_id = "input_" + id;
		if($(this).is(':checked')){
			//set a unique id for the form input so it can be removed easily!
			$('#deletePicsForm').append("<input id='" +input_id+ "' type='hidden' name='delete_ids[]' value='"+id+"'>");
		}
		else
		{
			$('#'+input_id).remove();
		}
	})

	$('#delete-btn').click(function(){
		$('#deletePicsForm').submit();
	})
})