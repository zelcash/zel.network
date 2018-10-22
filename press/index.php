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
			<h2 data-aos="fade-down" data-aos-duration="2000">Press</h2>
			<div data-aos="zoom-in" data-aos-duration="500" class="site-beradcamb">
				<a href="<?php echo $base_url;?>/" class="lhome">Home </a>
				<i class="fa fa-angle-right"></i><span>Press</span>
			</div>
		</div>
	</section>
	<div class="page-info-section-line"></div>
	<!-- Page info end -->


	<!-- Downloads section -->
	<section id="downloads" class="downloads-section spad">
		<div class="container">
			<div data-aos="fade-down" data-aos-duration="2000" class="section-title text-center">
				<h2>Logos</h2>
				<p>Zel logos and usage</p>
			</div>
			<div class="row">
				<div data-aos="zoom-in" data-aos-duration="500" class="col-md-4 downloads">
					<div class="downloads-step">
						<figure class="downloads-icon">
							<img src="<?php echo $base_url;?>/img/logo-zelcash-text.svg" alt="#">
						</figure>
						<h4>ZelCash</h4>
						<hr>
						<a href="ZelCash.zip"><button class="site-btn sb-gradients ldownload">Download</button></a>
					</div>
				</div>
				<div data-aos="zoom-in" data-aos-duration="500" class="col-md-4 downloads">
					<div class="downloads-step">
						<figure class="downloads-icon">
							<img src="<?php echo $base_url;?>/img/logo-zelcash-round.svg" alt="#">
						</figure>
						<h4>Zelcube</h4>
						<hr>
						<a href="Zelcube.zip"><button class="site-btn sb-gradients ldownload">Download</button></a>
						</div>
				</div>
				<div data-aos="zoom-in" data-aos-duration="500" class="col-md-4 downloads">
					<div class="downloads-step">
						<figure class="downloads-icon">
							<img src="<?php echo $base_url;?>/img/logo-zelcore-text.svg" alt="#">
						</figure>
						<h4>ZelCore</h4>
						<hr>
						<a href="ZelCore.zip"><button class="site-btn sb-gradients ldownload">Download</button></a>
					</div>
				</div>
				<div data-aos="zoom-in" data-aos-duration="500" class="col-md-4 downloads">
					<div class="downloads-step">
						<figure class="downloads-icon">
							<img src="<?php echo $base_url;?>/img/logo-zelcore-round.svg" alt="#">
						</figure>
						<h4>ZelCorecube</h4>
						<hr>
						<a href="ZelCorecube.zip"><button class="site-btn sb-gradients ldownload">Download</button></a>
					</div>
				</div>
				<div data-aos="zoom-in" data-aos-duration="500" class="col-md-4 downloads">
					<div class="downloads-step">
						<figure class="downloads-icon">
							<img src="<?php echo $base_url;?>/img/zelcash-accepted.png" alt="#">
						</figure>
						<h4>ZelCash Accepted Here</h4>
						<hr>
						<a href="ZelCash-Accepted.zip"><button class="site-btn sb-gradients ldownload">Download</button></a>
					</div>
				</div>
			</div>

			<div class="pressinfo clearfix mt-6 spad">
				<div class="float-sm-left col-12 col-sm-6">
					<h3>This is allowed</h3>
					<ul class="hanging-icon-list">
					<li><i class="fas fa-check"></i> Use the ZelCash logo or Zelcube to link to zel.cash</li>
					<li><i class="fas fa-check"></i> Use the Zelcube logo in pools or in exchanges</li>
					<li><i class="fas fa-check"></i> Use the ZelCore logo or ZelCorecube to link to zelcore.io</li>
					</ul>
				</div>
				<div class="float-sm-left col-12 col-sm-6 mt-6 mt-sm-0">
					<h3>Please, don’t do these things</h3>
					<ul class="hanging-icon-list">
					<li><i class="fas fa-times"></i> Use the Zelcubes or ZelCash logo for your application’s icon</li>
					<li><i class="fas fa-times"></i> Create a modified version of the Zelcubes or ZelCash logo</li>
					<li><i class="fas fa-times"></i> Integrate the Zelcubes or ZelCash logo into your logo</li>
					<li><i class="fas fa-times"></i> Use any Zel artwork without permission</li>
					<li><i class="fas fa-times"></i> Sell any Zel artwork without permission</li>
					<li><i class="fas fa-times"></i> Change the colors, dimensions or add your own text/images</li>
					</ul>
				</div>
			</div>

		</div>
	</section>
	<!-- Downloads section end -->

    <?php include '../footer.php';?>

    <?php include '../scripts.php';?>

    <script>
    $(document).ready(function(){
        $.MultiLanguage('<?php echo $base_url;?>/lang/press.json');
    });
    </script>

</body>
</html>