function deleteconfirm(editurl){
	var pathname = window.location.pathname
	if(confirm('Are you sure you want to delete?')){
		jQuery.post(editurl, { 'action[delete]': '' },
			function(data){
				window.location.href = pathname;
		});
	}
}

//(function($) {
$ = jQuery;
$(document).ready(function() {
	/*
	 * this section, is add Actions.
	 * Actions have showpage(if have page head), edit, delete
	 *
	 * unnecessary actions page:
	 *	   Extensions: symphony extension page
	 *	   files: this is File manager extension
	 */

	if(($('form h2').html() != 'Extensions') && ($('form h2 a').html() != 'files')){
		$('.selectable thead tr th:last').after('<th scope="col">Actions</th>');

		var pageindex = '';
		$('.selectable thead tr th').each(function() {
			if($(this).html() == 'Page'){
				pageindex = $(this).index();
				$('.selectable thead tr th:eq(' + pageindex + ')').hide();
				return false;
			}
		});

		if(pageindex != ''){
			$('.selectable tbody tr').each(function() {
				$(this).find('td:eq(' + pageindex + ')').hide();
			});
		}

		$('.selectable tbody tr').each(function() {
			var edit = $(this).find('td:eq(0) a').attr('href');

			if(pageindex != ''){
				var page = $(this).find('td:eq(' + pageindex + ') a').attr('href');
				$(this).find('td:last').after('<td><a href="' + page + '">show pages</a>&nbsp;-&nbsp;<a href="' + edit + '">edit</a>&nbsp;-&nbsp;<a href="#" onclick="deleteconfirm(\'' + edit + '\')">delete</td>');
			} else {
				$(this).find('td:last').after('<td><a href="' + edit + '">edit</a>&nbsp;-&nbsp;<a href="#" onclick="deleteconfirm(\'' + edit + '\')">delete</td>');
			}
		});
	}
});
//})(jQuery.noConflict());
