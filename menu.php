<?php include 'unified.php';?>

<header class="header-section clearfix">
    <div class="container-fluid">
        <a href="<?php echo $base_url;?>/" class="site-logo">
            <img src="<?php echo $base_url;?>/img/logo-zelcash-text.svg" alt="">
        </a>
        <div class="responsive-bar"><i class="fas fa-bars"></i></div>
        <nav class="main-menu">
            <ul class="menu-list">
                <li><a href="<?php echo $base_url;?>/" class="lhome">Home</a></li>
                <li><a href="<?php echo $base_url;?>/#about" class="labout">About</a></li>
                <li><a href="<?php echo $base_url;?>/#roadmap" class="lroadmap">Roadmap</a></li>
                <li><a href="<?php echo $base_url;?>/#team" class="lteam">Team + Partners</a></li>
                <li><a href="<?php echo $base_url;?>/#exchanges" class="lexchanges">Exchanges</a></li>
                <li><a href="<?php echo $base_url;?>/#downloads" class="ldownloads">Downloads</a></li>
                <li><a href="<?php echo $base_url;?>/#pools" class="lpools">Pools</a></li>
                <li><a href="<?php echo $base_url;?>/#tools" class="ltools">Tools & Resources</a></li>
                <li><a href="<?php echo $base_url;?>/algoswap/" class="lalgoswap">Algoswap</a></li>

                <div class="dropdown">
                    <a><button class="dropbtn sb-gradients llanguages">Languages</button></a>
                    <div class="dropdown-content">
                        <a href="" onclick="$.MultiLanguage('<?php echo $base_url;?>/lang/home.json', 'en')"><span class="flag-icon flag-icon-gb"></span> English</a>
                        <a href="" onclick="$.MultiLanguage('<?php echo $base_url;?>/lang/home.json', 'sv')"><span class="flag-icon flag-icon-se"></span> Svenska</a>
                    </div>
                </div>

            </ul>
        </nav>
    </div>
</header>