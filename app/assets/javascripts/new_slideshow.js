$(document).ready(function(){

	$('#my_pictures').on('click', 'img', function(){
		var id = $(this).attr('id');
		var input_id = "input" + id;
		if($(this).hasClass('selected'))
		{
			//remove 
			$(this).siblings().toggleClass('unselected selected');
			$("input_id").remove();
		}
		else
		{
			$(this).siblings().toggleClass('unselected selected');
			$('#new_ss_form').append("<input id='"+ input_id +"' type='hidden' name='picture[picture_ids][]' value='"+id+"'>");
		}
	})
	
	$('#new_ss_btn').click(function(){
		$('#new_ss_form').submit();
	})
});