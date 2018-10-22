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
			<h2 data-aos="fade-down" data-aos-duration="2000" class="">Charity</h2>
			<div data-aos="zoom-in" data-aos-duration="500" class="site-beradcamb">
				<a href="<?php echo $base_url;?>/" class="lhome">Home </a>
				<i class="fa fa-angle-right"></i><span class="">Charity</span>
			</div>
		</div>
	</section>
	<div class="page-info-section-line"></div>
	<!-- Page info end -->

	<!-- About section -->
	<section class="about-section spad">
		<div class="container">
			<div data-aos="fade-right" data-aos-duration="3000" class="row">
				<div class="col-lg-6 offset-lg-6 about-text">
					<h2 class="lwhatiszelcash">Zel Community Charity Campaign</h2>
					<h5 class="whatis1">The Zel Technologies wants to thank all of our users as your support has been incredible while we continue on this journey of intelligent and inspiring innovation. To give back a little. Any contributions from the community will be greatly appreciated.</h5>
					<p class="whatis2">We will hold votes for charities and causes every month to establish the cause we will donate to. Also, since we have been approached by investors, if you could instead contribute to the chosen charity that would be greatly appreicated since the Dev Fund should allow us to work on the project for many years to come. Contributions in Bitcoin, Ethereum, Litecoin and ZelCash are accepted with addresses below. From everyone at the Zel Technologies, Thank you!</p>
					<a href="#donate" class="site-btn sb-gradients sbg-line mt-5 mr-3">Donate</a>
				</div>
			</div>
			<div data-aos="fade-left" data-aos-duration="3000" class="about-img">
				<div data-paroller-factor="0.2" data-paroller-type="foreground" data-paroller-direction="vertical">
					<img src="<?php echo $base_url;?>/img/worldmap.svg" class="world-img2">
				</div>
				<div data-paroller-factor="0.1" data-paroller-type="foreground" data-paroller-direction="vertical">
					<img src="<?php echo $base_url;?>/img/charity.svg" class="charity-img">
				</div>
			</div>
		</div>
	</section>
	<!-- About section end -->
	
	<!-- Charity section -->
	<section class="about-section mobspad">
		<div class="container">
			<div data-aos="fade-left" data-aos-duration="3000" class="row">
				<div class="col-md-6">
					<h2 class="lwhatiszelcash">The Water Project</h2>
					<h5 class="whatis1">The Water Project, Inc. is a 501(c)(3) non-profit organization unlocking human potential by providing reliable water projects to communities in sub-Saharan Africa who suffer needlessly from a lack of access to clean water and proper sanitation.</h5>
					<p class="whatis2">"For ten years, we have been helping communities gain access to clean, safe water by providing training, expertise and financial support for water project construction through our staff and implementing partners."</p>
					<a href="https://thewaterproject.org/community/profile/zelcash" target="_blank" class="site-btn sb-gradients sbg-line mt-5 mr-3 readmore">Read more</a>
				</div>
				<div data-aos="fade-right" data-aos-duration="3000" class="laptop col-md-6">
					<div data-paroller-factor="0.2" data-paroller-type="foreground" data-paroller-direction="vertical">
						<img src="../img/TWPimg.jpg" class="charity-back">
					</div>
					<div data-paroller-factor="0.1" data-paroller-type="foreground" data-paroller-direction="vertical">
						<img src="../img/TWPLogo-w.png" class="charity-logo">
					</div>
				</div>
			</div>
		</div>
	</section>
	<!-- Charity section end -->
	
	<!-- Donate section -->
	<section id="donate" class="about-section spad">
		<div class="container">
			<div data-aos="fade-left" data-aos-duration="3000" class="row">
				<div class="col-md-6 hero-text">
					<h2 class="lwhatiszelcash">Donate</h2>
					<h5>BTC:</h5><button class="btn btn-primary copyt mb-3" data-clipboard-text="1CFgJLCYp3VruhD685zCwTuJwqGkWfUWrH" rel="tooltip" title="Click to copy">1CFgJLCYp3VruhD685zCwTuJwqGkWfUWrH</button>
					<h5>ETH:</h5><button class="btn btn-primary copyt mb-3" data-clipboard-text="0x4F3c9F09D1ba9652f546dC3492a1B8dE31470399" rel="tooltip" title="Click to copy">0x4F3c9F09D1ba9652f546dC3492a1B8dE31470399</button>
					<h5>LTC:</h5><button class="btn btn-primary copyt mb-3" data-clipboard-text="LcsHRKP78J7GS4USYHEcTvEMMUYPX8CZAS" rel="tooltip" title="Click to copy">LcsHRKP78J7GS4USYHEcTvEMMUYPX8CZAS</button>
					<h5>ZEL:</h5><button class="btn btn-primary copyt mb-3" data-clipboard-text="t1fAPYoLyqm8HshMoWfWEWgwGterWkH9WdT" rel="tooltip" title="Click to copy">t1fAPYoLyqm8HshMoWfWEWgwGterWkH9WdT</button>
				</div>
			</div>
		</div>
	</section>
	<!-- Donate section end -->

    <?php include '../footer.php';?>

    <?php include '../scripts.php';?>

    <script>
    $(document).ready(function(){
        $.MultiLanguage('<?php echo $base_url;?>/lang/charity.json');
    });
    </script>

</body>
</html>