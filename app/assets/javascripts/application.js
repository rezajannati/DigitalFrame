// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks


$(document).ready(function(){
	var ready = false;

	$(document).on('change', 'input:file', function() {
		var input = $(this);
		var numFiles = input.get(0).files ? input.get(0).files.length : 1;
		$('.user-top-nav').text("Go! (upload "+ numFiles+" photos)");
		$('label').attr('for', 'dude');
		ready = true;
	});

	$('.user-top-nav').click(function(){
		if(ready)
		{
			$('#new_picture').submit();
		}
	})



	$('#trash').click(function(){
		
			if($(this).hasClass('btn-danger'))
			{
				if($('.imgBox').hasClass('redMarked')) 
				{
					$('#deletePicsForm').submit();
				}
				else {
					$('.imgBox').off('click');
					$('#message h2').css('visibility', 'hidden')
				}
			}

			else
			{
				$('#message h2').css('visibility', 'visible')
				$('.imgBox').on('click', function(){
					var id = $(this).attr('id');
					var input_id = "input_" + id;
					$(this).toggleClass('redMarked notMarked');

					if($(this).hasClass('redMarked'))
					{
						$('#deletePicsForm').append("<input id='" +input_id+ "' type='hidden' name='delete_ids[]' value='"+id+"'>");
					}
					else
					{
						$('#'+input_id).remove();
					}
				})
			}
			$(this).toggleClass('btn-primary btn-danger');
	})
})