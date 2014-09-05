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
	$('#file_upload_submit').hide();

	$('.add').click(function(e){
		$('#images').append("<span class='btn btn-info btn-block btn-file'> " +
							"<span class='file_desc'> Select your file!</span>" +
    						"<input name='images[][avatar]' type='file'>" +
						"</span>");
		e.preventDefault();
	});

	$(document).on('change', '.btn-file :file', function() {
		var input = $(this);
		var numFiles = input.get(0).files ? input.get(0).files.length : 1;
		//label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
		var label = "Add selected files (" + numFiles + ")";
		//new approach
		$('#file_upload_submit').val(label).show();
		$('#file_upload_btn').hide();
	});

	$('#update').click(function(){
		$('#updateForm').submit();
	})
})