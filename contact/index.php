<!DOCTYPE html>
<html lang="en">
<head>
    <?php include '../head.php';?>
</head>
<body>

    <?php include '../menu.php';?>

	<!-- Page info section -->
	<section class="page-info-section" data-paroller-factor="0.5">
		<div class="container">
			<h2 data-aos="fade-down" data-aos-duration="2000" class="lcontactus">Contact Us</h2>
			<div data-aos="zoom-in" data-aos-duration="500" class="site-beradcamb">
				<a href="<?php echo $base_url;?>/" class="lhome">Home </a>
				<i class="fa fa-angle-right"></i><span class="lcontactus">Contact us</span>
			</div>
		</div>
	</section>
	<div class="page-info-section-line"></div>
	<!-- Page info end -->


	<!-- Contact section -->
	<section class="contact-page spad">
		<div class="container">
			<div class="row">
				<div class="col-lg-7">
					<form id="contact-form" method="post" action="contact.php" role="form" class="contact-form">

						<div class="messages"></div>

						<div class="row controls">
							<div class="col-md-6">
								<div class="form-group">
									<input id="form_name" type="text" name="name" class="form-control check-form" placeholder="First Name*:" required="required" data-error="First name is required.">
									<div class="help-block with-errors"></div>
								</div>
							</div>
							<div class="col-md-6">
								<div class="form-group">
									<input id="form_lastname" type="text" name="lastname" class="form-control check-form" placeholder="Last Name*:" required="required" data-error="Last name is required.">
									<div class="help-block with-errors"></div>
								</div>
							</div>
							<div class="col-md-6">
								<div class="form-group">
									<input id="form_email" type="email" name="email" class="form-control check-form" placeholder="Email Adress*:" required="required" data-error="Valid email is required.">
									<div class="help-block with-errors"></div>
								</div>
							</div>
							<div class="col-md-6">
								<div class="form-group">
									<input id="form_phone" type="tel" name="phone" class="form-control check-form" placeholder="Phone Number:">
									<div class="help-block with-errors"></div>
								</div>
							</div>
							<div class="col-md-12">
								<div class="form-group">
									<textarea id="form_message" name="message" class="form-control" placeholder="Tell us about your question!" required="required" data-error="Please, leave us a message."></textarea>
									<div class="help-block with-errors"></div>
								</div>

								<input type="submit" class="btn btn-success btn-send" value="Send message">

							</div>
						</div>
					</form>
				</div>
				<div class="col-lg-5 mt-5 mt-lg-0">
					<div class="map" id="map-canvas"></div>
				</div>
			</div>
		</div>
	</section>
	<!-- Contact section end -->

    <?php include '../footer.php';?>

    <?php include '../scripts.php';?>

    <script src="validator.js"></script>
	<script src="contact.js"></script>

    <script>
    $(document).ready(function(){
        $.MultiLanguage('<?php echo $base_url;?>/lang/contact.json');
    });
    </script>

    <!-- load for map -->
	<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB57Q6M7gpTD_Khv5efbIXCqS6Sj2-nAsY"></script>
	<script src="<?php echo $base_url;?>/js/map.js"></script>

</body>
</html>