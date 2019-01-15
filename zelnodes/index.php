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
		background: url("https://source.unsplash.com/1920x460/?datacenter");
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
			<h2 data-aos="fade-down" data-aos-duration="2000">ZelNodes</h2>
			<div data-aos="zoom-in" data-aos-duration="500" class="site-beradcamb">
				<a href="<?php echo $base_url;?>/" class="lhome">Home </a>
				<i class="fa fa-angle-right"></i><span>ZelNodes</span>
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
					<!-- <img src="../img/Acadia Logo.png"> -->
					<h2>Countdown to ZelNodes</h2>
					<div class="blockheight">Current Blockheight:</div>
					<div id="clockdiv" class="timer">
						<div class="days"></div>
						<div class="hours"></div>
						<div class="minutes"></div>
						<div class="seconds"></div>
					</div>
					<h5>ZelNodes release on height: 300,000</h5>
					<h5>Estimated releasedate for ZelNodes: xth x 2019</h5>
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
					<h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut rem voluptatum iusto aperiam necessitatibus porro non voluptatem dignissimos autem, excepturi obcaecati nulla fuga ratione sapiente? Commodi deleniti qui animi aut?</h5>
					<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae dolorem iste ratione reiciendis ducimus sequi? Molestiae, fugit. Veritatis, sapiente veniam laborum aliquam dicta excepturi itaque maxime, hic molestiae, consequatur cupiditate.</p>
				</div>
				<div data-aos="fade-left" data-aos-duration="1000"  class="col-lg-6 offset-lg-0 about-text">
					<h2>Highlights</h2>
					<ul>
						<li>Scalable</li>
						<li>ZelNodes <a rel="tooltip" title="3-Tier decentralized network"><i class="fas fa-info-circle"></i></a></li>
					</ul>
				</div>
			</div>
		</div>
	</section>
	<!-- About section end -->

	<!-- ZelNodes -->
	<section class="features-section spad gradient-bg">
		<div class="container text-white">
			<div data-aos="fade-down" data-aos-duration="1000" class="section-title text-center">
				<h2>ZelNodes</h2>
				<p>3-tiers</p>
			</div>
			<div class="row">
				<div data-aos="zoom-in" data-aos-duration="500" class="col-md-6 col-lg-4 feature">
					<i class="ti-layout-grid2-alt"></i>
					<div class="feature-content">
						<h4>ZelNode Basic</h4>
						<p>10,000 ZEL</p>
						<ul>
							<li>2 vCore</li>
							<li>4GB RAM</li>
							<li>50GB SSD</li>
							<li>2.5TB Bandwidth</li>
						</ul>
					</div>
				</div>
				<div data-aos="zoom-in" data-aos-duration="500" class="col-md-6 col-lg-4 feature">
					<i class="ti-layout-grid3-alt"></i>
					<div class="feature-content">
						<h4>ZelNode Super</h4>
						<p>25,000 ZEL</p>
						<ul>
							<li>4 vCore</li>
							<li>8GB RAM</li>
							<li>150GB SSD</li>
							<li>4TB Bandwidth</li>
						</ul>
					</div>
				</div>
				<div data-aos="zoom-in" data-aos-duration="500" class="col-md-6 col-lg-4 feature">
					<i class="ti-layout-grid4-alt"></i>
					<div class="feature-content">
						<h4>ZelNode BAMF</h4>
						<p>100,000 ZEL</p>
						<ul>
							<li>8 vCore</li>
							<li>32GB RAM</li>
							<li>600GB SSD</li>
							<li>6TB Bandwidth</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</section>
	<!-- ZelNodes end -->

	<!-- Reward Structure -->
	<section id="about" class="about-section spad">
		<div class="container">
			<div data-aos="fade-right" data-aos-duration="1000" class="row">
				<div class="col-lg-6 offset-lg-6 about-text">
					<h2>Reward Structure</h2>
					<h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore voluptatibus velit nobis mollitia repellendus accusamus, rerum nihil repellat totam, dolorum autem animi maiores. Doloremque obcaecati hic nihil totam, recusandae excepturi.</h5>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus tenetur nam, magnam error enim nisi beatae ea aliquam soluta excepturi voluptas fugiat perferendis voluptate adipisci eum eligendi consequuntur amet harum.</p>
				</div>
			</div>
			<div data-aos="fade-left" data-aos-duration="1000" class="about-img">
				<div class="offset-lg-3 about-text">
					<div class="pieID pie"></div>
					<ul class="pieID legend">
						<li>
						<em>Basic</em>
						<span>3.75</span>
						</li>
						<li>
						<em>Super</em>
						<span>6.25</span>
						</li>
						<li>
						<em>BAMF</em>
						<span>15</span>
						</li>
						<li>
						<em>POW</em>
						<span>75</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</section>
	<!-- Reward Structure end -->

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
		let forkHeight=300000;
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
	<script>
	function sliceSize(dataNum, dataTotal) {
		return (dataNum / dataTotal) * 360;
	}
	function addSlice(sliceSize, pieElement, offset, sliceID, color) {
		$(pieElement).append("<div class='slice "+sliceID+"'><span></span></div>");
		var offset = offset - 1;
		var sizeRotation = -179 + sliceSize;
		$("."+sliceID).css({
			"transform": "rotate("+offset+"deg) translate3d(0,0,0)"
		});
		$("."+sliceID+" span").css({
			"transform"       : "rotate("+sizeRotation+"deg) translate3d(0,0,0)",
			"background-color": color
		});
	}
	function iterateSlices(sliceSize, pieElement, offset, dataCount, sliceCount, color) {
		var sliceID = "s"+dataCount+"-"+sliceCount;
		var maxSize = 179;
		if(sliceSize<=maxSize) {
			addSlice(sliceSize, pieElement, offset, sliceID, color);
		} else {
			addSlice(maxSize, pieElement, offset, sliceID, color);
			iterateSlices(sliceSize-maxSize, pieElement, offset+maxSize, dataCount, sliceCount+1, color);
		}
	}
	function createPie(dataElement, pieElement) {
		var listData = [];
		$(dataElement+" span").each(function() {
			listData.push(Number($(this).html()));
		});
		var listTotal = 0;
		for(var i=0; i<listData.length; i++) {
			listTotal += listData[i];
		}
		var offset = 0;
		var color = [
			"cornflowerblue", 
			"olivedrab", 
			"orange", 
			"tomato", 
			"crimson", 
			"purple", 
			"turquoise", 
			"forestgreen", 
			"navy", 
		];
		for(var i=0; i<listData.length; i++) {
			var size = sliceSize(listData[i], listTotal);
			iterateSlices(size, pieElement, offset, i, 0, color[i]);
			$(dataElement+" li:nth-child("+(i+1)+")").css("border-color", color[i]);
			offset += size;
		}
	}
	createPie(".pieID.legend", ".pieID.pie");
	</script>

</body>
</html>