<!DOCTYPE html>
<html lang="en">
<head>
    <?php include 'head.php';?>
</head>
<body>

    <?php include 'menu.php';?>

    <?php include 'hero.php';?>

    <?php include 'about.php';?>

    <?php include 'features.php';?>

    <?php include 'roadmap.php';?>

    <?php include 'team.php';?>

    <?php include 'partners.php';?>

    <?php include 'exchanges.php';?>

    <?php include 'downloads.php';?>

    <?php include 'pools.php';?>

    <?php include 'tools.php';?>

    <?php include 'footer.php';?>

    <?php include 'scripts.php';?>

    <script>
    $(document).ready(function(){
		$.MultiLanguage('<?php echo $base_url;?>/lang/home.json');
	});
    </script>

</body>
</html>
