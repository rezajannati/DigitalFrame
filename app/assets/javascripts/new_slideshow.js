$(document).ready(function(){

	$('#out_ss').on('click', 'img', function(){
		var id = $(this).attr('id');
		var input_id = "input" + id;
		$('#new_ss_form').append("<input id='"+ input_id +"' type='hidden' name='picture[picture_ids][]' value='"+id+"'>");
		$(this).remove();
		$('#in_ss').append($(this));
	})

	$('#in_ss').on('click','img', function(){
		var id = $(this).attr('id');
		var input_id = "input" + id;
		$(this).remove();
		$('#out_ss').append($(this));
	})

	$('#new_ss_btn').click(function(){
		$('#new_ss_form').submit();
	})
});