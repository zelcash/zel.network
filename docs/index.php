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
			<h2 data-aos="fade-down" data-aos-duration="2000" class="">Whitepaper & <br>Documents</h2>
			<div data-aos="zoom-in" data-aos-duration="500" class="site-beradcamb">
				<a href="<?php echo $base_url;?>/" class="lhome">Home </a>
				<i class="fa fa-angle-right"></i><span class="">Whitepaper</span>
			</div>
		</div>
	</section>
	<div class="page-info-section-line"></div>
	<!-- Page info end -->


	<!-- About section -->
	<section class="about-section spad">
		<div class="container d-flex flex-wrap">
			<div data-aos="fade-right" data-aos-duration="3000" class="flex-fill ml-md-3 mr-md-3">
				<div class="about-text">
					<h3>Marketing Plan | English</h3>
					<a href="<?php echo $base_url;?>/pdf/Marketing_overview_rev1_English.pdf" target="_blank" class="site-btn sb-gradients sbg-line mt-3 mr-3">Download</a><br><br>
					<h4>Translated Versions:</h4><br>
					<ul>
						<li><a href="<?php echo $base_url;?>/pdf/Marketing_overview_rev1_French.pdf" target="_blank">French</a></li>
						<li><a href="<?php echo $base_url;?>/pdf/Marketing_overview_rev1_Greek.pdf" target="_blank">Greek</a></li>
						<li><a href="<?php echo $base_url;?>/pdf/Marketing_overview_rev1_Hindi.pdf" target="_blank">Hindi</a></li>
						<li><a href="<?php echo $base_url;?>/pdf/Marketing_overview_rev1_Polish.pdf" target="_blank">Polish</a></li>
					</ul>
				</div>
			</div>
			<div data-aos="fade-right" data-aos-duration="3000" class="flex-fill mt-sm-5 mt-md-0 mt-5 ml-md-3 mr-md-3">
				<div class="about-text">
					<h3>Whitepaper V2 | English</h3>
					<a href="<?php echo $base_url;?>/pdf/zelcash_whitepaper_v2_English.pdf" target="_blank" class="site-btn sb-gradients sbg-line mt-3 mr-3">Download</a><br><br>
					<h4>Translated Versions:</h4><br>
					<ul>
						<li><a href="<?php echo $base_url;?>/pdf/zelcash_whitepaper_v2_Bulgarian.pdf" target="_blank">Bulgarian</a></li>
						<li><a href="<?php echo $base_url;?>/pdf/zelcash_whitepaper_v2_French.pdf" target="_blank">French</a></li>
						<li><a href="<?php echo $base_url;?>/pdf/zelcash_whitepaper_v2_Greek.pdf" target="_blank">Greek</a></li>
						<li><a href="<?php echo $base_url;?>/pdf/zelcash_whitepaper_v2_Hindi.pdf" target="_blank">Hindi</a></li><br>
					</ul>
					<h5 class="mt-4">Previous Whitepapers</h5>
					<ul>
						<li><a href="<?php echo $base_url;?>/pdf/zelcash_whitepaper_v1.pdf" target="_blank">Whitepaper V1 | English</a></li>
					</ul>
				</div>
			</div>
			<div data-aos="fade-right" data-aos-duration="3000" class="flex-fill mt-sm-5 mt-md-0 mt-5 ml-md-3 mr-md-3">
				<div class="about-text">
					<h3>ZelTreZ How-To | English</h3>
					<a href="<?php echo $base_url;?>/pdf/ZelTreZ_Basics_Guide_v1_English.pdf" target="_blank" class="site-btn sb-gradients sbg-line mt-3 mr-3">Download</a><br><br>
					<h4>Translated Versions:</h4>
					<h6>Text translations only. Use the English version screenshots.</h6><br>
					<ul>
						<li><a href="<?php echo $base_url;?>/pdf/ZelTreZ_Basics_Guide_v1_Bulgarian.pdf" target="_blank">Bulgarian</a></li>
						<li><a href="<?php echo $base_url;?>/pdf/ZelTreZ_Basics_Guide_v1_Dutch.pdf" target="_blank">Dutch</a></li>
						<li><a href="<?php echo $base_url;?>/pdf/ZelTreZ_Basics_Guide_v1_Finnish.pdf" target="_blank">Finnish</a></li>
						<li><a href="<?php echo $base_url;?>/pdf/ZelTreZ_Basics_Guide_v1_French.pdf" target="_blank">French</a></li>
						<li><a href="<?php echo $base_url;?>/pdf/ZelTreZ_Basics_Guide_v1_Greek.pdf" target="_blank">Greek</a></li>
						<li><a href="<?php echo $base_url;?>/pdf/ZelTreZ_Basics_Guide_v1_Hindi.pdf" target="_blank">Hindi</a></li>
						<li><a href="<?php echo $base_url;?>/pdf/ZelTreZ_Basics_Guide_v1_Polish.pdf" target="_blank">Polish</a></li>
						<li><a href="<?php echo $base_url;?>/pdf/ZelTreZ_Basics_Guide_v1_Russian.pdf" target="_blank">Russian</a></li>
						<li><a href="<?php echo $base_url;?>/pdf/ZelTreZ_Basics_Guide_v1_Ukrainian.pdf" target="_blank">Ukrainian</a></li>
					</ul>
				</div>
			</div>
		</div>
	</section>
	<!-- About section end -->

    <?php include '../footer.php';?>

    <?php include '../scripts.php';?>

    <script>
    $(document).ready(function(){
        $.MultiLanguage('<?php echo $base_url;?>/lang/docs.json');
    });
    </script>

</body>
</html>