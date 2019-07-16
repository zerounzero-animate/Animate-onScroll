function check_if_in_view() {
		  var window_height = $window.height();
		  var window_top_position = $window.scrollTop();
		  var window_bottom_position = (window_top_position + window_height);
			
			//video row1
			$.each($animation_video_row1, function() {
			var $element = $(this);
			var element_height = $element.outerHeight();
			var element_top_position = $element.offset().top;
			var element_bottom_position = (element_top_position + element_height);

			
			if ((element_bottom_position >= window_top_position) &&
				(element_top_position <= window_bottom_position)) {
			  $element.addClass('video-box');
			} else {
			  $element.removeClass('video-box');
			}
		  });
			//video row2
			$.each($animation_video_row2, function() {
			var $element = $(this);
			var element_height = $element.outerHeight();
			var element_top_position = $element.offset().top;
			var element_bottom_position = (element_top_position + element_height);

			
			if ((element_bottom_position >= window_top_position) &&
				(element_top_position <= window_bottom_position)) {
			  $element.addClass('video-box');
			} else {
			  $element.removeClass('video-box');
			}
		  });
			//line
			$.each($animation_line, function() {
			var $element = $(this);
			var element_height = $element.outerHeight();
			var element_top_position = $element.offset().top;
			var element_bottom_position = (element_top_position + element_height);

			
			if ((element_bottom_position >= window_top_position) &&
				(element_top_position <= window_bottom_position)) {
			  $element.addClass('line');
			} else {
			  $element.removeClass('line');
			}
		  });
			//left col
		  $.each($animation_left_col, function() {
			var $element = $(this);
			var element_height = $element.outerHeight();
			var element_top_position = $element.offset().top;
			var element_bottom_position = (element_top_position + element_height);

			
			if ((element_bottom_position >= window_top_position) &&
				(element_top_position <= window_bottom_position)) {
			  $element.addClass('left-right-animation');
			} else {
			  $element.removeClass('left-right-animation');
			}
		  });
			//right col
			 $.each($animation_right_col, function() {
			var $element = $(this);
			var element_height = $element.outerHeight();
			var element_top_position = $element.offset().top;
			var element_bottom_position = (element_top_position + element_height);

			//check to see if this current container is within viewport
			if ((element_bottom_position >= window_top_position) &&
				(element_top_position <= window_bottom_position)) {
			  $element.addClass('right-left-animation');
			} else {
			  $element.removeClass('right-left-animation');
			}
		  });
		}

		$window.on('scroll resize', check_if_in_view);
		$window.trigger('scroll');
		