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
			<h2 data-aos="fade-down" data-aos-duration="2000" class="">Mining ZelCash</h2>
			<div data-aos="zoom-in" data-aos-duration="500" class="site-beradcamb">
				<a href="<?php echo $base_url;?>/" class="lhome">Home </a>
				<i class="fa fa-angle-right"></i><span class="">Mining</span>
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
					<h2>ZelCash</h2>
					<h5>ZelCash is a fair-mined, ASIC-resistant, GPU mineable POW coin. Zel is committed to maintaining ASIC-resistance as needed to protect the decentralization of coin ownership.</h5>
					<p>The Zel project is currently developing the next POW algorithm to remain ASIC-resistant and deter NiceHash usage.</p>
					<h4>Nvidia & AMD miners available - See Below</h4>
				</div>
				<div data-aos="fade-left" data-aos-duration="1000" class="col-lg-6 offset-lg-0 about-text">
					<h2 >POW Mining Info</h2>
					<h5>POW Algorithm: Equihash 144,5 (ZHash)</h5>
					<ul>
						<li>Block Split: 75% POW / 25% ZelNodes</li>
						<li>Block Reward: 112.5 Zel to POW</li>
						<li>Block Time: 120 seconds</li>
						<li>Difficulty Algo: Zawy's LWMA v3 | <a href="https://github.com/zawy12/difficulty-algorithms/" target="_blank" >Zawy Github</a></li>
						<li>Pers String: "ZelProof"</li>
					</ul>
				</div>
			</div>
		</div>
	</section>
	<!-- About section end -->

	<!-- About2 section -->
	<section class="about-section spad gradient-bg">
		<div class="container">
			<div class="row">
				<div data-aos="fade-right" data-aos-duration="1000" class="col-lg-6 offset-lg-0 about-text">
					<div class="coinmarketcap-currency-widget mb-3 bg-white" data-currencyid="3029" data-base="USD" data-secondary="BTC"></div>
					<coingecko-coin-ticker-widget currency="usd" coin-id="zelcash" locale="en"></coingecko-coin-ticker-widget>
				</div>
				<div data-aos="fade-left" data-aos-duration="1000" class="col-lg-6 offset-lg-0 about-text text-white">
					<h5 class="mt-3">Coin Trackers:</h5>
					<a href="https://coinmarketcap.com/currencies/zelcash/" target="_blank" class="site-btn sb-gradients sbg-line mb-3">CoinMarketCap</a>
					<a href="https://www.coingecko.com/en/coins/zelcash" target="_blank" class="site-btn sb-gradients sbg-line mb-3">CoinGecko</a>
					<h5 class="mt-3">ZelCash Resources:</h5>
					<a href="https://zel.cash/#pools" target="_blank" class="site-btn sb-gradients sbg-line mb-3">Mining Pools</a>
					<a href="https://zel.cash/#downloads" target="_blank" class="site-btn sb-gradients sbg-line mb-3">Wallets</a>
					<h5 class="mt-3">Mining Calculators:</h5>
					<a href="https://whattomine.com/coins/287-zel-zhash" target="_blank" class="site-btn sb-gradients sbg-line mb-3">WhatToMine</a>
					<a href="https://www.crypto-coinz.net/coin-info/?58-ZelCash-ZEL-ZHash-calculator/" target="_blank" class="site-btn sb-gradients sbg-line mb-3">Crypto-Coinz</a>
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
					<h2>Miner Software</h2>
					<h3 class="mt-4"><b>lolMiner</b></h3>
					<h5>AMD & Nvidia</h5>
					<h6>Download lolMiner and follow the guide "lolMiner_quickstart.pdf" instructions</h6>
					<a href="https://bitcointalk.org/index.php?topic=4724735" target="_blank" class="site-btn sb-gradients sbg-line mt-3">lolMiner BCT</a>
					<h3 class="mt-4"><b>MiniZ</b></h3>
					<h5>Nvidia</h5>
					<div>
						<a href="https://bitcointalk.org/index.php?topic=4767892.0" target="_blank" class="site-btn sb-gradients sbg-line mt-3">MiniZ BCT</a>
						<a href="https://miniz.ch/" target="_blank" class="site-btn sb-gradients sbg-line mt-3">MiniZ Website</a>
					</div>
					<h3 class="mt-4"><b>Gminer</b></h3>
					<h5>Nvidia</h5>
					<h6>Example script:<b> "miner --algo 144_5 --pers ZelProof --server pool.zel.cash --port 2001 --user ZELCASHADDRESS.rigName --pass x"</b></h6>
					<a href="https://bitcointalk.org/index.php?topic=5034735.0" target="_blank" class="site-btn sb-gradients sbg-line mt-3">Gminer BCT</a>
				</div>
				<div data-aos="fade-left" data-aos-duration="1000"  class="col-lg-6 offset-lg-0 about-text">
					<h2>Estimated Hashrates</h2>
					<h3>AMD : lolMiner</h3>
					<ul>
						<li>RX580	|	28 Sol/s</li>
						<li>Vega64	|	44 Sol/s</li>
					</ul><br>
					<h3>Nvidia : MiniZ Example</h3>
					<ul>
						<li>1050ti	|	20-22 Sol/s</li>
						<li>1060	|	36-40 Sol/s</li>
						<li>1070	|   59-65 Sol/s</li>
						<li>1070ti	|   64-74 Sol/s</li>
						<li>1080	|   65-73 Sol/s</li>
						<li>1080ti	|   88-96 Sol/s</li>
						<li>2070	|   63-71 Sol/s</li>
					</ul><br>
					<h3>Nvidia : Gminer Example</h3>
					<ul>
						<li>1060	|	37 Sol/s</li>
						<li>1070ti	|   62 Sol/s</li>
						<li>1080	|   64 Sol/s</li>
						<li>1080ti	|   86-91 Sol/s</li>
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