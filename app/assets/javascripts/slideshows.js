

$(document).ready(function(){

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

})