<!DOCTYPE html>
<html lang="en">
<head>
    <?php include '../head.php';?>
	<style>
	.countdown {
		text-align: center;
		bottom: 40px;
		width: 100%;
		color: #232220;
		margin: 0 auto;
	}
	.countdown .timer {
		max-width: 500px;
		height: 100px;
		margin: auto;
	}
	.days,
	.hours,
	.minutes,
	.seconds {
		margin: 10px 0;
		width: 24%;
		float: left;
		font-size: 45px;
		font-weight: thin;
		text-align: center;
	}
	.days,
	.hours,
	.minutes {
		border-right: 2px solid #232220;
	}
	.days:after {
		content: "days";
		font-size: 12px;
		position: relative;
		left: 3px;
	}
	.hours:after {
		content: "h";
		font-size: 12px;
		position: relative;
		left: 3px;
	}
	.minutes:after {
		content: "min";
		font-size: 12px;
		position: relative;
		left: 3px;
	}
	.seconds:after {
		content: "sec";
		font-size: 12px;
		position: relative;
		left: 3px;
	}
	.page-info-section {
		background: url("https://source.unsplash.com/1920x460/?acadia");
	}
	.countdown img {
		width: 200px;
		padding-bottom: 50px;
	}
	</style>
</head>
<body>

    <?php include '../menu.php';?>

	<!-- Page info section -->
	<section class="page-info-section" data-paroller-factor="0.5">
		<div class="container">
			<h2 data-aos="fade-down" data-aos-duration="2000">Acadia Upgrade</h2>
			<div data-aos="zoom-in" data-aos-duration="500" class="site-beradcamb">
				<a href="<?php echo $base_url;?>/" class="lhome">Home </a>
				<i class="fa fa-angle-right"></i><span>Acadia Upgrade</span>
			</div>
		</div>
	</section>
	<div class="page-info-section-line"></div>
	<!-- Page info end -->


	<!-- Timer section -->
	<section class="about-section spad">
		<div class="container center">
			<div data-aos="fade-down" data-aos-duration="1000" class="row">
				<div class="countdown">
					<img src="../img/Acadia Logo.png">
					<h2>Countdown to Acadia upgrade</h2>
					<div class="blockheight">Current Blockheight:</div>
					<div id="clockdiv" class="timer">
						<div class="days"></div>
						<div class="hours"></div>
						<div class="minutes"></div>
						<div class="seconds"></div>
					</div>
					<h5><a href="https://github.com/zelcash/zelcash/releases" target="_blank">Acadia Binaries release: 14th December 2018</a></h5>
					<h5>Acadia network activation height: 250,000</h5>
					<h5>Estimated Acadia Activation Date: 12th January 2019</h5>
				</div>
			</div>
		</div>
	</section>
	<!-- Timer section end -->

	<!-- About section -->
	<section class="about-section spad">
		<div class="container">
			<div class="row">
				<div data-aos="fade-right" data-aos-duration="1000"  class="col-lg-6 offset-lg-0 about-text">
					<h2>Info</h2>
					<h5>Acadia is the codename for the upcoming ZelCash network upgrade. It brings the latest technological developments from Zcash’s Overwinter and Sapling network upgrades, and an improved difficulty algorithm from <a href="https://github.com/zawy12" target="_blank">@zawy12</a></h5>
					<p>Acadia includes all the changes and improvements from Zcash 2.0.2 and brings ZelCash up to date with the latest developments. A big thank you to the Zcash Team</p>
				</div>
				<div data-aos="fade-left" data-aos-duration="1000"  class="col-lg-6 offset-lg-0 about-text">
					<h2>Changes</h2>
					<h5>Reference: <a href="https://z.cash/upgrade/sapling/" target="_blank">Sapling</a> and <a href="https://z.cash/upgrade/overwinter/" target="_blank">Overwinter</a></h5>
					<ul>
						<li>Performance improvement of transparent addresses</li>
						<li>Performance of shielded addresses <a rel="tooltip" title="Payments involving the new Sapling z-addresses can be constructed in as little as a few seconds and with only 40 megabytes of memory."><i class="fas fa-info-circle"></i></a></li>
						<li>Replay Protection <a rel="tooltip" title="Getting us ready for future network upgrades."><i class="fas fa-info-circle"></i></a></li>
						<li>Decoupled spend authority <a rel="tooltip" title="Allows the hardware that constructs the zero-knowledge proof to be independent from the hardware that signs for the transaction."><i class="fas fa-info-circle"></i></a></li>
						<li>Improved keys <a rel="tooltip" title="Full viewing keys allow owners of shielded addresses the ability to view incoming and outgoing transaction details without exposing their private spending key."><i class="fas fa-info-circle"></i></a></li>
						<li>Improved Difficulty Algorithm <a rel="tooltip" title="Bringing us up to the latest from zawy12, LWMA-4."><i class="fas fa-info-circle"></i></a></li>
						<li>New address <a rel="tooltip" title="Address: za (Acadia)"><i class="fas fa-info-circle"></i></a></li>
					</ul>
				</div>
			</div>
		</div>
	</section>
	<!-- About section end -->

	<!-- FAQ section -->
	<section class="about-section spad">
		<div class="container center">
			<div data-aos="fade-down" data-aos-duration="1000" class="row">
				<div class="about-text">
					<h2>FAQ</h2>
					<h4>This sounds great, but what do I need to do?</h4>
					<h4>Well it depends on what you use so:</h4>
					<hr>
					<h5>ZelCore user</h5>
					<p>If you have auto update enabled, nothing. Great, right? If you don’t then make sure to download the latest version when prompted. (If you use fullnode, ZelCore will download new binaries and will fetch the new keys required to remain compatible with Acadia (don’t worry it’s all automatic) but don’t worry if you see it redownloading things next time you launch it.)</p>
					<hr>
					<h5>Copay user</h5>
					<p>Also keep an eye out on those updates.</p>
					<hr>
					<h5>Swing user</h5>
					<p>Make sure to update, keep an eye out on the 14th/15th of December a new version will be released, you will need to update to remain compatible. Make sure to backup your wallet.dat before updating but you should of already of done that.</p>
					<hr>
					<h5>Zelcashd user</h5>
					<p>I think you know what you are doing ;) But Acadia is a mandatory update and you will be required to update your Zelcash Daemon and Cli.</p>
				</div>
			</div>
		</div>
	</section>
	<!-- FAQ section end -->

    <?php include '../footer.php';?>

    <?php include '../scripts.php';?>

    <script>
    $(document).ready(function(){
        $.MultiLanguage('<?php echo $base_url;?>/lang/charity.json');
	});
	</script>
	<script>
	$(document).ready(function() {
	"use strict";
  
	var msDay   = 86400000,
		msHour  = 3600000,
		msMin   = 60000,
		msSec   = 1000,
		conDate = new Date(),
		$days = $('.days'),
		$hours = $('.hours'),
		$mins = $('.minutes'),
		$sec = $('.seconds');

	$.getJSON('https://zel.coinblockers.com/api/stats', function(data) {
		let forkHeight=250000;
		let blockTime=120;
		let currentHeight = `${data.pools.zelcash.poolStats.networkBlocks}`
		let blocksLeft = forkHeight - currentHeight;
		let timeLeft = blocksLeft * blockTime;

		conDate.setSeconds(conDate.getSeconds() + timeLeft);

		$( "div.blockheight" ).html("Current Blockheight: "+currentHeight);
	});
  
	function SplitDiff(time) {
		var nums = '',
		remainder = 0;
    
		nums = Math.floor(time / msDay);
		remainder = time % msDay;

		nums += ':' + Math.floor(remainder / msHour);
		remainder = remainder % msHour;

		nums += ':' + Math.floor(remainder / msMin);
		remainder = remainder % msMin;

		nums += ':' + Math.floor(remainder / msSec);
	
		return nums.split(':');
	}
  
	function DisplayTime(splitTime) {
		$days.html(splitTime[0]);
		$hours.html(splitTime[1]);
		$mins.html(splitTime[2]);
		$sec.html(splitTime[3]);
	}

	function loop() {
		var splitTime;
		splitTime = SplitDiff(conDate - Date.now());
		DisplayTime(splitTime);
    
		setTimeout(loop, 1000);
	}

	loop();
	});
    </script>

</body>
</html>