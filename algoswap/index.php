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
			<h2 data-aos="fade-down" data-aos-duration="2000" class="">Algo Swap</h2>
			<div data-aos="zoom-in" data-aos-duration="500" class="site-beradcamb">
				<a href="<?php echo $base_url;?>/" class="lhome">Home </a>
				<i class="fa fa-angle-right"></i><span class="">Algo Swap</span>
			</div>
		</div>
	</section>
	<div class="page-info-section-line"></div>
	<!-- Page info end -->

	<!-- About section -->
	<section class="about-section spad">
		<div class="container">
			<div class="row">
				<div data-aos="fade-right" data-aos-duration="1000"  class="col-lg-6 offset-lg-0 about-text">
					<h2>Modified Equihash 144,5</h2>
					<h5>ZelCash will swap the POW hashing algorithm from ZCash (200,9) Equihash to ZHash (144,5) Equihash to continue our stance of ASIC-resistance.</h5>
					<p>Equihash 144,5 is a "stop-gap" for ZelCash. This algo swap will give us time to continue development for ASIC-resistance by exploring more long-term options, such as ProgPOW.</p>
					<h4>ZelCash Personalization String: "ZelProof"</h4>
				</div>
				<div data-aos="fade-left" data-aos-duration="1000"  class="col-lg-6 offset-lg-0 about-text">
					<h2 >Zawy LWMA Difficulty Algorithm</h2>
					<h5>The difficulty algorithm will swap from DigiShield v3 to LWMA with the Equihash algo swap. The algorithm was developed for micro/small-cap coins to better adjust difficulty for large hash swings.</h5>
					<ul>
						<li>Faster block find retargeting response</li>
						<li>Stronger protection against hash and timestamp attacks</li>
						<li>Reduces number of potential "stolen" blocks</li>
						<li>More info: <a href="https://github.com/zawy12/difficulty-algorithms/issues/3" target="_blank">Zawy Github</a></li>
					</ul>
				</div>
			</div>
		</div>
	</section>
	<!-- About section end -->

	<!-- About2 section -->
	<section class="about-section spad">
		<div class="container">
			<div data-aos="fade-left" data-aos-duration="1000" class="row">
				<div class="col-lg-6 offset-lg-7 about-text">
					<h3>Estimated Swap Date</h3>
					<h5>July 22nd, ~18:00 UTC</h5>
					<h3>Difficulty Algo Swap</h3>
					<h5>Block: 125,000</h5>
					<h3>Both Equihash Algos Allowed</h3>
					<h5>Blocks: 125,100 - 125,110</h5>
					<h3>Equihash 144,5 Algo Swap</h3>
					<h5>Block: 125,110</h5>
				</div>
			</div>
			<div data-aos="fade-right" data-aos-duration="1000" class="algo-img">
				<div data-paroller-factor="0.1" data-paroller-type="foreground" data-paroller-direction="vertical">
					<img src="<?php echo $base_url;?>/img/logo.svg" class="logo-img">
				</div>
			</div>
		</div>
	</section>
	<!-- About2 section end -->
	
	<!-- About3 section -->
	<section class="about-section spad">
		<div class="container">
			<div class="row">
				<div data-aos="fade-right" data-aos-duration="1000"  class="col-lg-6 offset-lg-0 about-text">
					<h2 >Mining Information</h2>
					<h5>Modified Equihash is similar to the original algorithm in terms of GPU settings. Miners must update mining software and mining scripts. You will see a significantly lower sol rate, this is normal.</h5>
					<h3 class="mt-4">NVidia</h3>
					<h5>EWBF</h5>
					<h6>Example script:<b> "miner --algo 144_5 --pers ZelProof --server YOURPOOLURL --port XXXX --user YOURADDRESS --pass x --pec"</b></h6>
					<a href="https://bitcointalk.org/index.php?topic=4466962.0" target="_blank" class="site-btn sb-gradients sbg-line mt-3">EWBF ANN</a>
					<h3 class="mt-4">AMD</h3>
					<h5>lolMiner</h5>
					<h6>Download lolMiner and follow the guide "lolMiner_quickstart.pdf" instructions</h6>
					<a href="https://bitcointalk.org/index.php?topic=4724735" target="_blank" class="site-btn sb-gradients sbg-line mt-3">lolMiner ANN</a>
				</div>
				<div data-aos="fade-left" data-aos-duration="1000"  class="col-lg-6 offset-lg-0 about-text">
					<h2>Expected Hashrates</h2>
					<h3>Nvidia:EWBF</h3>
					<ul>
						<li>1050ti |   15 Sol/s</li>
						<li>1060   |   27 Sol/s</li>
						<li>1070   |   40 Sol/s</li>
						<li>1080   |   45 Sol/s</li>
						<li>1080ti |   64 Sol/s</li>
					</ul>
					<h3 class="mt-4">AMD:lolMiner</h3>
					<ul>
						<li>RX560  |    7 Sol/s</li>
						<li>RX580  |   13 Sol/s</li>
						<li>R9 290 |   12 Sol/s</li>
					</ul>
				</div>
			</div>
		</div>
	</section>
	<!-- About3 section end -->

    <?php include '../footer.php';?>

    <?php include '../scripts.php';?>

    <script>
    $(document).ready(function(){
        $.MultiLanguage('<?php echo $base_url;?>/lang/algoswap.json');
    });
    </script>

</body>
</html>