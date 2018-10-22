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
			<h2 data-aos="fade-down" data-aos-duration="2000" class="lterms">Terms and Conditions</h2>
			<div data-aos="zoom-in" data-aos-duration="500" class="site-beradcamb">
				<a href="<?php echo $base_url;?>" class="lhome">Home </a>
				<i class="fa fa-angle-right"></i><span class="lterms">Terms and Conditions</span>
			</div>
		</div>
	</section>
	<div class="page-info-section-line"></div>
	<!-- Page info end -->

	<!-- About section -->
	<section id="about" class="about-section spad">
		<div class="container">
			<div data-aos="fade-right" data-aos-duration="3000" class="row">
				<div class="about-text">
					<h6 class="mb-3">Last updated: July 06, 2018</h6>
					<p>Please read these Terms and Conditions ("Terms", "Terms and Conditions") carefully before using the https://www.zel.cash website (the "Service") operated by ZelCash ("us", "we", or "our").
                    Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users and others who access or use the Service.
                    By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service. This Terms and Conditions agreement for ZelCash is powered by TermsFeed.</p>
					<h5 class="mt-5">Links To Other Web Sites</h5>
					<p>Our Service may contain links to third-party web sites or services that are not owned or controlled by ZelCash.
                    ZelCash has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that ZelCash shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.
                    We strongly advise you to read the terms and conditions and privacy policies of any third-party web sites or services that you visit.</p>
					<h5 class="mt-5">Governing Law</h5>
					<p>These Terms shall be governed and construed in accordance with the laws of Switzerland, without regard to its conflict of law provisions.
                    Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service, and supersede and replace any prior agreements we might have between us regarding the Service.</p>
					<h5 class="mt-5">Changes</h5>
					<p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
                    By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.</p>
					<h5 class="mt-5">Contact Us</h5>
					<p>If you have any questions about these Terms, please contact us.</p>
				</div>
			</div>
		</div>
	</section>
	<!-- About section end -->

    <?php include '../footer.php';?>

    <?php include '../scripts.php';?>

    <script>
    $(document).ready(function(){
        $.MultiLanguage('<?php echo $base_url;?>/lang/terms.json');
    });
    </script>

</body>
</html>