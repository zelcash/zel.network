	<!-- Javascripts & Jquery -->
	<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js"></script>
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
	<script src="<?php echo $base_url;?>/js/owl.carousel.min.js"></script>
	<script src="<?php echo $base_url;?>/js/main.js"></script>
	<script src="<?php echo $base_url;?>/js/jquery.paroller.min.js"></script>
	<script src="<?php echo $base_url;?>/js/aos.js"></script>
	<script src="<?php echo $base_url;?>/js/multilanguage.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/1.5.10/clipboard.min.js"></script>
	<script>
	$("[data-paroller-factor]").paroller();

    AOS.init();

	// Select all links with hashes
	$('a[href*="#"]')
	// Remove links that don't actually link to anything
	.not('[href="#"]')
	.not('[href="#0"]')
	.click(function(event) {
		// On-page links
		if (
		location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
		&&
		location.hostname == this.hostname
		) {
		// Figure out element to scroll to
		var target = $(this.hash);
		target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
		// Does a scroll target exist?
		if (target.length) {
			// Only prevent default if animation is actually gonna happen
			event.preventDefault();
			$('html, body').animate({
			scrollTop: target.offset().top
			}, 1000, function() {
			// Callback after animation
			// Must change focus!
			var $target = $(target);
			$target.focus();
			if ($target.is(":focus")) { // Checking if the target was focused
				return false;
			} else {
				$target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
				$target.focus(); // Set focus again
			};
			});
		}
		}
	});

	$("* [rel='tooltip']").tooltip({
		html: true, 
		placement: 'top'
	});

	$('.copyt').tooltip({
		trigger: 'click',
		placement: 'right'
	});

	function setTooltip(btn, message) {
		btn.tooltip('hide')
		.attr('data-original-title', message)
		.tooltip('show');
	};

	function hideTooltip(btn) {
		setTimeout(function() {
			btn.tooltip('hide');
  		}, 1000);
	};

	var clipboard = new Clipboard('.copyt');

	clipboard.on('success', function(e) {
		var btn = $(e.trigger);
		setTooltip(btn, 'Copied');
		hideTooltip(btn);
	});
    </script>